<template>
  <div>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/weather">Weather</router-link>
  </nav>
  <router-view></router-view>
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import WeatherChart from './components/WeatherChart.vue';

export default {
  name: 'App',
  components: {
    WeatherCard,
    WeatherChart,
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #f0f4f8;
}
header {
  background-color: #007acc;
  color: white;
  padding: 10px;
}
nav {
  display: flex;
  gap: 20px;
}

</style>
