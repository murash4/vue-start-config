<template>
  <div class="timer-block">
    <div class="timer-block__item day" v-show="days > 0">
      <div v-if="!separateDate" class="timer-block__count number">{{days}}</div>
      <div
          v-else
          class="timer-block__count number"
      >
        <div
            v-for="(item, key) in daysArr"
            :key="key"
            class="timer-block__count-item"
        >{{item}}</div>
      </div>
      <div class="timer-block__label format">дней</div>
    </div>
    <div v-if="hours !== '0'" class="timer-block__item hour">
      <div v-if="!separateDate" class="timer-block__count number">{{hours}}</div>
      <div
          v-else
          class="timer-block__count number"
      >
        <div
            v-for="(item, key) in hoursArr"
            :key="key"
            class="timer-block__count-item"
        >{{item}}</div>
      </div>
      <div class="timer-block__label format">час</div>
    </div>
    <div class="timer-block__item min">
      <div v-if="!separateDate" class="timer-block__count number">{{minutes}}</div>
      <div
          v-else
          class="timer-block__count number"
      >
        <div
            v-for="(item, key) in minutesArr"
            :key="key"
            class="timer-block__count-item"
        >{{item}}</div>
      </div>
      <div class="timer-block__label format">мин</div>
    </div>
    <div class="timer-block__item sec">
      <div v-if="!separateDate" class="timer-block__count number">{{seconds}}</div>
      <div
          v-else
          class="timer-block__count number"
      >
        <div
            v-for="(item, key) in secondsArr"
            :key="key"
            class="timer-block__count-item"
        >{{item}}</div>
      </div>
      <div class="timer-block__label format">сек</div>
    </div>
  </div>
</template>

<script>
export const STATUS_EXPIRED = 'expired'
export const STATUS_RUNNING = 'running'
export const STATUS_UPCOMING = 'upcoming'

export default {
  name: 'timer-block',
  props: {
    starttime: [String, Number],
    endtime: [String, Number],
    daysFull: Boolean,
    separateDate: Boolean
  },
  data () {
    return {
      timer: '',
      start: '',
      end: '',
      days: '0',
      daysArr: [],
      minutes: '00',
      minutesArr: [],
      hours: '00',
      hoursArr: [],
      seconds: '00',
      secondsArr: [],
      message: '',
      statusType: '',
      statusText: '',
      remainingTime: ''
    }
  },
  created () {
    this.start = new Date(this.starttime).getTime()
    this.end = new Date(this.endtime).getTime()
    // Update the count down every 1 second
    this.timerCount(this.start, this.end)

    this.$bus.emit('init-timer-blocks')
    this.$bus.on('update-timer-blocks', this.timerCount)
  },
  beforeDestroy () {
    this.$bus.off('update-timer-blocks', this.timerCount)
  },
  watch: {
    endtime (newValue) {
      this.end = new Date(newValue).getTime()
      this.timerCount(this.start, this.end)
    }
  },
  methods: {
    timerCount: function () {
      const now = new Date().getTime()
      const distance = this.start - now
      const passTime = this.end - now
      const oldStatus = this.statusType

      if (distance < 0 && passTime > 0) {
        this.calcTime(passTime)
        this.message = 'запущен'
        this.statusType = STATUS_RUNNING
        this.statusText = 'до конца осталось'
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance)
        this.message = 'скоро начало'
        this.statusType = STATUS_UPCOMING
        this.statusText = 'до начала осталось'
      } else {
        this.calcTime(0)
        this.message = 'завершен'
        this.statusType = STATUS_EXPIRED
        this.statusText = 'закончен'
        this.$bus.off('timer-block-update')
      }

      if (oldStatus !== this.statusType) this.$emit('status-update', this.statusType)
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.remainingTime = dist

      this.days = Math.floor(dist / (1000 * 60 * 60 * 24)).toString()

      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString()
      if (hours.length === 1) hours = '0' + hours
      this.hours = hours

      let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)).toString()
      if (minutes.length === 1) minutes = '0' + minutes
      this.minutes = minutes

      let seconds = Math.floor((dist % (1000 * 60)) / 1000).toString()
      if (seconds.length === 1) seconds = '0' + seconds
      this.seconds = seconds

      if (this.separateDate) {
        this.daysArr = this.days.slice()
        this.hoursArr = this.hours.slice()
        this.minutesArr = this.minutes.slice()
        this.secondsArr = this.seconds.slice()
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss"/>
