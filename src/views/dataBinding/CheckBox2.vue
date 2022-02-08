<template>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked"></label>
    <label><input type="checkbox" value="부산" v-model="checked"></label>
    <label><input type="checkbox" value="제주" v-model="checked"></label>
    <br>
    <span>체크한 지역: {{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      checked: []
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