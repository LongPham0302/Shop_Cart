let initListCart = JSON.parse(window.localStorage.getItem('cart'));
if (initListCart && initListCart.listCart) {
    initListCart = initListCart.listCart
} else {
    initListCart = [];
}

export default {
    listCart: initListCart
}