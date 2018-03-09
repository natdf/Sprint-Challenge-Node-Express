const fetch = require('node-fetch');

const bpiCurrent = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const bpiPrevious =
  'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

let currentValue = 0;

const compareBTC = () => {
  const currentBTC = new Promise((resolve, reject) => {
    fetch(bpiCurrent)
      .then(res => res.json())
      .then(current => {
        currentValue = current.bpi.USD.rate_float;
        resolve(Object.values(currentValue));
      })
      .catch(err => reject(err));
  });

  const previousBTC = new Promise((resolve, reject) => {
    fetch(bpiPrevious)
      .then(res => res.json())
      .then(previous => {
        resolve(Object.values(previous.bpi)[0]);
      })
      .catch(err => reject(err));
  });

  return new Promise((resolve, reject) => {
    Promise.all([currentBTC, previousBTC])
      .then(results => {
        console.log('results: ', results);
        resolve(currentValue - results[1]);
      })
      .catch(err => reject(err));
  });
};

module.exports = { compareBTC };
