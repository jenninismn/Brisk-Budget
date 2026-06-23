const { describe, beforeEach, expect, test } = require('@jest/globals');
const { accrueOne, addOneMonth } = require('../../server/utils/mortgage');
const { readJSON, writeJSON } = require('../../server/utils/helpers');

beforeEach(() => {
  expect.hasAssertions();
  jest.clearAllMocks();
});

//für accrueOne in mortgage.js, weil das von einigen Dateien abhängt
jest.mock('../../server/utils/helpers', () => ({
  readJSON: jest.fn(),
  writeJSON: jest.fn(),
  generateId: jest.fn(() => 'mock-id')
}));

jest.mock('../../server/config/paths', () => ({
  getTransactionsFile: jest.fn(() => 'fake-file.json'),
  accountsFile: 'accounts.json'
}));


describe('Mortgage Zinsberechnung Logik', () => {

  test('addOneMonth springt korrekt einen Monat weiter', () => {
    const initialDate = '2026-06-15';
    const expectedDate = '2026-07-15';

    const resultDate = addOneMonth(initialDate);

    expect(resultDate).toStrictEqual(expectedDate);
  });

  test('addOneMonth behandelt Monatsende-Überschreitungen korrekt', () => {
    const endOfJan = '2026-01-31';
    const expectedEndOfFeb = '2026-02-28';

    const resultDate = addOneMonth(endOfJan);

    expect(resultDate).toStrictEqual(expectedEndOfFeb);
  });

  test('accrueOne ignoriert Accounts, die keine Hypotheken sind', () => {
    const fakeAccount = { type: 'checking', active: true };

    const result = accrueOne(fakeAccount);
    
    expect(result).toStrictEqual(false);
  });

  test('inaktive Mortgage wird ignoriert', () => {
    const account = {
        type: 'mortgage',
        active: false
    };

    expect(accrueOne(account)).toBe(false);
  })

  test('fehlendes lastInterestAccrual wird gesetzt', () => {
    const account = {
        type: 'mortgage',
        active: true
    };

    const result = accrueOne(account);

    expect(result).toBe(true);
    expect(account.lastInterestAccrual).toBeDefined();
  })


  //Test mit mocks.
  test('erstellt eine Zins-Transaktion für offene Mortgage', () => {

    readJSON.mockReturnValue([]);

    const account = {
        id: 'mort1',
        type: 'mortgage',
        active: true,
        interestRate: 12,
        startingBalance: -1000,
        lastInterestAccrual: '2026-05-01'
    };

    accrueOne(account);

    expect(writeJSON).toHaveBeenCalled();

    const writtenTransactions = writeJSON.mock.calls[0][1];

    expect(writtenTransactions).toHaveLength(1);
    expect(writtenTransactions[0].payee).toBe('Interest');
    expect(writtenTransactions[0].amount).toBe(-10);
  });


  test('erstellt keine Zinsen bei 0 Prozent Zinssatz', () => {

    readJSON.mockReturnValue([]);

    const account = {
        id: 'mort1',
        type: 'mortgage',
        active: true,
        interestRate: 0,
        startingBalance: -1000,
        lastInterestAccrual: '2026-05-01'
    };

    accrueOne(account);

    expect(writeJSON).not.toHaveBeenCalled();
  });

});