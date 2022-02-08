<template>
  <h1>전체 이름 : {{ fullName }}</h1>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      firstName: 'Kyuyeon',
      lastName: 'Lee'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
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