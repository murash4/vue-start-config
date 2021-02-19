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
        v-for="(level, index) in (levels - 1)"
        :key="index"
        class="levels__progress-item"
      >{{ level }}</div>
    </div>
  </div>
</template>

<script>
import LevelItem from '@/components/level-item'

export default {
  name: 'levels',
  components: {
    LevelItem
  },
  data () {
    return {
      levels: 6
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
