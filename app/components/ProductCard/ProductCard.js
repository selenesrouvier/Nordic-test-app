const React = require('react');
const Image = require('nordic/image');
const PropTypes = require('prop-types');

const ProductCard = ({ product, handleFavorites, isFavorite }) => {
  const { name, id, title, price, thumbnail, permalink } = product || ''  

  return (
    <a
      className='product'
      key={id}
    >
      {isFavorite && <span className='star-symbol'>★</span>}
      <Image src={thumbnail} alt="product-img" />
      <p>{name || title}</p>
      <p>$ {price}</p>
      <button className='btn-favorite' onClick={handleFavorites} >
        {isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      </button>
    </a>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      permalink: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleFavorites: PropTypes.func.isRequired,
};

module.exports = ProductCard;