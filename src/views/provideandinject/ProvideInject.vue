<template>
  <ProvideInjectChild/>
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild'

export default {
  name: '',
  components: {ProvideInjectChild},
  data() {
    return {
      items: ['A', 'B']
    };
  },
  provide() {
    return {
      itemLength: this.items.length
    };
  },
  methods: {}
}
</script>

<style>

</style>