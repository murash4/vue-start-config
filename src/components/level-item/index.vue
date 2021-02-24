<template>
  <div
    :class="[
      'level-item',
      {
        'level-item--previous': level.id < currentLevel,
        'level-item--current': isCurrentLevel
      }
    ]"
  >
    <div v-if="isCurrentLevel" class="level-item__current-title">Текущий уровень</div>
    <div class="level-item__stars">
      <icon
        v-for="(num, key) in level.id"
        :key="key"
        icon-name="star"
        class="level-item__star"
      />
    </div>
    <div
      class="level-item__inner"
      @mouseover="setNewLevel(level)"
    >
      <div class="level-item__box">
        <div class="level-item__title">{{ level.name }}</div>
        <div class="level-item__info">
          <div class="level-item__info-item">
            1
            <icon
              icon-name="money"
              class="level-item__info-item-money"
            />
            = {{ level.exchange }}
            <icon
              icon-name="diamond"
              class="level-item__info-item-diamond"
            />
          </div>
          <div class="level-item__info-item">
            Бонус {{ level.bonus | with_separator }}
            <icon
              icon-name="diamond"
              class="level-item__info-item-diamond"
            />
          </div>
          <div class="level-item__info-item">Кэшбек {{ level.cashback }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/common-components/icon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'level-item',
  props: {
    level: Object
  },
  components: {
    Icon
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
