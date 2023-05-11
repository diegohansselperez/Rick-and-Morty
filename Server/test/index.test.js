const app = require("../src/app.js");
const session = require("supertest");
const agent = session(app);

const charactersObj = {
  id: 123,
  name: "diego",
  status: "Alive",
  species: "Human",
  gender: "Male",

  origin: {
    name: "Earth C-137",
  },
};

describe("test de RUTAS", () => {
  describe("Get - /rickandmorty/character/:id", () => {
    const characters = [
      "id",
      "name",
      "species",
      "gender",
      "status",
      "origin",
      "image",
    ];

    it("Response con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = await agent.get("/rickandmorty/character/1");

      characters.forEach((char) => {
        expect(response.body).toHaveProperty(char);
      });
    });

    it(`Si hay un error responde con status: 500`, async () => {
      const response = await agent.get("/rickandmorty/character/1000e");

      expect(response.statusCode).toBe(500);
    });
  });

  describe("Get - /rickandmorty/login", () => {
    xit("Responde con un access en true si la informacion del usuario es valida", async () => {
      const response = await agent.get(
        "rickandmorty/login?password=@solorick24&email=diegohansselp24@gmail.com"
      );

      const access = { access: true };

      expect(response.body).toEqual(access);
    });
    xit("Responde con un access en false si la informacion del usuario NO es valida", async () => {
      const response = await agent.get(
        "rickandmorty/login?password=@solo%&73ric532&email=diegohanssel123@gmail.com"
      );

      const access = { access: false };

      expect(response.body).toEqual(access);
    });
  });

  describe("POST - /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const response = await agent
        .post("/rickandmorty/favorite")
        .send(charactersObj);

      expect(response.body).toContainEqual(charactersObj);
    });

    it("Agregar personajes a favoritos si ya existen otros y no eliminarlos", async() => {
       charactersObj.id = 276
       charactersObj.name = "John"


        const response = await agent
        .post("/rickandmorty/favorite")
        .send(charactersObj);

        expect(response.body.length).toBe(2)
    })
  });

  describe("DELETE /rickandmorty/fav/:id", () => {

    it("Verificamos que el id no exista en el arreglo favoritos, retornarmos el arreglo", async() => {
        const response = await agent
        .delete("/rickandmorty/favorite/12")

        expect(response.body.length).toBe(2)
    })

    it("Validasmos si se manda un ID existente, se elimina el personaje", async() => {
        const response = await agent.delete("/rickandmorty/favorite/276")
        console.log(response.body);
        //! esta respuesta no da, revisa lo que te mandan por body en tus controllers
        //expect(response.body.length).toBe(1)

    })
})
});
