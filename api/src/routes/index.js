const ListController = require("../controllers/ListController");
const DefaultController = require("../controllers/DefaultController");

module.exports = (app) => {
  app.get("/", DefaultController.index);

  app.post("/ordenaLista", ListController.sortable);
  app.post("/interlace", ListController.interlace);

  app.get("*", DefaultController.notFound);
};
