<template>
  <div class="main__container">
    <weather-card v-for="(city, key) in cities" :key="key" :city="city.name" />
  </div>
</template>

<script>
  import { db } from '../services/db';
  import WeatherCard from '../components/WeatherCard';
  
  export default {
    components: {
      WeatherCard
    },
    data() {
      return {
        cities: {}
      };
    },
    firestore: {
      cities: db.collection('cities')
    }
  };
</script>

<style>
  .main__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-height: 90vh;
    position: relative;
  }
</style>
