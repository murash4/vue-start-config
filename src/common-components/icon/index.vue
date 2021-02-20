<template>
  <svg
    :viewBox="viewBox"
    :fill="fill"
    :width="width"
    :height="height"
  >
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    // Имя файла без расширения
    iconName: {
      type: String,
      required: true
    },
    // Ширина в пикселах
    width: {
      type: [Number, String],
      default: 18
    },
    // Высота в пикселах
    height: {
      type: [Number, String],
      default: '100%'
    },
    // Цвет заливки, по умолчанию - цвет окружающего текста
    fill: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    // Расположение SVG-файлов
    file () {
      let icon = require(`@/assets/icons/${this.iconName}.svg`)

      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon
    },
    viewBox () {
      return this.file && this.file.viewBox ? this.file.viewBox : '0 0 ' + parseInt(this.width) + 2 + ' ' + parseInt(this.height) + 2
    },
    href () {
      return this.file || ''
    }
  }
}
</script>
