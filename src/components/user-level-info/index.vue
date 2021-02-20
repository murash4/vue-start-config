<template>
  <div class="user-level-info">
    <div class="user-level-info__title">Накоплено поинтов</div>
    <div class="user-level-info__points">{{ currentPoints }}</div>
    <div class="user-level-info__levels">
      <div class="user-level-info__level-start">{{ currentLevel }}</div>
      <div v-if="hasNextLevel" class="user-level-info__level-arrow">=></div>
      <div v-if="hasNextLevel" class="user-level-info__level-end">{{ nextLevel }}</div>
    </div>
    <div v-if="hasNextLevel" class="user-level-info__remainder-text">До следующего уровня осталось</div>
    <div v-if="hasNextLevel" class="user-level-info__remainder-points">{{ leftPoints }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-level-info',
  computed: {
    ...mapGetters('user', {
      currentLevel: 'getCurrentLevel',
      maxLevel: 'getMaxLevel',
      currentPoints: 'getCurrentPoints',
      hasNextLevel: 'hasNextLevel'
    }),
    ...mapGetters('levels', {
      levels: 'getLevels',
      maxLevel: 'getMaxLevel'
    }),
    /**
     * Возвращает следующий уровень пользователя
     * @return {number}
     */
    nextLevel () {
      return this.currentLevel + 1
    },
    /**
     * Количество оставшихся поинтов до следующего уровня
     * @return {number}
     */
    leftPoints () {
      if (this.hasNextLevel) {
        // Количество поинтов в начале следующего уровня
        const nextLevelPoints = this.levels.find(level => level.id === this.nextLevel).startPoints

        return nextLevelPoints - this.currentPoints
      }

      return 0
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
