<template>
  <div
    :class="[
      'level-item',
      {
        'level-item--previous': level.id < currentLevel,
        'level-item--current': isCurrentLevel
      }
    ]"
    @mouseover="setNewLevel(level)"
  >
    <div v-if="isCurrentLevel" class="level-item__current-title">Текущий уровень</div>
    <div class="level-item__box">
      <div class="level-item__title">{{ level.name }}</div>
      <div class="level-item__info">
        <div class="level-item__info-item">1 = {{ level.exchange }}</div>
        <div class="level-item__info-item">Бонус {{ level.bonus | with_separator }}</div>
        <div class="level-item__info-item">Кэшбек {{ level.cashback }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'level-item',
  props: {
    level: Object
  },
  computed: {
    ...mapGetters('user', {
      currentLevel: 'getCurrentLevel'
    }),
    // Является ли данный уровень текущим уровнм пользователя
    isCurrentLevel () {
      return this.level.id === this.currentLevel
    }
  },
  methods: {
    ...mapActions('user', ['setNewLevel'])
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
