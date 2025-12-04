# Exchange Rates 💱

A modern, real-time cryptocurrency price tracker with live data from Binance API. Built with Node.js, Express, and a sleek dark-themed UI.

## Features 🚀

- **Real-time Crypto Prices**: Live cryptocurrency prices updated every 30 seconds
- **15 Major Cryptocurrencies**: BTC, ETH, BNB, ADA, XRP, SOL, DOGE, DOT, LINK, LTC, AAVE, MATIC, ATOM, UNI, and ICP
- **Modern Dark UI**: Beautiful dark theme with cyan/teal accents and orange highlights
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Fast API Integration**: Direct integration with Binance API for accurate pricing
- **Market Overview**: Dashboard showing total market cap, Bitcoin dominance, and market sentiment
- **One-Click Refresh**: Fixed refresh button for instant price updates

## Tech Stack 🛠️

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **API**: Binance REST API
- **Styling**: Modern CSS with gradients and animations

## Installation 📦

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Niko5886/exchange-rates.git
cd exchange-rates
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the application**
```bash
npm start
```

4. **Open in browser**
Navigate to: `http://localhost:3000`

The application will automatically start fetching cryptocurrency prices from Binance API.

## Project Structure 📁

```
exchange-rates/
├── index.html          # Main UI with responsive grid layout
├── server.js           # Express server and API routes
├── package.json        # Project dependencies
├── package-lock.json   # Dependency lock file
├── index.js            # Original CLI script for prices
└── .gitignore         # Git ignore rules
```

## API Integration 🔌

The application uses **Binance REST API** for real-time cryptocurrency prices.

**API Endpoint Used:**
```
https://api.binance.com/api/v3/ticker/price
```

**Architecture:**
- Frontend communicates with local Express server
- Express server queries Binance API
- This setup bypasses CORS restrictions
- All data is real-time and accurate

## Available Cryptocurrencies 💰

| Symbol | Name | Icon |
|--------|------|------|
| BTC | Bitcoin | ₿ |
| ETH | Ethereum | Ξ |
| BNB | Binance Coin | 🔶 |
| ADA | Cardano | ₳ |
| XRP | Ripple | ✕ |
| SOL | Solana | ◎ |
| DOGE | Dogecoin | 🐕 |
| DOT | Polkadot | ● |
| LINK | Chainlink | 🔗 |
| LTC | Litecoin | Ł |
| AAVE | Aave | 👻 |
| MATIC | Polygon | 🟣 |
| ATOM | Cosmos | ⚛️ |
| UNI | Uniswap | 🦄 |
| ICP | Internet Computer | 🕯️ |

## Live Demo 🎮

### Option 1: Run Locally (Recommended)

This is the best way to use the application with live data:

1. **Clone the repository**
```bash
git clone https://github.com/Niko5886/exchange-rates.git
cd exchange-rates
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

✅ The app will now fetch live prices from Binance API and update every 30 seconds!

---

## GitHub Repository

**Source Code:** https://github.com/Niko5886/exchange-rates

## Configuration 🔧

### Environment Variables
Create a `.env` file (optional):
```
PORT=3000
NODE_ENV=development
```

### Customization

**Add more cryptocurrencies:**
Edit `server.js` and add symbols to the `cryptos` array:
```javascript
const cryptos = ['BTC', 'ETH', 'BNB', ...];
```

**Change update interval:**
In `index.html`, modify the interval (in milliseconds):
```javascript
setInterval(fetchPrices, 30000); // Change 30000 to desired interval
```

## Performance ⚡

- **Page Load**: < 1 second
- **API Response**: < 500ms average
- **Update Frequency**: 30 seconds (configurable)
- **Mobile Optimized**: Fully responsive

## Browser Support 🌐

- Chrome/Edge: ✅ Latest
- Firefox: ✅ Latest
- Safari: ✅ Latest
- Mobile browsers: ✅ Fully supported

## Troubleshooting 🔧

### Prices not loading
1. Make sure server is running: `npm start`
2. Check browser console for errors: `F12`
3. Verify you can access `http://localhost:3000`
4. Check internet connection to Binance API

### Port 3000 already in use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install
```

## Future Features 🎯

- [ ] Price history charts
- [ ] Price alerts and notifications
- [ ] Portfolio tracking
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Export price data to CSV
- [ ] Historical price comparisons

## Contributing 🤝

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the ISC License - see the package.json for details.

## Author ✍️

**Niko5886**
- GitHub: https://github.com/Niko5886
- Repository: https://github.com/Niko5886/exchange-rates

## Support 💬

For issues, questions, or suggestions:
1. Open an issue on GitHub
2. Check existing documentation
3. Review the troubleshooting section

## Acknowledgments 🙏

- Binance for the reliable cryptocurrency API
- Modern UI/UX design principles
- Open-source community

---

**Made with ❤️ by Niko5886**

*Last Updated: December 4, 2025*
