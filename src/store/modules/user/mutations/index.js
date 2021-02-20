export default {
  /**
   * Метод устанавливает новый уровень пользователю
   * @param {object} state
   * @param {object} level
   */
  setNewLevel (state, level) {
    state.data.currentLevel = level.id
    state.data.currentPoints = level.startPoints
  }
}
