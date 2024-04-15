


const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const compression = require("compression"); // Importe o middleware de compressão


// Inicia o servidor
const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log("Servidor está rodando bem");
});


const indexRoute = require("./src/routes/indexRoute");




// Use o middleware de compressão GZIP
app.use(compression());

// Configura o methodOverride no express
// methodOverride = Pacote que transforma um método http em outro
// Ex: POST => PUT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//
// Configura pasta estática para acesso externo
app.use(express.static(path.join(__dirname, "public")));

// Configura o template engine, troca do padrão (jade) para ejs
app.set("view engine", "ejs");
// Configura o caminho para os views, troca o padrão que é no raiz para o src
app.set("views", path.join(__dirname, "src", "views"));


app.use("/", indexRoute);



// Rota de erro 404 - página não encontrada
app.use((req, res) => {
  res.status(404).render('erro-404.ejs', { title: 'Página não encontrada' });
});