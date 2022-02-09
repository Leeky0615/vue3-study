<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1"/>
      <span> + </span>
      <input type="text" v-model="num2"/>
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue'; //reactive, computed, toRefs 추가
function plusCalculator() {
  let state = reactive({ // reative를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    // computed를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더한 값을 반환
  });
  return toRefs(state); // 반응혈으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서는 toRefs를 사용해야함
}

export default {
  name: 'calculator',
  setup() {
    let {num1, num2, result} = plusCalculator(); // 외부 function
    return {
      num1, num2, result
    }
  },
}
</script>
