import 'jest-extended';
import { readFileSync } from 'fs';
import path from 'path';

let content = "";
beforeAll(async () => {
  const filename = path.join('test', 'routes', 'jeuRouter-redemarrerJeu-lab0.test.ts');
  content = readFileSync(filename, 'utf-8');
});

describe('redemarrerJeu.test.ts', () => {
  it('devrait contenir get("/api/v1/jeu/redemarrerJeu")', () => {
    const hasSingle = content.includes("get('/api/v1/jeu/redemarrerJeu')");
    const hasDouble = content.includes('get("/api/v1/jeu/redemarrerJeu")');
    expect(hasSingle || hasDouble).toBeTrue();
  });

  it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu())", () => {
    const hasJouer = content.includes("/api/v1/jeu/jouer/");
    const has404toBe = content.includes(".status).toBe(404)");
    const has404Expect = content.includes(".expect(404)");
    expect(hasJouer).toBeTrue();
    expect(has404toBe || has404Expect).toBeTrue();
  });
});
