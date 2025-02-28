class APIHandler {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  }

  async fetchWeather(city) {
    const url = `${this.baseUrl}${city}?key=${this.apiKey}`;
    try {
      const response = await fetch(url);
      const weatherData = await response.json();
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
      return null;
    }
  }
}

const apiKey = 'FFTD247T6UHF8SM8NU7FKTDJL';
const apiHandler = new APIHandler(apiKey);
apiHandler.fetchWeather('london');