const React = require('react');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');
const Script = require('nordic/script');
const ProductList = require('../../components/ProductList/ProductList');
const Style = require('nordic/style');

const View = ({ products, translations, i18n, imagesPrefix }) => {
  
	const [number, setNumber] = React.useState(0);

  const preloadedState = {
    i18n,
    translations,
    products,
    imagesPrefix
  };

  return (
    <>
			<Style href="./styles.scss" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="home.js" />
      
      <div className="home-container">
        
				<h2>{i18n.gettext('ENCABEZADO')}</h2>

				<h2>{i18n.gettext('CONTENIDO PRINCIPAL')}</h2>
				
				<h2>Number: {number}</h2>
				<ProductList products={products} number={number} setNumber={setNumber} />

				<h2>{i18n.gettext('Copyright © 1999-2022 MercadoLibre S.R.L')}</h2>
      </div>
    </>
  )
}
module.exports = injectI18n(View);