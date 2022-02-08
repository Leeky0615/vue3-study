<template>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
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