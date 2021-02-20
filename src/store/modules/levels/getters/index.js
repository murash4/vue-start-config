export default {
  /**
   * Метод возвращает массив всех уровней пользователя, сохраненный в state
   * @param {object} state
   * @return {array}
   */
  getLevels (state) {
    return state.data
  },
  /**
   * Метод возвращает номер максимального уровня
   * @param {object} state
   * @return {number}
   */
  getMaxLevel (state) {
    return state.data[state.data.length - 1].id
  }
}
