const React = require('react');

const ProductItem = ({ id, name, price, description }) => {

  return (
    <>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>price: ${price}</p>
        <p>description: {description}</p>
    </>
  );
}

module.exports = ProductItem;