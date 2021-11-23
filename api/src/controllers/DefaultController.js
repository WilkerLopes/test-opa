class DefaultController {
  index(req, res) {
    var result = { mensage: "Servidor funcionando!" };
    res.status(200).json(result);
  }

  notFound(req, res) {
    var result = { mensage: "Rota não encontrada!" };
    res.status(404).json(result);
  }
}

module.exports = new DefaultController();
