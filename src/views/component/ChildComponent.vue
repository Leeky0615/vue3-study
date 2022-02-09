<template>
  <button type="button" @click="childFunc" ref="btn1">[Sub]Event click</button>
  <button type="button" @click="callFromParent" ref="btn2">[Sub]Call Method click</button>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지'
    };
  },
  methods: {
    callFromParent() {
      alert('부모 컴포넌트에서 직접 호출한 함수')
    },
    childFunc() {
      alert('Super Component에서 직접 발생시킨 Event');
    },
  },
  mounted() {
    this.$emit('send-message', this.msg);
  }
}

</script>

<style scoped>

</style>