import axios from 'axios'

const state = {
    product: null
}

const getters = {
    getProd: (state) => {
        return state.product
    }
}

const actions = {
    fatching({commit}) {
        axios.get(process.env.VUE_APP_URL + 'product', {
            headers: {
                'authtoken': localStorage.getItem('token')
            }
        })
        .then(response => 
            {
                commit("setProd", response.data.result)
            }
        )
        .catch(err => {this.items = err})
    }
}

const mutations = {
    setProd(state, prod){
        state.product = prod
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}