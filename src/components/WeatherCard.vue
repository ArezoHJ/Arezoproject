<template>
    <div class="weather-card card p-3" v-if="weather">
      <h2>{{ weather.name }}</h2>
      <p>Temperatur: {{ formattedTemp }}</p>
      <p>Väder: {{ weather.weather[0].description }}</p>
      <p>Vindhastighet: {{ weather.wind.speed }} m/s</p>
      <p>Luftfuktighet: {{ weather.main.humidity }}%</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      weather: {
        type: Object,
        required: true,
      }
    },
    setup(props) {
      const formattedTemp = computed(() => `${props.weather.main.temp}°C`);
      return { formattedTemp };
    }
  };
  </script>