<script setup>
import { ref } from 'vue'
import SearchInput from './components/SearchInput.vue'
import WeatherCard from './components/WeatherCard.vue'

// List of places
const places = ref([])

// Method to delete a place
const deletePlace = (name) => {
  if (confirm('Are you sure?')) {
    places.value = places.value.filter((p) => p.location.name !== name)
  }
}
</script>

<template>
  <main>
    <nav class="p-4 bg-gray-200">
    <router-link to="/" class="mr-4">Home</router-link>
    <router-link to="/weather">Weather</router-link>
  </nav>

  <router-view />
    <!-- Display date -->
    <div class="text-center mb-6">
      {{
        new Date().toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }}
    </div>

    <!-- Search -->
    <div>
      <SearchInput v-model="places" />
    </div>

    <!-- Weather cards -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div>
  </main>
</template>

<style>
nav {
  padding: 10px;
  background: #333;
  color: white;
}
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
</style>