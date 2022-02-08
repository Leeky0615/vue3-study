<template>
  <div>
    <button type="button" @click="increaseCount">Add 1</button>
    <button type="button" @click="setCount(7)">Set 7</button>
    <button type="button" @click="setCount(7), increaseCount()">Set 7 & Add 1</button>
    <p>The counter is {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      counter: 0
    };
  },
  setup() {
  },
  create() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    increaseCount(){
      this.counter += 1;
    },
    setCount(counter){
      this.counter = counter;
    }
  }
}
</script>

<style>

</style>