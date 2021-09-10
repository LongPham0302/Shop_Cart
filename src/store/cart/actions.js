export default {
    actBuyProduct({ commit, state }, data) {

        const index = state.listCart.findIndex(cart => {
            return cart.product.id == data.product.id
        });
        if (index == -1) {
            commit('BUY_PRODUCT', data)
        } else {
            let quantity = data.quantity;
            commit('CHANG_QUATITY', { index, quantity })
        }
    },
    HandelDelete({ commit, state }, IdDelete) {
        var newList = state.listCart.filter(items => {
            return items.product.id !== IdDelete.product.id;
        })
        commit('HANDEL_DELETE', newList)
    },
    actUpdate({ commit, state }, { cartUpdate, quantity }) {
        const index = state.listCart.findIndex(cart => {
            return cart.product.id == cartUpdate.product.id
        });
        let data = {
            index,
            quantity,
            replace: true
        }
        commit('CHANG_QUATITY', data)
    }
}