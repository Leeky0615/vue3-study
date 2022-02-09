import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "@/mixin";

const app = createApp(App);
app.directive('focus', {
    mounted(el) {
        el.focus();
    }
})
app.use(router)
app.mixin(mixins);
app.mount('#app')
