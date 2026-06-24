const fs = require('fs');
const path = require('path');
const { describe, beforeEach, afterAll, expect, test } = require('@jest/globals');

const mockTempCatFile = path.join(__dirname, 'test-categories.json');

jest.mock('../../server/config/paths', () => ({
  categoriesFile: mockTempCatFile,
}));

const categories = require('../../server/routes/categories');
const { readJSON } = require('../../server/utils/helpers');
const { defaultCategories } = require('../../server/config/defaults');

describe('Categories Integration Tests', () => {

  beforeEach(() => {
    if (fs.existsSync(mockTempCatFile)) fs.unlinkSync(mockTempCatFile);
  });

  afterAll(() => {
    if (fs.existsSync(mockTempCatFile)) fs.unlinkSync(mockTempCatFile);
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
});