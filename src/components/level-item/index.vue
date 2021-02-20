<template>
  <div class="level-item" @mouseover="setNewLevel(level)">
    <div class="level-item__title">{{ level.title }}</div>
    <div class="level-item__info">{{ level.bonus }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'level-item',
  props: {
    level: Object
  },
  methods: {
    ...mapActions('user', ['setNewLevel'])
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
