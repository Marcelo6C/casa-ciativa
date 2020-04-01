const express = require("express");
const db = require("../database/db");

const routes = express.Router();

routes.get("/home", (request, response) => {
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err);

    const reversedIdeas = [...rows].reverse();

    let lastIdeas = [];
    for (idea of reversedIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea);
      }
    }

    return response.render("index.html", { ideas: lastIdeas });
  });
});

routes.get("/home", (request, response) => {
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err);

    const reversedIdeas = [...rows].reverse();

    let lastIdeas = [];
    for (idea of reversedIdeas) {
      if (lastIdeas.length <= 2) {
        lastIdeas.push(idea);
      }
    }

    return response.render("index.html", { ideas: lastIdeas });
  });
});

routes.get("/ideias", (request, response) => {
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err);

    const reversedIdeas = [...rows].reverse();
    return response.render("ideias.html", { ideas: reversedIdeas });
  });
});

routes.post("/home", (request, response) => {
  // Inserir na tabela
  const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      link
    ) VALUES(?,?,?,?,?);
  `;

  const values = [
    request.body.image,
    request.body.title,
    request.body.category,
    request.body.description,
    request.body.link
  ];

  db.run(query, values, function(err) {
    if (err) {
      console.log(err);
      return response.send("Erro no bando de dados!");
    }

    return response.redirect("/ideias");
  });
});

routes.delete("/ideias/:id", function(req, res) {
  const { id } = req.params;

  // DELETAR UM DADO DA TABELA
  db.splice(id, 1);
});

module.exports = routes;
