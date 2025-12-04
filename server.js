import express from 'express';
import cors from 'cors';
import Binance from 'binance-api-node';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const client = Binance.default();

app.use(cors());
app.use(express.static(__dirname));

const cryptos = ['BTC', 'ETH', 'BNB', 'ADA', 'XRP', 'SOL', 'DOGE', 'DOT', 'LINK', 'LTC', 'AAVE', 'MATIC', 'ATOM', 'UNI', 'ICP'];

app.get('/api/prices', async (req, res) => {
  try {
    const prices = {};
    
    for (const crypto of cryptos) {
      try {
        const symbol = `${crypto}USDT`;
        const ticker = await client.prices({ symbol });
        prices[crypto] = ticker[symbol];
      } catch (error) {
        console.error(`Error fetching ${crypto}:`, error.message);
        prices[crypto] = 'N/A';
      }
    }
    
    res.json(prices);
  } catch (error) {
    console.error('Error fetching prices:', error);
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
