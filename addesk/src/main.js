import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase/app'
import BuyModal from "./components/Shared/BuyModal";

Vue.config.productionTip = true;

Vue.component('add-buy-modal', BuyModal);

new Vue({
  router,
  store,
  vuetify,
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyARpLfROUCf4rnB063O_q_xcCRW0F3QqXU",
      authDomain: "my-ads-52720.firebaseapp.com",
      databaseURL: "https://my-ads-52720.firebaseio.com",
      projectId: "my-ads-52720",
      storageBucket: "my-ads-52720.appspot.com",
      messagingSenderId: "712057655827",
      appId: "1:712057655827:web:e6a600f55cee8fe8"
    });

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchAds')


  },
  render: h => h(App),
}).$mount('#app');
