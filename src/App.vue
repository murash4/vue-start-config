<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      intervalValue: 1000
    }
  },
  created () {
    // Инициализация таймеров на страницах
    this.$bus.on('init-timer-blocks', this.initTimerBlocks)
  },
  methods: {
    /**
     * Запуск события для обновления таймеров
     */
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

<style lang="css">
  @import "assets/fonts/Roboto/Black/stylesheet.css";
  @import "assets/fonts/Roboto/Medium/stylesheet.css";
  @import "assets/fonts/Roboto/Regular/stylesheet.css";
  @import "assets/fonts/Montserrat/Black/stylesheet.css";
</style>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
