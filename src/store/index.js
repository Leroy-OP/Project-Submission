import Vuex from'vuex'

import products from './modules/product'
import cart from './modules/cart';
export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        products,
        cart

    }
})