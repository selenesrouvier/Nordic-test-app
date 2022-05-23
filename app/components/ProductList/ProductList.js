const React = require('react');
const { useState, useEffect } = require('react');
const PropTypes = require('prop-types');
const ProductCard = require('../ProductCard/ProductCard');
const Formulario2 = require('../Form/Form2');

const ProductList = ({products, number, setNumber}) => {
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
    console.log('favorites', favorites);
  }, [favorites]);

  const handleFavorites = (product) => {
    if (favorites.includes(product.id)) {
      const filteredFavorites = favorites.filter(favorite => !(favorite === product.id))
      setFavorites(filteredFavorites)
    } else {
      setFavorites(prevFavorites => [...prevFavorites, product.id])
    }
  }

	if (products) {
    return (
      <div className="products-container">
				
        {products.map((product) => {
          return (
						<div className="product-container">
							<ProductCard
								key={product.id}
								product={product}
								isFavorite={favorites.includes(product.id)}
								handleFavorites={() => {
									handleFavorites(product)
								}}
							/>
							<br/>
						</div>
          )
        })}
      </div>
    )
  } else {
    return (
      <p>No se encontraron productos...</p>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

module.exports = ProductList;