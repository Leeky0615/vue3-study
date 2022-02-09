<template>
  <div><h2>{{ itemLength }}</h2></div>
</template>
<script>
export default {
  inject: ['itemLength'],
  mounted() {
    console.log(this.itemLength);
  }
}
</script>