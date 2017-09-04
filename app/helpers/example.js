import Vue from 'vue'

Vue.mixin({
  methods: {
    eq (value1, value2) {
      return value1 === value2
    }
  }
})
