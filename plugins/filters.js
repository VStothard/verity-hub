import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', function (value) {
    if (!value) return ''
    value = dayjs(value).format('DD.MM.YYYY') // display
    return value
  })