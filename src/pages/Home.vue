<template>
  <spinner v-if="loading" />
  <div class="main__container" v-else>
    <weather-card v-for="(city, key) in cities" :key="key" :city="city" />
    <add-card />
  </div>
</template>

<script>
  import { db } from '../services/firebase';
  import WeatherCard from '../components/WeatherCard';
  import AddCard from '../components/AddCard';
  import Spinner from '../components/Spinner';
  export default {
    name: 'Home',
    components: {
      WeatherCard,
      AddCard,
      Spinner
    },
    data() {
      return {
        cities: {},
        loading: true
      };
    },
    computed: {
      darkMode() {
        return this.$store.getters.darkMode;
      }
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
          })
          .finally(() => this.$nextTick(() => (this.loading = false)));
      }
    }
  };
</script>

<style scoped>
  .main__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-height: 90vh;
    position: relative;
  }
</style>
