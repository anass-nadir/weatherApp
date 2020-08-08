<template>
  <div class="add-wrapper">
    <section class="main-card">
      <div class="city-search-wrapper">
        <div class="city-search-header">
          <h3 class="city-search-title">SEARCH CITIES</h3>
          <div class="search-city-input-wrapper">
            <autocomplete
              ref="autocomplete"
              placeholder="search city"
              :source="capitals"
              input-class="search-city-input"
              @selected="selectCity"
            >
            </autocomplete>
            <div class="search-city-icon">
              <svg
                class="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 451 451"
              >
                <path
                  fill="#FFF"
                  d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"
                ></path>
              </svg>
            </div>
          </div>
          <span class="city-search-hr">O O O</span>
        </div>
        <div class="city-search-body">
          <weather-card
            @cityStored="cityStored"
            v-if="cardCity"
            :city="cardCity"
            addMode="true"
          >
          </weather-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Autocomplete from 'vuejs-auto-complete';
  import WeatherCard from '../components/WeatherCard';
  export default {
    name: 'AddCity',
    components: { WeatherCard, Autocomplete },
    data() {
      return {
        capitals: [],
        cardCity: ''
      };
    },
    beforeMount() {
      this.getCountries();
    },
    methods: {
      selectCity(city) {
        this.cardCity = null;
        if (this.capitals.includes(city.selectedObject)) {
          this.$nextTick(() => {
            this.cardCity = city.display;
          });
        }
      },
      getCountries() {
        fetch(`https://restcountries.eu/rest/v2/all`)
          .then((res) => res.json())
          .then((res) => {
            res.forEach((country, id) => {
              if (country.capital) {
                this.capitals.push({
                  id: id,
                  name: country.capital
                });
              }
            });
            this.capitals.sort();
          });
      },
      cityStored() {
        this.cardCity = '';
        this.$refs['autocomplete'].clear();
      }
    }
  };
</script>

<style scoped>
  .main-card {
    height: 87vh;
    width: 90vw;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    margin-top: -4rem;
  }

  .city-search-wrapper {
    display: flex;
    flex-flow: column;
    flex: 1 1;
    position: relative;
    overflow-y: auto;
  }

  .city-search-header {
    width: 100%;
    min-height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  }

  .city-search-body {
    width: 100%;
    min-height: 60%;
    display: flex;
    justify-content: center;
  }

  .city-search-hr {
    word-spacing: 1rem;
    margin: 2rem;
  }

  .search-city-input-wrapper {
    position: relative;
    width: 80%;
    box-sizing: border-box;
  }

  .search-icon {
    height: 50%;
    width: 50%;
    flex: 1 auto;
  }
  .search-city-icon {
    position: absolute;
    background-color: #31feae;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    right: 0;
    top: -0.35rem;
    display: flex;
    align-items: center;
    z-index: 5;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  }
  .city-search-title {
    color: #0c1066;
    margin: 4rem 0 3rem 0;
    font-size: 1.85rem;
    letter-spacing: 0.1rem;
    word-break: break-all;
  }

  ::v-deep .weather__card-add {
    margin: 2rem 0;
    min-width: 28rem;
  }

  @media screen and (max-width: 959px) {
    ::v-deep .weather__card-add {
      width: 90%;
      margin-bottom: 2rem;
    }

    .add-wrapper {
      flex-flow: column;
    }

    .main-card {
      flex-flow: column;
      margin-left: -1rem;
      margin-bottom: 2rem;
      height: auto;
    }

    .city-search-title {
      margin: 2rem;
    }

    .city-search-wrapper,
    .city-search-header,
    .city-search-body {
      width: 100%;
    }
  }
  ::v-deep .autocomplete__box {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
  }
  ::v-deep .autocomplete__box .search-city-input {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    border-radius: 3rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
    font-size: 1rem;
    color: #131f69;
    text-transform: uppercase;
  }

  ::v-deep .autocomplete__box .search-city-input::placeholder {
    font-size: 1rem;
    color: #131f69;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  ::v-deep .autocomplete__results {
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3) !important;
    border: none !important;
    border-radius: 1rem !important;
    animation: slideDown 0.1s;
    color: #131f69;
  }
  ::v-deep .autocomplete__icon {
    display: none;
  }
</style>
