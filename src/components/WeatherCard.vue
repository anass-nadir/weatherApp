<template>
  <div>
    <section
      @click="!addMode && $router.push({ path: `/details/${city}` })"
      v-if="addMode ? !cityAdded && city : true"
      :class="[
        { 'weather__card-dark': darkMode, 'weather__card-add': addMode },
        'weather__card'
      ]"
    >
      <span class="city-name__text">{{ city }}</span>
      <div class="spinner-overlay" v-if="loading">
        <div class="spinner-container" />
      </div>
      <template v-else>
        <div class="weather-icon__container">
          <svg
            v-if="state.text === 'Sunny' || state.text === 'Clear'"
            viewBox="2050 -845 262 262"
          >
            <circle
              cx="131"
              cy="131"
              r="131"
              fill="#ffde17"
              data-name="Sun Icon"
              transform="translate(2050 -845)"
            />
          </svg>
          <svg
            v-else-if="state.text === 'Clouds'"
            viewBox="2436.9 -843.1 275.5 274.1"
          >
            <g data-name="cloudy icon" transform="translate(84 790)">
              <circle
                cx="137"
                cy="137"
                r="137"
                fill="#fff"
                data-name="Ellipse 23"
                transform="translate(2354 -1633)"
              />
              <path
                fill="#ffde17"
                d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
                data-name="Subtraction 1"
              />
            </g>
          </svg>
          <svg
            v-else-if="
              state.text === 'Rain' ||
                state.text === 'Drizzle' ||
                state.text === 'Mist'
            "
            viewBox="3170 -843.1 163.5 242.7"
          >
            <g data-name="Rain Icon">
              <g data-name="Water Drops">
                <path
                  fill="#0032cc"
                  d="M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z"
                  data-name="Path 7"
                />
                <path
                  fill="#003eff"
                  d="M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z"
                  data-name="Path 3"
                />
              </g>
            </g>
          </svg>
          <svg
            v-else-if="state.text === 'Haze' || state.text === 'Fog'"
            viewBox="0 0 454 366"
          >
            <path
              fill="#12bcff"
              d="M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"
            />
          </svg>
          <svg
            v-else-if="state.text === 'Storm' || state.text === 'Thunderstorm'"
            viewBox="3487.9 -810.7 291.2 200.3"
          >
            <g data-name="Strom icon" transform="translate(1959 -1260.7)">
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 14"
                rx="55.3"
                ry="51.7"
                transform="translate(1529 490.4)"
              />
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 15"
                rx="55.3"
                ry="51.7"
                transform="translate(1569.6 467.8)"
              />
              <circle
                cx="55.3"
                cy="55.3"
                r="55.3"
                class="cls-99"
                data-name="Ellipse 16"
                transform="translate(1618.9 476.8)"
              />
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 17"
                rx="55.3"
                ry="51.7"
                transform="translate(1631.8 450)"
              />
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 18"
                rx="55.3"
                ry="51.7"
                transform="translate(1687.1 477.5)"
              />
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 19"
                rx="55.3"
                ry="51.7"
                transform="translate(1709.6 507.3)"
              />
              <circle
                cx="55.3"
                cy="55.3"
                r="55.3"
                class="cls-99"
                data-name="Ellipse 20"
                transform="translate(1639.6 500.1)"
              />
              <ellipse
                cx="55.3"
                cy="51.7"
                class="cls-99"
                data-name="Ellipse 21"
                rx="55.3"
                ry="51.7"
                transform="translate(1569.6 507.3)"
              />
              <path
                fill="none"
                stroke="#fd0"
                stroke-width="18"
                d="M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2"
                data-name="Path 59"
              />
              <path
                fill="none"
                stroke="#fd0"
                stroke-width="15"
                d="M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2"
                data-name="Path 60"
              />
            </g>
          </svg>
        </div>
        <div class="temperature-text__container">
          <span class="temperature-metric__text">{{ temp }}°</span>
          <span class="weather-condition__text">{{ state.description }}</span>
        </div>
        <section class="min-max__container">
          <div class="min__container">
            <svg class="min-arrow__icon" viewBox="188.5 807 21 21">
              <path
                fill="#00ff9b"
                d="M209.5 817.5h-21L199 828z"
                data-name="Min Arrow"
              />
            </svg>

            <span class="min-temperature__text">{{ minTemp }}</span>
            <span class="min__text">Min</span>
          </div>
          <div class="max__container">
            <svg class="max-arrow__icon" viewBox="449.5 820 21 21">
              <path
                fill="red"
                d="M449.5 830.5h21L460 820z"
                data-name="Max Arrow"
              />
            </svg>
            <span class="max-temperature__text">{{ maxTemp }}</span>
            <span class="max__text">Max</span>
          </div>
        </section>
        <button class="add-city-btn" v-if="addMode" @click="addCity">
          ADD CITY
        </button>
      </template>
    </section>

    <div v-if="cityAdded" class="city-added-note">
      <h5 class="add-success-text">City has been successfully added!</h5>
      <svg viewBox="0 0 50 50" height="5rem">
        <circle cx="25" cy="25" r="25" fill="#25ae88" />
        <path
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M38 15L22 33l-10-8"
        />
      </svg>
    </div>
    <error @hide-banner="error = ''" :message="error" />
  </div>
</template>

<script>
  import { getWeather, getForecast } from '../services/weather';
  import { db } from '../services/firebase';
  import Error from './Error';
  export default {
    name: 'WeatherCard',
    components: { Error },
    props: {
      city: {
        type: String,
        required: true
      },
      addMode: {
        type: Boolean
      }
    },
    data() {
      return {
        loading: true,
        state: { text: '', description: '' },
        maxTemp: '',
        minTemp: '',
        cityAdded: '',
        temp: '',
        error: ''
      };
    },
    computed: {
      darkMode() {
        return this.$store.getters.darkMode;
      }
    },
    mounted() {
      const getWeatherEndpoint = getWeather(this.city).then((res) => {
        this.state = {
          text: res.weather[0].main,
          description: res.weather[0].description
        };
        this.temp = Math.ceil(res.main.temp);
      });
      const getForecastEndpoint = getForecast(this.city).then(
        (res) => {
          this.maxTemp = Math.round(res.list[0]?.main.temp_max);
          this.minTemp = Math.round(res.list[0]?.main.temp_min);
          for (const item of res.list) {
            if (
              new Date().toLocaleDateString('en-GB') ===
              new Date(item.dt_txt).toLocaleDateString('en-GB')
            ) {
              this.maxTemp =
                item.main.temp > this.maxTemp
                  ? Math.round(item.main.temp)
                  : this.maxTemp;
              this.minTemp =
                item.main.temp < this.minTemp
                  ? Math.round(item.main.temp)
                  : this.minTemp;
            }
          }
        }
      );
      Promise.allSettled([getWeatherEndpoint, getForecastEndpoint]).then(
        () => (this.loading = false)
      );
    },
    methods: {
      addCity() {
        db.collection('users')
          .doc(this.$store.getters.user.uid)
          .collection('cities')
          .add({
            name: this.city
          })
          .then(() => {
            this.cityAdded = true;
            setTimeout(() => {
              this.cityAdded = false;
              this.$emit('cityStored');
            }, 2000);
          })
          .catch((error) => {
            this.error = error.message;
          });
      }
    }
  };
</script>

<style scoped>
  .weather__card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    justify-items: center;
    padding: 2rem;
    margin: 2rem;
    width: 19rem;
    height: 30rem;
    cursor: pointer;
    background-color: white;
    border-radius: 1.75rem;
    animation: slideup 1s ease-in-out, fadein 1.25s ease-in-out 0ms 1;
  }

  .weather__card-add {
    cursor: auto;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 255, 0.5);
    width: 80%;
  }

  .weather__card-dark {
    background: linear-gradient(to bottom, #372865, #000000);
    color: white;
  }

  .city-name__text {
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
  .temperature-text__container {
    text-align: center;
  }
  .temperature-metric__text {
    text-align: start;
    font-size: 3rem;
  }

  .min-max__container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .min__container,
  .max__container {
    margin: 1rem 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .min-arrow__icon,
  .max-arrow__icon {
    height: 1.25rem;
    margin: auto;
  }

  .max-arrow__icon {
    margin-bottom: -0.05rem;
  }

  .weather-condition__text {
    display: block;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
  }

  .max__text {
    color: #ff0070;
  }

  .min__text {
    color: #00ff9b;
  }

  .max__text,
  .min__text {
    font-size: 1rem;
    text-align: center;
  }

  .max-temperature__text,
  .min-temperature__text {
    text-align: center;
    font-size: 2rem;
  }

  .weather-icon__container {
    width: 10rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

  .weather-icon__container > svg {
    width: 10rem;
  }

  .add-city-btn {
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 3rem;
    padding: 1rem 2rem;
    color: white;
    margin-top: 1rem;
    background-color: #2b244d;
    font-size: 1rem;
    font-weight: bold;
  }

  .add-city-btn:hover {
    background-color: #31feae;
  }

  .city-added-note {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: fadein 1s ease-in-out;
    width: 100%;
  }

  .add-success-text {
    font-size: 1.25rem;
  }
  .spinner-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner-container {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
