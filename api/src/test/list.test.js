const ListService = require("../../src/services/ListService");
const assert = require("assert").strict;

it("Ordenar em ordem crecente", function () {
  var input = {
    salaN: [3, 1, 2],
    salaS: ["t", "e", "s", "t", "e", "w"],
  };

  var result = ListService.sortable(input, "asc");

  assert.strictEqual(JSON.stringify([1, 2, 3]) === JSON.stringify(result.salaN), true);
});

it("Ordenar em ordem decrecente", function () {
  var input = {
    salaN: [3, 1, 2],
    salaS: ["t", "e", "s", "t", "e", "w"],
  };

  var result = ListService.sortable(input, "desc");

  assert.strictEqual(JSON.stringify([3, 2, 1]) === JSON.stringify(result.salaN), true);
});

it("Intervalos se interligam", function () {
  var intervaloA = [10, 20],
    intervaloB = [15, 25],
    result = ListService.interlace(intervaloA, intervaloB);

  assert.strictEqual(result, true);
});
it("Intervalos nao se interligam", function () {
  var intervaloA = [10, 20],
    intervaloB = [90, 100],
    result = ListService.interlace(intervaloA, intervaloB);

  assert.strictEqual(result, false);
});
