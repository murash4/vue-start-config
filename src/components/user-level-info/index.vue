<template>
  <div class="user-level-info">
    <div class="user-level-info__title">Накоплено поинтов</div>
    <div class="user-level-info__points-wr">
      <digital-odometer :value="currentPoints" class="user-level-info__points" />
      <icon
        icon-name="money"
        class="user-level-info__points-icon"
      />
    </div>
    <div class="user-level-info__levels">
      <div class="user-level-info__level user-level-info__level--start">
        <div class="user-level-info__level-num user-level-info__level-num--start">{{ currentLevel }}</div>
      </div>
      <icon
        v-if="hasNextLevel"
        icon-name="arrow"
        class="user-level-info__level-arrow"
      />
      <div v-if="hasNextLevel" class="user-level-info__level user-level-info__level--end">
        <div class="user-level-info__level-num user-level-info__level-num--end">{{ nextLevel }}</div>
      </div>
    </div>
    <div class="user-level-info__remainder-text">До следующего уровня осталось</div>
    <div class="user-level-info__remainder-points-wr">
      <digital-odometer :value="leftPoints" class="user-level-info__remainder-points" />
      <icon
        icon-name="money"
        class="user-level-info__remainder-points-icon"
      />
    </div>
    <div class="user-level-info__separator"></div>
    <timer-block
      :starttime="0"
      :endtime="formattedEndAt"
      days-full
    />
  </div>
</template>

<script>
import TimerBlock from '@/common-components/timer-block'
import DigitalOdometer from '@/common-components/digital-odometer'
import Icon from '@/common-components/icon'
import { mapGetters } from 'vuex'

export default {
  name: 'user-level-info',
  components: {
    TimerBlock,
    DigitalOdometer,
    Icon
  },
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
    },
    // /**
    //  * Возвращает время завершения таймера
    //  * @return {number}
    //  */
    formattedEndAt () {
      const currentDate = new Date()

      return (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)).getTime()
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
