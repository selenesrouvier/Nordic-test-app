const normalizer = (arrayProducts) => {
return arrayProducts.map(
    product => product.buy_box_winner || product)
}

module.exports = {normalizer}