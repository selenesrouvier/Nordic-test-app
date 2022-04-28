const React = require('react');

function View({title, products}) {
  //console.log(products.available_filters)

  const products2 = products.results;
  console.log('estooo 2', products2)

  return (
    <div>
      <h1>{title}</h1>
      <br/>
      <h2>Productos:</h2>
      <h3>ID:{products2[0].id}</h3>
      <h3>Nombre: {products2[0].name}</h3>
      {
        products2.map((product, index) => {
          <h3 key={index}>id: {product.id} name: {product.name}</h3>
        })
      }
    </div>
  )
}


module.exports = View;