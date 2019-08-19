import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase/app'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyARpLfROUCf4rnB063O_q_xcCRW0F3QqXU",
      authDomain: "my-ads-52720.firebaseapp.com",
      databaseURL: "https://my-ads-52720.firebaseio.com",
      projectId: "my-ads-52720",
      storageBucket: "",
      messagingSenderId: "712057655827",
      appId: "1:712057655827:web:e6a600f55cee8fe8"
    })
  }
}).$mount('#app')
