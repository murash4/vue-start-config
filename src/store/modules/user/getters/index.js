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
  }
}
