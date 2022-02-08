<template>
  <div>
    <input type="text" v-model="textValue" />
<!--    v-bind:disabled 가 사용되는데 v-bind 생략 가능-->
    <button type="button" :disabled="textValue==''">Click</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      textValue: ""
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
  methods: {}
}
</script>

<style>

</style>