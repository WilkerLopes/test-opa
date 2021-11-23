const ListService = require("../services/ListService");

class ListController {
  sortable(req, res) {
    var { listas, tipo } = req.body,
      result = { listas: ListService.sortable(listas, tipo) };
    res.status(200).json(result);
  }

  interlace(req, res) {
    var { intervaloA, intervaloB } = req.body,
      result = { isInterlace: ListService.interlace(intervaloA, intervaloB) };
    res.status(200).json(result);
  }
}

module.exports = new ListController();
