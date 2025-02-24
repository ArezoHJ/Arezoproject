<script setup>
import { reactive } from 'vue'


const props = defineProps(['modelValue']) // Receiving `places` from the parent
const emit = defineEmits(['update:modelValue']) // To update the parent value


const searchTerm = reactive({
 query: '',
 timeout: null,
 results: null
})


// Search API based on user input
const handleSearch = () => {
 clearTimeout(searchTerm.timeout)
 searchTerm.timeout = setTimeout(async () => {
   if (searchTerm.query !== '') {
     const res = await fetch(
       `http://api.weatherapi.com/v1/search.json?key=f3762c3b13ec4f0ea2f190808251002&q=${searchTerm.query}`
     )


     const data = await res.json()
     searchTerm.results = data
   } else {
     searchTerm.results = null
   }
 }, 500)
}


// Fetch weather data and add a new place to `places`
const getWeather = async (id) => {
 const res = await fetch(
   `http://api.weatherapi.com/v1/forecast.json?key=f3762c3b13ec4f0ea2f190808251002&q=id:${id}&days=3&aqi=no&alerts=no`
 )


 const data = await res.json()


 // Add the new place to the `places` list
 emit('update:modelValue', [...props.modelValue, data])


 // Clear input and search results
 searchTerm.query = ''
 searchTerm.results = null
}
</script>


<template>
 <div>
   <!-- Search Field -->
   <form>
     <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
       <i class="fa-solid fa-magnifying-glass p-2 text-indigo-600"></i>
       <input
         type="text"
         placeholder="Enter a city name"
         class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
         v-model="searchTerm.query"
         @input="handleSearch"
       />
     </div>
   </form>


   <!-- Search Suggestions -->
   <div class="bg-white my-2 rounded-lg shadow-lg">
     <div v-if="searchTerm.results !== null">
       <div v-for="place in searchTerm.results" :key="place.id">
         <button
           @click="getWeather(place.id)"
           class="px-3 my-2 hover:text-indigo-600 hover:font-bold w-full text-left"
         >
           {{ place.name }}, {{ place.region }}, {{ place.country }}
         </button>
       </div>
     </div>
   </div>
 </div>
</template>
