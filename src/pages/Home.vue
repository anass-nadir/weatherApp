<template>
  <div class="main__container">
    <weather-card v-for="(city, key) in cities" :key="key" :city="city" />
    <add-card />
  </div>
</template>

<script>
  import { db } from '../services/firebase';
  import WeatherCard from '../components/WeatherCard';
  import AddCard from '../components/AddCard';
  export default {
    components: {
      WeatherCard,
      AddCard
    },
    data() {
      return {
        cities: {}
      };
    },
    created() {
      this.getCities();
    },
    methods: {
      getCities() {
        db.collection('users')
          .doc(this.$store.getters.user.uid)
          .collection('cities')
          .get()
          .then((doc) => {
            if (doc.size > 0) {
              this.cities = doc.docs.map((item) => item.data().name);
            }
          });
      }
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
