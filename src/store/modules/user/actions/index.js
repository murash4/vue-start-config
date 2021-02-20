export default {
  /**
   * Метод устанавливает новый уровень пользователю
   * @param {object} context
   * @param {object} payload
   */
  setNewLevel ({ commit }, payload) {
    commit('setNewLevel', payload)
  }
}
