<template>
  <div class="levels">
    <div class="levels__items">
      <level-item
        v-for="(level, index) in levels"
        :key="index"
        :level="level"
      />
    </div>
    <levels-progress />
  </div>
</template>

<script>
import LevelItem from '@/components/level-item'
import LevelsProgress from '@/components/levels-progress'
import { mapGetters } from 'vuex'

export default {
  name: 'levels',
  components: {
    LevelItem,
    LevelsProgress
  },
  computed: {
    ...mapGetters('levels', { levels: 'getLevels' })
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
