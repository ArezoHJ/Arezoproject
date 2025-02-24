
<template>
  <div>
    <h1>Weather App</h1>
    <SearchInput v-model="places" />
    
    <div class="grid">
      <WeatherCard 
        v-for="(place, idx) in places" 
        :key="idx" 
        :place="place" 
        @delete-place="deletePlace" 
      />
    </div>
  </div>
</template>