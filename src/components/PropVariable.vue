<template>
  <div>

  </div>
</template>

<script>
export default {
  props:{
    // 기본 타입 체크 ('null'과 'undefined'는 모든 유효성 검사 pass)
    propA: Number, // Number 타입
    propB: [String, Number], // 여러 타입
    propC: { // String, 데이터 전달 필수
      type: String,
      required: true
    },
    propD: { // Number타입, default value = 100
      type: Number,
      default: 100
    },
    propE: { // 기본 값을 갖는 타입
      type: Object,
      default: function (){ // 객체나 배열의 기본 갓은 항상 팩토리 함수로부터 반환되어야 함
        return {message: 'hello'}
      }
    },
    propF: { // 커스텀 유효성 검사 함수
      validator: function (value) {
        return ['success','warning','danger'].includes(value)
      }
    },
    propG: {
      type: Function,
      default: function () { // 객체의 배열과 달리 팩토리 함수가 아님, 기본값으로 사용되는 함수
        return 'Default function'
      }
    }

  }
}

</script>

<style scoped>

</style>