<template>
  <div class="levels-progress">
    <div
      v-for="(level, index) in slicedLevels"
      :key="index"
      :class="[
          'levels-progress__item',
          {'levels-progress__item--colored': isPassedLevel}
        ]"
      :style="`width: ${progressItemWidth}`"
    >
      <icon
        :icon-name="iconName(level)"
        :class="`levels-progress__item-icon levels-progress__item-icon--${iconName(level)}`"
      />
      <div class="levels-progress__item-text">
        {{ level.startPoints | with_separator }}
        <icon
          icon-name="money"
          class="levels-progress__item-money"
        />
      </div>
    </div>
    <div
      class="levels-progress__line"
      :style="`width: ${userProgress};`"
    ></div>
  </div>
</template>

<script>
import Icon from '@/common-components/icon'
import { mapGetters } from 'vuex'

export default {
  name: 'levels-progress',
  components: {
    Icon
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
  },
  methods: {
    /**
     * Флаг, что уровень уже был получен
     * @param {object} level - объект с данными о конкретном уровне
     * @return {boolean}
     */
    isPassedLevel (level) {
      return level.id <= this.currentLevel
    },
    /**
     * Возвращает название иконки, в зависимости от того, получен ли уровень
     * @param {object} level - объект с данными о конкретном уровне
     * @return {string} - название иконки
     */
    iconName (level) {
      return this.isPassedLevel(level) ? 'checkbox' : 'lock'
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
