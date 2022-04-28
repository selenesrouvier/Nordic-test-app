const React = require('react');

function View({title, products}) {
  console.log('listado de productos', products)

  return (
    <div>
      <h2>Listado de productos:</h2>
      { products.map( product => (
        <ul key={ product.id }>
          <li>{ product.name ? product.name : product.title }</li>
        </ul>
      ))}
    </div>
  )
}


module.exports = View;