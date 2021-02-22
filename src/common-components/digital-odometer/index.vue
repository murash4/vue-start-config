<template>
  <div>
    <vue-odometer :value="value" :duration="duration" :format="format"></vue-odometer>&nbsp;<span class="currency">{{currencySymbol}}</span>
  </div>
</template>
<script>
/**
 * требует установки зависимостей:
 * yarn add odometer vue-odometer
 * для использования импортируем как обычный компонен и указывае свойства
 * value - текущее значение (меняется из родителя)
 * duration - длительность анимации изменения с одного числа на другое
 * format - формат для вывода чисел
 * currencySymbol - символ валюты (если надо)
 */
import VueOdometer from 'vue-odometer'

export default {
  name: 'digital-odometer',
  props: {
    value: {
      default: 0,
      type: Number
    },
    duration: {
      default: 500,
      type: Number
    },
    format: {
      default: '( ddd)',
      type: String
    },
    currencySymbol: {
      default: '',
      type: String
    }
  },
  components: {
    VueOdometer
  }
}
</script>

<style src="./style.scss" lang="scss"/>
<style src="../../../node_modules/odometer/themes/odometer-theme-default.css"/>
