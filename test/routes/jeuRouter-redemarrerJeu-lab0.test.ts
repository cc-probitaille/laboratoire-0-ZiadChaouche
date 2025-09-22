import request from "supertest";
import app from "../../src/app";

describe("GET /api/v1/jeu/redemarrerJeu", () => {
  // Précondition: créer 2 joueurs
  beforeAll(async () => {
    await request(app).post("/api/v1/jeu/demarrerJeu").send({ nom: "tony" });
    await request(app).post("/api/v1/jeu/demarrerJeu").send({ nom: "ziad" });
  });

  it("renvoie 200 et du JSON (succès)", async () => {
    const res = await request(app).get("/api/v1/jeu/redemarrerJeu"); // get('/api/v1/jeu/redemarrerJeu')
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/i);
  });

  it("postcondition: plus aucun joueur", async () => {
    const res = await request(app).get("/api/v1/jeu/joueurs");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  it("jouer retourne 404 après redemarrerJeu()", async () => {
    await request(app).get("/api/v1/jeu/redemarrerJeu");
    const res = await request(app).get("/api/v1/jeu/jouer/Quelquun"); // /api/v1/jeu/jouer/
    expect(res.status).toBe(404); // .status).toBe(404)
  });
});
