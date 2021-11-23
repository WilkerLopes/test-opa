const express = require("express");
const cors = require("cors");
const app = express();

// Configura as variaveis de ambiente
require("dotenv");

// Cors
app.use(cors({ origin: "*", methods: "GET,POST" }));

// Configura rotas
app.use(express.json());
require("./src/Routes/index")(app);

// Inicia o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("  O servidor esta rodando em:\x1b[36m http://127.0.0.1:\x1b[96m" + port + "/\x1b[0m");
});
