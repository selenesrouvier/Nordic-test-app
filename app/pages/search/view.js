const React = require('react');
const { useState } = require('react');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');
const Script = require('nordic/script');
const Image = require('nordic/image');

const restclient = require('nordic/restclient')({
  baseURL: '/api'
})

const View = ({ products, translations, i18n, imagesPrefix }) => {

  const [productsList, setProductsList] = useState(products)
  
  const preloadedState = {
    i18n,
    translations,
    products,
    imagesPrefix
  };

  const getProducts = () => {
    return restclient.get('/search')
      .then(newProducts => {
        setProductsList(newProducts.data)      
        console.log('new products', products)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="search.js" />
      
      <div className="products-container">
        
        <h2>{i18n.gettext('LISTADO DE PRODUCTOS:')}</h2>
        
        <button onClick={getProducts}>
          {i18n.gettext('Search')}
        </button>

        {productsList.map((product, index) => {
          return (
            <div key={index}>
              <p>{product.title} - ${product.price}</p>
              <Image className="demo-images__img" src={product.thumbnail} alt="product-img" lazyload='off' />
            </div>
          )
        })}
      </div>
    </>
  )
}
module.exports = injectI18n(View);