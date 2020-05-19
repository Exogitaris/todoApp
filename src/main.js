import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faSkull} from '@fortawesome/free-solid-svg-icons'
import { faBriefcaseMedical} from '@fortawesome/free-solid-svg-icons'

library.add(faExclamation);
library.add(faBackspace);
library.add(faCheck);
library.add(faTrashRestore);
library.add(faArrowLeft);
library.add(faSkull);
library.add(faBriefcaseMedical);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
