import Vue from 'vue'

// loader export helper
Vue.mixin({
  methods: {
    morethan (value1, value2) {
      return value1 > value2
    }
  }
})
