# 🌤️ Weather App

> A beautiful, modern weather application that provides real-time weather information and 5-day forecasts for any city worldwide.

![Weather App](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### 🌍 Real-Time Weather Data
- **Current Weather Conditions**: Displays temperature, humidity, wind speed, and weather description
- **Location Display**: Shows city name with location icon for easy identification
- **Date & Time**: Current date information in a clean, readable format
- **Dynamic Weather Icons**: Context-aware icons that change based on weather conditions

### 📅 5-Day Weather Forecast
- **Extended Forecast**: View weather predictions for the next 5 days
- **Scrollable Interface**: Smooth horizontal scrolling with custom-styled scrollbar
- **Daily Summaries**: Each day shows date, temperature, and weather icon
- **Interactive Cards**: Hover effects for enhanced user experience

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Beautiful frosted glass effect with backdrop blur
- **Blurred Background**: Stunning full-screen background image with blur effect
- **Smooth Animations**: Gradient animations and hover effects throughout
- **Responsive Layout**: Fully responsive design that works on all screen sizes
- **Keyboard Accessible**: Press Enter to search, no mouse required

### 🔍 Smart Search
- **Instant Search**: Type any city name and get results immediately
- **Error Handling**: Clear error messages for invalid city names
- **Search Prompts**: Helpful messages guide users when app first loads

---

## 📂 Project Structure

```
Weather App/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic and API calls
├── style.css           # Styling and animations
├── README.md           # Project documentation
└── images/             # All assets and icons
    ├── bg.jpg          # Background image
    ├── search.png      # Search icon
    ├── humidity.png    # Humidity indicator icon
    ├── wind.png        # Wind speed icon
    ├── clear.png       # Clear sky weather icon (PNG)
    ├── clouds.png      # Cloudy weather icon (PNG)
    ├── mist.png        # Mist/fog weather icon (PNG)
    ├── snow.png        # Snow weather icon (PNG)
    ├── rain.svg        # Rain weather icon (SVG)
    ├── drizzle.svg     # Drizzle weather icon (SVG)
    └── thunderstorm.svg # Thunderstorm weather icon (SVG)
```

### File Descriptions

- **`index.html`** — Semantic HTML5 structure with location display, search interface, weather details, and 5-day forecast carousel
- **`style.css`** — Modern CSS with glassmorphism effects, backdrop blur, smooth animations, and fully responsive design
- **`script.js`** — Async/await API integration with OpenWeatherMap for current weather and 5-day forecast. Uses switch statements for robust weather condition handling
- **`images/`** — All visual assets including background image, UI icons (PNG), and weather condition icons (PNG + SVG)

---

## Getting Started

Follow these steps to run the app locally.

### Prerequisites

- A modern web browser (Chrome/Firefox/Edge/Safari).
- (Optional) Node.js installed if you want to run a local HTTP server via `http-server` or `python -m http.server`.

### 1. Clone or download the repository

If you have the project folder already, skip this step.

```bash
git clone <your-repo-url>
cd Weather\ App
```

### 2. Obtain an OpenWeatherMap API key

This app uses two OpenWeatherMap API endpoints:
- **Current Weather Data API** — For real-time weather information
- **5 Day / 3 Hour Forecast API** — For extended weather predictions

**Get your free API key:**

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "API keys" in your account dashboard
4. Copy your API key

**Configure the API key in your project:**

Open `script.js` and replace the placeholder:

```js
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key
```

⚠️ **Security Note**: For production deployments, never commit API keys to public repositories. Use environment variables or backend proxies to keep credentials secure.

### 3. Serve the files

For best results run the app using a local HTTP server (double-clicking the file in the file system can cause CORS or fetch issues in some setups):

Using Python 3:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using Node (http-server):

```bash
npx http-server -c-1 . 8000
# then open http://localhost:8000 in your browser
```

Or use the Live Server extension in VS Code.

### 4. Using the App

#### Search for Weather
1. **Enter a city name** in the search input (e.g., `London`, `New York`, `Tokyo`, `Paris`)
2. **Submit your search** by:
   - Pressing `Enter` on your keyboard, or
   - Clicking the search button

#### View Weather Information
The app displays:
- 📍 **Location** with city name and location icon
- 📅 **Current date** in readable format (e.g., "Mon, 23 Dec")
- 🌡️ **Temperature** in Celsius
- ☁️ **Weather condition** with detailed description
- 💧 **Humidity** percentage
- 💨 **Wind speed** in km/h
- 📊 **5-day forecast** with scrollable cards showing future weather

#### Supported Weather Conditions
- ☀️ Clear Sky
- ☁️ Cloudy
- 🌧️ Rain
- 💧 Drizzle
- ⛈️ Thunderstorm
- ❄️ Snow
- 🌫️ Mist, Fog, Haze, Smoke, Dust, Sand, Ash (all atmospheric conditions)

#### Navigate Forecast
- Scroll horizontally through forecast cards
- Hover over cards for visual feedback
- Each card shows date, weather icon, and temperature

---

## 🛠️ Technical Details

### APIs Used
- **OpenWeatherMap Current Weather API** (`/data/2.5/weather`)
- **OpenWeatherMap 5-Day Forecast API** (`/data/2.5/forecast`)

### Technologies
- **HTML5** — Semantic markup with accessibility features
- **CSS3** — Modern styling with flexbox, glassmorphism, backdrop-filter blur, custom scrollbars, and smooth animations
- **Vanilla JavaScript (ES6+)** — Async/await for API calls, switch statements for condition handling, dynamic DOM manipulation, date formatting
- **SVG + PNG** — Mixed format icons for optimal quality and compatibility
- **Google Material Symbols** — Location icon from Material Design

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

---

## ⚠️ Error Handling

- **Invalid City Name**: Clear error message displayed when city is not found
- **Empty Search**: Validation prevents empty searches
- **Network Errors**: Console logging for debugging API issues
- **API Limits**: Free tier allows 60 calls/minute, 1,000,000 calls/month

## 👨‍💻 Author

**Autanu Datta**

- GitHub: [@AD-053](https://github.com/AD-053)
- Repository: [Weather-App](https://github.com/AD-053/Weather-App)

---
