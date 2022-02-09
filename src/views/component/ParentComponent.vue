<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
  <button type="button" @click="changeChildData">[Super]Change chile data Button</button>
</template>

<script>
import ChildComponent from "@/views/component/ChildComponent";

export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn1.click();
    this.$refs.child_component.callFromParent();
  },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
    },
    sendMessage(data){
      alert(data);
    }
  }
}

</script>

<style scoped>

</style>