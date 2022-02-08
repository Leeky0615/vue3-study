<template>
  <div class="container" v-bind:class="{'active':isActive, 'text-red':hasError}">Class Binding</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      isActive: true,
      hasError: false
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
  .container {
    width: 100%;
    height: 600px;
  }
  .active {
    background-color: #42b983;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>