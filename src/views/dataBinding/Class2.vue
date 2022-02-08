<template>
  <div class="container" v-bind:class="[activeClass,errorClass]">Class Binding</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      activeClass: 'active',
      errorClass: 'text-red'
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
    height: 200px;
  }
  .active {
    background-color: #2c3e50;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>