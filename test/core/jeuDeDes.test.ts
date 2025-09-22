import 'jest-extended';
import { JeuDeDes } from '../../src/core/jeuDeDes';

describe('JeuDeDesTest', () => {
  let jdd: JeuDeDes;

  beforeEach(() => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, () => {
    expect(jdd.joueurs).toEqual("[]");
  });

  // 3 dés -> somme entre 3 et 18 (bornes inclusives)
  it('devrait retourner une valeur entre 3 et 18', () => {
    for (let i = 0; i < 200; i++) {
      const s = jdd.brasser();
      expect(s).toBeGreaterThanOrEqual(3);
      expect(s).toBeLessThanOrEqual(18);
    }
  });

  // 3 et 18 sont rares -> plus d’essais
  it('devrait retourner finalement toutes les valeurs entre 3 et 18', () => {
    const resultats = new Set<number>();
    for (let i = 0; i < 2000; i++) {
      resultats.add(jdd.brasser());
    }
    // 16 valeurs attendues de 3 à 18
    expect(resultats.size).toBeGreaterThanOrEqual(14); // tolérance minimale
    for (let v = 3; v <= 18; v++) {
      expect(resultats.has(v)).toBeTrue();
    }
    // hors bornes
    expect(resultats.has(2)).toBeFalse();
    expect(resultats.has(19)).toBeFalse();
  });
});
