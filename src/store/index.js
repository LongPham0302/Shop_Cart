import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import modulesCart from './cart'
import modulesProduct from './product'

Vue.use(Vuex)
const myPlugin = store => {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        // called after every mutation.
        // The mutation comes in the format of `{ type, payload }`.
        localStorage.setItem('cart', JSON.stringify(state.carts))
        console.log('state.cart', state.cart)
    })
}
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    getters,
    actions,
    modules: {
        carts: modulesCart,
        product: modulesProduct,
    },
    plugins: [myPlugin]
})

export default store;