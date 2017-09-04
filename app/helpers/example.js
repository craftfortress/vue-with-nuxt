import Vue from 'vue'

// loader export helper
Vue.mixin({
  methods: {
    eq (value1, value2) {
      return value1 === value2
    }
  }
})
