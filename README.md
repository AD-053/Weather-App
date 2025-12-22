# Weather App

A small, beautiful, and responsive Weather App built with plain HTML, CSS and JavaScript. It fetches live weather data from the OpenWeatherMap API and displays the city name, temperature (°C), humidity and wind speed, along with a matching weather icon.

This project is designed as a beginner-friendly example to demonstrate working with a third-party REST API, DOM manipulation, and simple front-end styling.

---

## Features

- Lightweight: no frameworks or build tools required.
- Live weather data using OpenWeatherMap API.
- Keyboard-friendly search: press Enter or click the search icon to request weather for a city.
- Clean, modern UI with responsive layout.
- Simple icon set for common weather conditions (Clouds, Clear, Rain, Drizzle, Mist).

---

## Project Structure

```
index.html
script.js
style.css
images/
  ├─ search.png
  ├─ rain.png
  ├─ clouds.png
  ├─ clear.png
  ├─ drizzle.png
  ├─ mist.png
  ├─ humidity.png
  └─ wind.png
README.md
```

- `index.html` — the app markup.
- `style.css` — styles and layout.
- `script.js` — main JavaScript that calls the OpenWeatherMap API and updates the UI.
- `images/` — icons and assets used by the app.

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

This app uses the OpenWeatherMap Current Weather Data API. Get a (free) API key by signing up at:

https://openweathermap.org/api

When you have the key, you can either:

- Replace the `apiKey` value directly inside `script.js` (quick and simple, but not secure for public repos), or
- Keep secrets out of source control by reading the key from a runtime environment or a build-time mechanism (recommended for published projects).

Example (quick edit): open `script.js` and change:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

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

### 4. Use the app

- Type a city name in the search input (for example: `London`, `New York`, `Tokyo`).
- Press Enter or click the search button.
- The app will show the city, temperature (°C), humidity, wind speed, and a weather icon.

---

## Error handling

- If the city is not found or the input is empty, an error message `Invalid City Name` is shown.
- Check the browser console for network or API errors if the app does not respond.

---

## Customization

- Add more weather icons and extend the condition checks inside `script.js` to support additional weather states (Snow, Thunderstorm, Fog, etc.).
- Improve styling in `style.css` or integrate a CSS framework.

---

## Author

Name: Autanu Datta
