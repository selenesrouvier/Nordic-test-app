const React = require('react');
const injectI18n = require('nordic/i18n/injectI18n');
const DemoComponent = require('../../components/DemoComponent');
// siempre es necesario importar este Script y que haya 3 scripts en ese orden
// vendor sirve para que en webpack se identifique las tecnologias que usa nordic para funcionar.
const Script = require('nordic/script');
// convierte la info en algun tipo de datos para poder utilizarla en otros lugares, del lado del cliente
const serialize = require('serialize-javascript');
const Image = require('nordic/image');
//require('./styles.scss')

const View = ({ products, translations, i18n, imagesPrefix }) => {

  const filteredProducts = products.filter(product => product.name)
  
  const preloadedState = {
    i18n,
    translations,
    products,
    imagesPrefix
  };

  return (
    <>
      <h2>{i18n.gettext('Esta es una traducción de subtitulo')}</h2>
      
      <DemoComponent i18n={i18n} />
      
      <Script>
        {`
        window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
        console.log('Demo page is loaded!');
      `}
      </Script>
      <Script src="vendor.js" />
      <Script src="products.js" />
      
      <div className="products-container">
        {filteredProducts.map((product, index) => {
          const { buy_box_winner, title } = product || ''
          const { price, thumbnail } = buy_box_winner || ''
          return (
            <div key={index}>
              <p>{title} - ${price}</p>
              <Image className="demo-images__img" src={thumbnail} alt="product-img" />
            </div>
          )
        })}
      </div>

    </>
  )
}
module.exports = injectI18n(View);