<template>
    <div>
      <h1>Weather information</h1>
      <input v-model="city" placeholder="Ange en stad" />
      <button @click="fetchWeather">Get weather</button>
      <div v-if="weather">
        <p>City: {{ weather.name }}</p>
        <p>Temperature: {{ weather.main.temp }} °C</p>
        <p>Weather: {{ weather.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, watch } from 'vue';

const city = ref('Stockholm');
const weatherData = ref(null);
const interval = ref(60000); // Standard 1 min
let timer;

const fetchWeather = async () => {
  const apiKey = '0c3f84f3b202010a602a3a295da7ab54';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  weatherData.value = await response.json();
};

onMounted(() => {
  fetchWeather();
  timer = setInterval(fetchWeather, interval.value);
});

watch(interval, (newInterval) => {
  clearInterval(timer);
  timer = setInterval(fetchWeather, newInterval);
});
</script>
  