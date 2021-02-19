<template>
  <div class="user-level-info">
    <div class="user-level-info__title">Накоплено поинтов</div>
    <div class="user-level-info__points">{{ currentPoints }}</div>
    <div class="user-level-info__levels">
      <div class="user-level-info__level-start">{{ currentLevel }}</div>
      <div class="user-level-info__level-arrow">=></div>
      <div class="user-level-info__level-end">4</div>
    </div>
    <div class="user-level-info__remainder-text">До следующего уровня осталось</div>
    <div class="user-level-info__remainder-points">3028</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-level-info',
  computed: {
    ...mapGetters('user', {
      currentLevel: 'getCurrentLevel',
      currentPoints: 'getCurrentPoints'
    })
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
