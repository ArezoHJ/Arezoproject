<script setup>
import { ref } from 'vue'
import SearchInput from './components/SearchInput.vue'
import WeatherCard from './components/WeatherCard.vue'

// لیست مکان‌ها
const places = ref([])

// متد برای حذف مکان
const deletePlace = (name) => {
  if (confirm('آیا مطمئن هستید؟')) {
    places.value = places.value.filter((p) => p.location.name !== name)
  }
}
</script>

<template>
  <main>
    <!-- نمایش تاریخ -->
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

    <!-- جستجو -->
    <div>
      <SearchInput v-model="places" />
    </div>

    <!-- کارت‌های آب‌وهوا -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div>
  </main>
</template>
