<template>
  <div class="level-item">
    <div class="level-item__title"></div>
    <div class="level-item__info">{{level}}</div>
  </div>
</template>

<script>
export default {
  name: 'level-item',
  props: {
    level: Number
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
