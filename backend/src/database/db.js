const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./backend/src/database/criative.db");

db.serialize(function() {
  //Criar tabela
  db.run(`
       CREATE TABLE IF NOT EXISTS ideas(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         image TEXT,
         title TEXT,
         category TEXT,
         description TEXT,
         link TEXT
       );
    `);

  //Inserir na tabela
  // const query = `
  //   INSERT INTO ideas(
  //     image,
  //     title,
  //     category,
  //     description,
  //     link
  //   ) VALUES(?,?,?,?,?);
  // `;

  // const values = [
  //   `https://image.flaticon.com/icons/svg/2729/2729001.svg`,
  //   `Leia um livro`,
  //   `Leitura`,
  //   `Em meio ao périodo de quarentena, a leitura é um ótimo meio de passar o tempo`,
  //   `https://casavogue.globo.com/LazerCultura/Livros/noticia/2020/03/10-livros-para-ler-durante-quarentena.html`
  // ];

  // db.run(query, values, function(err) {
  //   if (err) return console.log(err);

  //   console.log(this);
  // });

  // Delear um dado da tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
  //   if (err) return console.log(err);

  //   console.log("deletado", this);
  // });

  //Consultar dados na tabela
  // db.all(`SELECT * FROM ideas`, function(err, rows) {
  //   if (err) return console.log(err);
  // });
});

module.exports = db;
