import vue from 'vue'
import vuex from 'vuex'

import product from './modules/product'

vue.use(vuex)

export default new vuex.Store({
    modules: product
})