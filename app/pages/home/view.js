const React = require('react');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');
const Style = require('nordic/style');
const Script = require('nordic/script');
const ProductList = require('../../components/ProductList/ProductList');
const PositionTask = require('../../components/PositionTask/PositionTask');
const FlexboxTask = require('../../components/FlexboxTask/FlexboxTask');

const View = ({ products, translations, i18n, imagesPrefix }) => {
  
	const [number, setNumber] = React.useState(0);
  const Products = [
    {
      id: 1,
      title: 'Producto 1',
    },
    {
      id: 2,
      title: 'Producto 2',
    },
    {
      id: 3,
      title: 'Producto 3',
    },
    {
      id: 4,
      title: 'Producto 4',
    },
    {
      id: 5,
      title: 'Producto 5',
    }
  ]

  const preloadedState = {
    i18n,
    translations,
    products,
    imagesPrefix
  };

  return (
    <>
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
      </Script>
      <Style href="home.css"/>
      <Script src="vendor.js" />
      <Script src="home.js" />
      
      <FlexboxTask />
      
      <PositionTask />
      

      <div className="home-container">
        
				<h2>{i18n.gettext('ENCABEZADO')}</h2>

        <div className='container-yellow'>

        </div>

        <div className='container-green'>
          <h2>Productos</h2>
          {Products.map(product => (
            <div key={product.id} className='product'>
              <div className='product-box'></div>
              <h2>{product.title}</h2>
            </div>
          ))}
        </div>

				<h2>{i18n.gettext('CONTENIDO PRINCIPAL')}</h2>
				
				<h2>Number: {number}</h2>
				<ProductList products={products} number={number} setNumber={setNumber} />

				<h2>{i18n.gettext('Copyright © 1999-2022 MercadoLibre S.R.L')}</h2>
      </div>
    </>
  )
}
module.exports = injectI18n(View);