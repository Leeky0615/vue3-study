<template>
  <div>
    <label>
      <input type="checkbox" v-model="checked">
      {{ checked }}
    </label>
    <label>
      <input type="checkbox" v-model="checked2" true-value="yes" false-value="no">
      {{ checked2 }}
    </label>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      checked: true,
      checked2: true
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