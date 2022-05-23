const React = require('react');
const { useState, useRef } = require('react');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');
const Script = require('nordic/script');
const Style = require('nordic/style');
const Image = require('nordic/image');
const restclient = require('nordic/restclient')({
  baseURL: '/api'
})

const View = ({ products, translations, i18n, imagesPrefix, device }) => {

  const inputRef = useRef();
  const [productsList, setProductsList] = useState(products)
  
  const preloadedState = {
    i18n,
    translations,
    products,
    imagesPrefix, 
    device
  };
  console.log('device', device)

  const getProducts = (e) => {
    return restclient.get('/search')
      .then(newProducts => {
        setProductsList(newProducts.data)      
        console.log('new products', products)
      })
      .catch(err => console.log(err))
    /*e.preventDefault();
    const inputValue = inputRef.current.value;

    window.location.href = `/listado?q=${inputValue}`*/
  }

  /*
  <form>
          <input ref={inputRef} type='text' placeholder={i18n.gettext('Buscá un producto..')}/>
          <button onClick={getProducts}>
            {i18n.gettext('Buscar')}
          </button>
        </form>
        */

  return (
    <>
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
      </Script>
      <Style href="search.css"/>
      <Script src="vendor.js" />
      <Script src="search.js" />
      
      <div className="products-container">
        
        <h2 className='test'>{i18n.gettext('LISTADO DE PRODUCTOS:')}</h2>
        
        
        <button onClick={getProducts}>
          {i18n.gettext('Buscar')}
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