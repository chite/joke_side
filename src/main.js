import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft,faTimes, faExternalLinkSquareAlt, faPrint, faCog, faEllipsisV, faRedoAlt, faBars, faSearch, faQuestionCircle, faTh, faPlus, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/scss/style.scss';

library.add(faArrowLeft, faTimes, faExternalLinkSquareAlt, faPrint, faStar, faCog, faEllipsisV, faBars, faSearch, faQuestionCircle, faTh, faPlus, faCommentDots, faRedoAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
