import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    city: 'Stockholm',
    weather: null,
    updateInterval: 60,
  }),
  actions: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const apiKey = '0c3f84f3b202010a602a3a295da7ab54';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: this.city,
            units: 'metric',
            appid: apiKey,
            lang: 'sv'
          }
        });
        this.weather = response.data;
      } catch (error) {
        console.error('Fel vid hämtning av väderdata:', error);
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'weatherStore',
        storage: localStorage, 
      }
    ]
  }
});