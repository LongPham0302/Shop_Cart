export default {
    CHANG_QUATITY: (state, { index, quantity, replace = false }) => {
        if (replace) {
            state.listCart[index].quantity = quantity
        } else {
            state.listCart[index].quantity += quantity
        }
    },
    BUY_PRODUCT: (state, data) => {
        state.listCart.push(data)
    },
    HANDEL_DELETE: (state, newList) => {
        state.listCart = newList
    }

}