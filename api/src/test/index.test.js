console.log("  ===================== Testes =====================");
describe("Listas", function () {
  require("./list.test");

  after(function () {
    console.log("\n  ======== Todos os teste foram execultados ========");
  });
});
