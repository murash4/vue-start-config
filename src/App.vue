<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // Инициализация таймеров на страницах
    this.$bus.on('init-timer-blocks', this.initTimerBlocks)
  },
  methods: {
    initTimerBlocks () {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        if (this.$bus._events['update-timer-blocks'] && this.$bus._events['update-timer-blocks'].length) {
          this.$bus.emit('update-timer-blocks')
        } else {
          clearInterval(this.interval)
        }
      }, this.intervalValue)
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
