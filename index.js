import BinanceAPI from 'binance-api-node';

const client = BinanceAPI.default();

const cryptos = ['BTC', 'ETH', 'BNB', 'ADA', 'XRP', 'SOL', 'DOGE', 'DOT', 'LINK', 'LTC'];

async function getPrices() {
  try {
    console.log('Fetching cryptocurrency prices...\n');
    
    for (const crypto of cryptos) {
      const symbol = `${crypto}USDT`;
      const ticker = await client.prices({ symbol });
      const price = ticker[symbol];
      
      if (price) {
        console.log(`${crypto}: $${parseFloat(price).toFixed(2)}`);
      }
    }
  } catch (error) {
    console.error('Error fetching prices:', error.message);
  }
}

getPrices();
