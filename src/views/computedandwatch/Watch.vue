<template>
  <h1>전체 이름 : {{ fullName }}</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      firstName: 'Kyuyeon',
      lastName: 'Lee',
      fullName: ''
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
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
  methods: {
    changeName() {
      this.firstName = 'Gyuyeon';
    }
  }
}
</script>

<style>

</style>