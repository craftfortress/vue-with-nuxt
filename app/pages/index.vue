<template>
  <section class="container">
    <div>
      <img src="/logo.png"/>
      <div class="links">
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      </div>
    </div>
  </section>
</template>
