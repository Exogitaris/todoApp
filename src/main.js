import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamation);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
