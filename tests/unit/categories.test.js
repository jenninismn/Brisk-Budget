const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { describe, beforeEach, expect, test } = require('@jest/globals');

const categoriesFile = path.join(__dirname, '../../public/js/categories.js');
const categoriesCode = fs.readFileSync(categoriesFile, 'utf8');

const loadCategories = () => {
  const context = vm.createContext({});
  return vm.runInContext(`${categoriesCode}\nCategories;`, context);
};

describe('Categories Frontend-Logik', () => {
  let Categories;

  beforeEach(() => {
    Categories = loadCategories();
    Categories.list = [
      {
        id: 'cat1',
        name: 'Freizeit',
        emoji: '🎮',
        subcategories: [
          { id: 'sub1', name: 'Kino' },
          { id: 'sub2', name: 'Gaming' }
        ]
      },
      {
        id: 'cat2',
        name: 'Wohnen',
        emoji: '🏠'
      }
    ];
  });

  test('getAllCategoryNames gibt Haupt- und Unterkategorien zurück', () => {
    const names = Categories.getAllCategoryNames();

    expect(names).toEqual(['Freizeit', 'Kino', 'Gaming', 'Wohnen']);
  });

  test('getAllCategoryNames funktioniert mit einer leeren Kategorienliste', () => {
    Categories.list = [];

    expect(Categories.getAllCategoryNames()).toEqual([]);
  });

  test('findParentCategory findet die Hauptkategorie einer Unterkategorie', () => {
    const parent = Categories.findParentCategory('Kino');

    expect(parent.id).toBe('cat1');
    expect(parent.name).toBe('Freizeit');
  });

  test('findParentCategory gibt bei unbekannter Unterkategorie null zurück', () => {
    expect(Categories.findParentCategory('Unbekannt')).toBeNull();
  });

  test('getCategoryInfo erkennt eine Hauptkategorie', () => {
    const info = Categories.getCategoryInfo('Wohnen');

    expect(info.category.id).toBe('cat2');
    expect(info.subcategory).toBeNull();
    expect(info.emoji).toBe('🏠');
  });

  test('getCategoryInfo erkennt eine Unterkategorie und verwendet das Emoji der Hauptkategorie', () => {
    const info = Categories.getCategoryInfo('Gaming');

    expect(info.category.id).toBe('cat1');
    expect(info.subcategory.id).toBe('sub2');
    expect(info.emoji).toBe('🎮');
  });

  test('getCategoryInfo liefert Fallback-Werte für einen unbekannten Namen', () => {
    const info = Categories.getCategoryInfo('Unbekannt');

    expect(info.category).toBeNull();
    expect(info.subcategory).toBeNull();
    expect(info.emoji).toBe('❓');
  });
});
