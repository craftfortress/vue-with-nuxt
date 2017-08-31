<template>
  <section class="container">
    <div>
      <img src="~assets/img/logo.png" class="logo"/>
      <img src="/logo.png" class="logo"/>
      <h1 class="title">
        vue-with-nuxt
      </h1>
      <h2 class="subtitle">
        Vue.js with Nuxt.js Framework
      </h2>
      <div class="links">
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      </div>
    </div>
  </section>
</template>
