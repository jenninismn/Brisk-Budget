const fs = require('fs');
const path = require('path');
const { describe, beforeEach, afterAll, expect, test } = require('@jest/globals');

const mockTempCatFile = path.join(__dirname, 'test-categories.json');
const mockAccountsFile = path.join(__dirname, 'test-accounts.json');
const mockRecurringFile = path.join(__dirname, 'test-recurring.json');
const mockTransactionsDir = path.join(__dirname, 'transactions');
const getMockTransactionsFile = (accountId) =>
    path.join(mockTransactionsDir, `${accountId}.json`);

jest.mock('../../server/config/paths', () => {

    const path = require('path');

    return {
        categoriesFile: mockTempCatFile,
        accountsFile: mockAccountsFile,
        recurringFile: mockRecurringFile,

        getTransactionsFile: (accountId) =>
            path.join(mockTransactionsDir, `${accountId}.json`)
    };
});

const categories = require('../../server/routes/categories');
const { readJSON, writeJSON } = require('../../server/utils/helpers');
const { defaultCategories } = require('../../server/config/defaults');

const createRequest = (body) => ({
  on: jest.fn((event, callback) => {
    if (event === 'data') {
      callback(JSON.stringify(body));
    }

    if (event === 'end') {
      callback();
    }
  })
});

describe('Categories Integration Tests', () => {

  beforeEach(() => {
    if (fs.existsSync(mockTempCatFile)) fs.unlinkSync(mockTempCatFile);

    if (fs.existsSync(mockAccountsFile)) fs.unlinkSync(mockAccountsFile);

    if (fs.existsSync(mockRecurringFile)) fs.unlinkSync(mockRecurringFile);

    if (fs.existsSync(mockTransactionsDir)) {
      fs.rmSync(mockTransactionsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(mockTransactionsDir, { recursive: true });
  });

  afterAll(() => {
    if (fs.existsSync(mockTempCatFile)) fs.unlinkSync(mockTempCatFile);

    if (fs.existsSync(mockAccountsFile)) fs.unlinkSync(mockAccountsFile);

    if (fs.existsSync(mockRecurringFile)) fs.unlinkSync(mockRecurringFile);

    if (fs.existsSync(mockTransactionsDir)) {
      fs.rmSync(mockTransactionsDir, { recursive: true, force: true });
    }
  });

  test('resetCategories schreibt die Standard-Kategorien als ECHTE Datei auf die Festplatte', async () => {
    
    const req = {};
    
    const res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };

    await categories.resetCategories(req, res);

    expect(fs.existsSync(mockTempCatFile)).toBe(true);

    const savedData = readJSON(mockTempCatFile);
    
    expect(savedData).toStrictEqual(defaultCategories);
    
    expect(res.end).toHaveBeenCalled();
  });


  test('getCategories liest Kategorien als ECHTE Datei von der Festplatte', () => {

    const testData = [{ id: 'cat1', name: 'Urlaub', emoji: '🌴', sortOrder: 1 }];
    fs.writeFileSync(mockTempCatFile, JSON.stringify(testData));

    const req = {}; 
    const res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };

    categories.getCategories(req, res);

    expect(res.end).toHaveBeenCalledWith(JSON.stringify(testData));
  });

  test('createCategory schreibt eine neue Kategorie korrekt in die echte Datei', async () => {
    //Fake-Request der data und end kennt (events)
    const fakeReq = {
      on: jest.fn((event, callback) => {
        if (event === 'data') {
          callback(JSON.stringify({ name: 'Freizeit', emoji: '🎮' }));
        }
        if (event === 'end') {
          callback();
        }
      })
    };

    const res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };


    fs.writeFileSync(mockTempCatFile, JSON.stringify([]));

    await categories.createCategory(fakeReq, res);

    const savedData = JSON.parse(fs.readFileSync(mockTempCatFile, 'utf8'));

    expect(savedData).toHaveLength(1);
    expect(savedData[0].name).toBe('Freizeit');
    expect(savedData[0].emoji).toBe('🎮');
    expect(savedData[0].id).toBeDefined(); 
  });

  test('updateCategory aktualisiert eine vorhandene Kategorie korrekt in der echten Datei', async () => {

    const testData = [
      {
        id: 'cat1',
        name: 'Urlaub',
        emoji: '🌴',
        sortOrder: 1,
        subcategories: []
      }
    ];

    fs.writeFileSync(mockTempCatFile, JSON.stringify(testData));

    const fakeReq = {
      on: jest.fn((event, callback) => {
        if (event === 'data') {
          callback(JSON.stringify({name: 'Reisen', emoji: '✈️'}));
        }
        if (event === 'end') {
          callback();
        }
      })
    };

    const res = {
      writeHead: jest.fn(),
      end: jest.fn()
    };

    await categories.updateCategory(fakeReq, res, 'cat1');

    const savedData = readJSON(mockTempCatFile);

    expect(savedData).toHaveLength(1);

    expect(savedData[0].name).toBe('Reisen');
    expect(savedData[0].emoji).toBe('✈️');
    expect(savedData[0].sortOrder).toBe(1);
    expect(savedData[0].subcategories).toEqual([]);
  });

  test('deleteCategory löscht eine Kategorie und ersetzt alle Verwendungen', async () => {

      const categoriesData = [
          {
              id: 'cat1',
              name: 'Urlaub',
              subcategories: [
                  { id: 'sub1', name: 'Hotel' }
              ]
          },
          {
              id: 'cat2',
              name: 'Reisen',
              subcategories: []
          }
      ];

      writeJSON(mockTempCatFile, categoriesData);

      writeJSON(mockAccountsFile, [
          { id: 'acc1' }
      ]);

      writeJSON(getMockTransactionsFile('acc1'), [
          { id: 1, category: 'Urlaub' },
          { id: 2, category: 'Hotel' },
          { id: 3, category: 'Sonstiges' }
      ]);

      writeJSON(mockRecurringFile, [
          { id: 1, category: 'Urlaub' },
          { id: 2, category: 'Hotel' }
      ]);

      const req = createRequest({
          replacementCategory: 'Reisen'
      });

      const res = {
          writeHead: jest.fn(),
          end: jest.fn()
      };

      await categories.deleteCategory(req, res, 'cat1');

      const savedCategories = readJSON(mockTempCatFile);
      const savedTransactions = readJSON(getMockTransactionsFile('acc1'));
      const savedRecurring = readJSON(mockRecurringFile);

      expect(savedCategories).toHaveLength(1);
      expect(savedCategories[0].name).toBe('Reisen');

      expect(savedTransactions[0].category).toBe('Reisen');
      expect(savedTransactions[1].category).toBe('Reisen');
      expect(savedTransactions[2].category).toBe('Sonstiges');

      expect(savedRecurring[0].category).toBe('Reisen');
      expect(savedRecurring[1].category).toBe('Reisen');

      expect(res.end).toHaveBeenCalled();
  });

  test('addSubcategory fügt eine Unterkategorie korrekt hinzu', async () => {

    const categoriesData = [
        {
            id: 'cat1',
            name: 'Urlaub',
            subcategories: []
        }
    ];

    writeJSON(mockTempCatFile, categoriesData);

    const req = createRequest({
        name: 'Hotel'
    });

    const res = {
        writeHead: jest.fn(),
        end: jest.fn()
    };

    await categories.addSubcategory(req, res, 'cat1');

    const savedData = readJSON(mockTempCatFile);

    expect(savedData[0].subcategories).toHaveLength(1);
    expect(savedData[0].subcategories[0].name).toBe('Hotel');
    expect(savedData[0].subcategories[0].sortOrder).toBe(1);

    expect(res.end).toHaveBeenCalled();
  });

  test('updateSubcategory aktualisiert eine Unterkategorie und ersetzt alle Transaktionen', async () => {

    writeJSON(mockTempCatFile, [
        {
            id: 'cat1',
            name: 'Urlaub',
            subcategories: [
                {
                    id: 'sub1',
                    name: 'Hotel',
                    sortOrder: 0
                }
            ]
        }
    ]);

    writeJSON(mockAccountsFile, [
        {
            id: 'acc1'
        }
    ]);

    writeJSON(path.join(mockTransactionsDir, 'acc1.json'), [
        {
            id: 'tx1',
            category: 'Hotel'
        },
        {
            id: 'tx2',
            category: 'Sonstiges'
        }
    ]);

    const req = {
        on: jest.fn((event, callback) => {
            if (event === 'data') {
                callback(JSON.stringify({
                    name: 'Unterkunft'
                }));
            }

            if (event === 'end') {
                callback();
            }
        })
    };

    const res = {
        writeHead: jest.fn(),
        end: jest.fn()
    };

    await categories.updateSubcategory(req, res, 'cat1', 'sub1');

    const savedCategories = readJSON(mockTempCatFile);
    const savedTransactions = readJSON(
        path.join(mockTransactionsDir, 'acc1.json')
    );

    expect(savedCategories[0].subcategories[0].name).toBe('Unterkunft');

    expect(savedTransactions[0].category).toBe('Unterkunft');
    expect(savedTransactions[1].category).toBe('Sonstiges');

    expect(res.end).toHaveBeenCalled();
  });

  test('deleteSubcategory löscht eine Unterkategorie und ersetzt alle Transaktionen', async () => {

    writeJSON(mockTempCatFile, [
        {
            id: 'cat1',
            name: 'Urlaub',
            subcategories: [
                {
                    id: 'sub1',
                    name: 'Hotel',
                    sortOrder: 0
                }
            ]
        }
    ]);

    writeJSON(mockAccountsFile, [
        {
            id: 'acc1'
        }
    ]);

    writeJSON(path.join(mockTransactionsDir, 'acc1.json'), [
        {
            id: 'tx1',
            category: 'Hotel'
        },
        {
            id: 'tx2',
            category: 'Sonstiges'
        }
    ]);

    const req = {
        on: jest.fn((event, callback) => {
            if (event === 'data') {
                callback(JSON.stringify({
                    replacementCategory: 'Urlaub'
                }));
            }

            if (event === 'end') {
                callback();
            }
        })
    };

    const res = {
        writeHead: jest.fn(),
        end: jest.fn()
    };

    await categories.deleteSubcategory(req, res, 'cat1', 'sub1');

    const savedCategories = readJSON(mockTempCatFile);
    const savedTransactions = readJSON(
        path.join(mockTransactionsDir, 'acc1.json')
    );

    expect(savedCategories[0].subcategories).toHaveLength(0);

    expect(savedTransactions[0].category).toBe('Urlaub');
    expect(savedTransactions[1].category).toBe('Sonstiges');

    expect(res.end).toHaveBeenCalled();
  });
  
});
