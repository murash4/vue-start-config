<template>
  <div class="levels">
    <div class="levels__items">
      <level-item
        v-for="(level, index) in levels"
        :key="index"
        :level="level"
      />
    </div>
    <div class="levels__progress">
      <div
        v-for="(level, index) in slicedLevels"
        :key="index"
        :class="[
          'levels__progress-item',
          {'levels__progress-item--colored': level.id <= currentLevel}
        ]"
        :style="`width: ${progressItemWidth}`"
      >
        <div class="levels__progress-item-text">{{ level.startPoints | with_separator }}</div>
      </div>
      <div
        class="levels__progress-line"
        :style="`width: ${userProgress};`"
      ></div>
    </div>
  </div>
</template>

<script>
import LevelItem from '@/components/level-item'
import { mapGetters } from 'vuex'

export default {
  name: 'levels',
  components: {
    LevelItem
  },
  computed: {
    ...mapGetters('levels', { levels: 'getLevels' }),
    ...mapGetters('user', {
      currentLevel: 'getCurrentLevel',
      currentPoints: 'getCurrentPoints',
      hasNextLevel: 'hasNextLevel'
    }),
    /**
     * Возвращает массив уровней за исключением первого уровня
     * @return {array}
     */
    slicedLevels () {
      return this.levels.slice(1)
    },
    /**
     * Возвращает ширину (%) элментов линии прогресса пользователя
     * @return {string}
     */
    progressItemWidth () {
      return 1 / this.slicedLevels.length * 100 + '%'
    },
    /**
     * Возвращает следующий уровень пользователя
     * @return {number}
     */
    nextLevel () {
      return this.currentLevel + 1
    },
    /**
     * Возвращает текущий прогресс пользователя до достижения последнего уровня
     * @return {string}
     */
    userProgress () {
      // Прогресс текущего уровня для достижения следующего уровня (в долях)
      let currentProgress = 0
      // Всего интервалов для отображения прогресса
      const allIntervals = this.slicedLevels.length
      // Количество полностью заполненных интервалов (полученных уровней)
      const filledIntervals = this.currentLevel - 1
      // Величина одного интервала в долях от общего прогресса (интервалы равной длины)
      const intervalLength = 1 / allIntervals

      if (this.hasNextLevel) {
        // Количество поинтов в начале текущего уровня
        const currentLevelPoints = this.levels.find(level => level.id === this.currentLevel).startPoints
        // Количество поинтов в начале следующего уровня
        const nextLevelPoints = this.levels.find(level => level.id === this.nextLevel).startPoints
        // Прогресс текущего уровня для достижения следующего уровня (в долях)
        currentProgress = (this.currentPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)
      }

      // Прогрес пользователя в %
      return (intervalLength * filledIntervals + intervalLength * currentProgress) * 100 + '%'
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
