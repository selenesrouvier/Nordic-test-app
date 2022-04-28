const currencies = [
  {
    default_currency_id: "ARS",
    id: "MLA",
    name: "Argentina"
  },
  {
    default_currency_id: "COP",
    id: "MCO",
    name: "Colombia"
  },
  {
    default_currency_id: "UYU",
    id: "MLU",
    name: "Uruguay"
  },
  {
    default_currency_id: "CLP",
    id: "MLC",
    name: "Chile"
  },
];
  
const showUrl = (req, res, next) => {
  console.log(req.originalUrl)
  next()
}

const supportedCurrencies = (req, res, next) => {
  res.locals.currencies = currencies
  next()
}

module.exports = {
  showUrl, 
  supportedCurrencies
};