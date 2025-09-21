

import request from "supertest";
import app from "../../src/app"; 

describe("GET /api/v1/jeu/redemarrerJeu", () => {
  // Précondition: créer 2 joueurs
  beforeAll(async () => {
    await request(app).get("/api/v1/jeu/jouer/tony");
    await request(app).get("/api/v1/jeu/jouer/ziad");
  });

  it("renvoie 200 et du JSON (succès)", async () => {
    const res = await request(app).get("/api/v1/jeu/redemarrerJeu");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/i);
  });

  it("postcondition: plus aucun joueur", async () => {
    const res = await request(app).get("/api/v1/jeu/joueurs"); 
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});
