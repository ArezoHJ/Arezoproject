<script setup>
import { ref } from 'vue'
import SearchInput from '../components/SearchInput.vue'
import WeatherCard from '../components/WeatherCard.vue'

// Lista över platser
const places = ref([])

// Funktion för att ta bort en plats
const deletePlace = (name) => {
  if (confirm('Är du säker?')) {
    places.value = places.value.filter((p) => p.location.name !== name)
  }
}
</script>

<template>
  <main>
    <h2 class="text-center text-xl font-bold mb-4">Weather forecast</h2>

    
    <!-- Väderkort -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div>
  </main>
</template>
