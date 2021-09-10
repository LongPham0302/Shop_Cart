const toCurrency = function(value, unit = 'USD', dir = 'right') {
    if (dir === 'right') {
        return value + '' + unit
    } else {
        return unit + '' + value
    }
}

const validateQuantity = function(quantity) {
    let number = parseInt(quantity);
    if (number == quantity && !isNaN(number)) {
        return number >= 1;
    }
    return false;
}
export {
    toCurrency,
    validateQuantity
}