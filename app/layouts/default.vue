<template>
  <div>
    <no-ssr>
      <notifications group="foo"/>
    </no-ssr>
    <nuxt/>
    <MyFooter/>
  </div>
</template>

<script>
  import MyFooter from '~/components/footer.vue'
  import noSSR from '~/components/noSSR.vue'

  export default {
    components: {
      MyFooter,
      noSSR
    }
  }
</script>
