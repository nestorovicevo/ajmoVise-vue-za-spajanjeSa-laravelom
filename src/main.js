import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'

import AppLogin from '@/components/AppLogin'
import AppContacts from '@/components/AppContacts'


Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/login', component: AppLogin},
  {path: '/', redirect: 'contacts'},
  {path: '/contacts', component: AppContacts}
]

const router = new VueRouter({
  routes
})

import {contactsService} from '@/services/Contacts'

const store = new Vuex.Store({
  state: {
    contacts: []
  },

  actions: {
    ///ova akcija ce pozvati metodu iz servisa
    //////i komitovati mutaciju odnosno pozvati je 
    async fetchContacts(context){
      const response = await contactsService.getAll()
      context.commit('SET_CONTACTS', response.data)
    },

    async createContact(context, contact){
        const response = await contactsService.create(contact)
        context.commit('ADD_CONTACT', response.data)
    }
  },

  getters:{
    contacts: state => state.contacts,

    // contacts(state){return state.contacts}
  },

  mutations: {
    SET_CONTACTS(state, contacts){
      state.contacts = contacts
    },

    ADD_CONTACT(state, contact){
      state.contacts.push(contact)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
