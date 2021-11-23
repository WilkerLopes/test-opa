/**
 * Serviço com funções relacionadas ao controlador de listas
 */
class ListService {
  /**
   * Odena listas, e retorna na mesma estrutura
   *
   * @param {Array} list
   * @param {String} type
   * @return {Object}
   */
  sortable(lists, type = "asc") {
    for (let name in lists) {
      lists[name] = this.customSort(lists[name], type);
    }

    return lists;
  }

  /**
   * Gera as iniciais a partir de um nome
   * e sobrenome.
   *
   * @param {Array} intervalA
   * @param {Array} intervalB
   * @return {Boolean}
   */
  interlace(intervalA, intervalB) {
    intervalA = this.customSort(intervalA);
    intervalB = this.customSort(intervalB);
    if ((intervalB[1] >= intervalA[0] && intervalB[1] <= intervalA[1]) || (intervalB[0] >= intervalA[0] && intervalB[0] <= intervalA[1])) return true;
    return false;
  }

  customSort(value, type = "asc") {
    return value.sort(function (a, b) {
      if (type == "asc") {
        if (a > b) return 1;
        if (a < b) return -1;
      }
      if (type == "desc") {
        if (a < b) return 1;
        if (a > b) return -1;
      }
      return 0;
    });
  }
}

module.exports = new ListService();
