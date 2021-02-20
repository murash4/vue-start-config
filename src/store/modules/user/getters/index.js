export default {
  /**
   * Метод, отдающий текущий уровень пользователя, сохраненный в state
   * @param {object} state
   * @return {number}
   */
  getCurrentLevel (state) {
    return state.data.currentLevel
  },
  /**
   * Метод, отдающий количество поинтов пользователя, сохраненные в state
   * @param {object} state
   * @return {number}
   */
  getCurrentPoints (state) {
    return state.data.currentPoints
  },
  /**
   * Метод, отдающий boolean значение, есть ли следующий уровень
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {boolean}
   */
  hasNextLevel (state, getters, rootState, rootGetters) {
    return state.getCurrentLevel < rootGetters['levels/getLevels']
  }
}
