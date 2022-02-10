<template>
  <p>Count : {{ count }}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.count;
    },
    cartCount(){
      return this.$store.getters.cartCount;
    }
  },
  actions: {
    increment(context) {
      // 비동기 처리 로직 수행 가능
      context.commit('increment');
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment');
    }
  }


}
</script>

<style>

</style>