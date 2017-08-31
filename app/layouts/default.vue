<template>
  <div>
    <nuxt/>
    <MyFooter/>
  </div>
</template>

<script>
  import MyFooter from '~/components/footer.vue'

  export default {
    components: {
      MyFooter
    }
  }
</script>
