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
       const apiKey = 'f3762c3b13ec4f0ea2f190808251002';
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
         params: {
           q: this.city,
           units: 'metric',
           appid: apiKey,
           
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
