<template>
  <div class="container mt-4">
    <h1 class="text-center">🌦️Väderapp</h1>
    <input v-model="city" class="form-control" placeholder="Ange en stad" />
    <button class="btn btn-primary mt-2" @click="updateCity">Hämta väder</button>
    <WeatherCard v-if="weather" :weather="weather" />
    <div class="mt-3">
      <label>Uppdateringsintervall (sekunder):</label>
      <input type="number" v-model.number="updateInterval" class="form-control" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted } from 'vue';
import { useWeatherStore } from '../store/weatherStore';
import WeatherCard from '../components/WeatherCard.vue';
import { useRoute } from 'vue-router';

export default {
  components: { WeatherCard },
  setup() {
    const store = useWeatherStore();
    const city = ref(store.city);
    const updateInterval = ref(store.updateInterval);
    const route = useRoute();


    if (route.params.city) {
      store.city = route.params.city;
    }

    const updateCity = () => {
      store.city = city.value;
    };

    watchEffect(() => {
      store.fetchWeather();
    });

    onMounted(() => {
      store.fetchWeather();
    });

    return { city, updateCity, updateInterval, weather: store.weather };
  }
};
</script>
