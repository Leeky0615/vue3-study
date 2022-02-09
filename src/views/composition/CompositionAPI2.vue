<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1"/>
      <span> + </span>
      <input type="text" v-model="state.num2"/>
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'; //reactive, computed 추가

export default {
  name: 'calculator',
  setup() {
    let state = reactive({ // reative를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
      // computed를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더한 값을 반환
    });

    return { // reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션처럼 사용 가능
      state
    }
  },
}
</script>
