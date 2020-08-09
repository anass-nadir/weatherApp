<template>
  <div
    :class="[
      { 'details-page__wrapper-dark': darkMode },
      'details-page__wrapper'
    ]"
  >
    <div
      :class="[
        { 'background-gradient__circle-dark': darkMode },
        'background-gradient__circle'
      ]"
    ></div>
    <svg
      class="back__button"
      @click="$router.push({ path: '/' })"
      viewBox="4085 152 98.5 126"
      tabindex="0"
    >
      <g transform="translate(3980)">
        <circle
          class="a"
          cx="39"
          cy="39"
          r="39"
          transform="translate(105 152)"
        ></circle>
        <line class="b" transform="translate(123.5 190.5)" x1="80"></line>
        <line
          class="b"
          transform="translate(123.5 164.5)"
          x2="26"
          y1="26"
        ></line>
        <line
          class="c"
          transform="translate(123.5 190.5)"
          x1="26"
          y1="27"
        ></line>
        <text class="d" transform="translate(117 274)">
          <tspan x="0" y="0">BACK</tspan>
        </text>
      </g>
    </svg>
    <section class="main-weather__card">
      <section class="card-header__container-dark">
        <img class="city__illustration" :src="cityIllustrationPath" />
        <div class="header-content__wrapper">
          <div class="today-weather__container">
            <div class="temp-state__container">
              <span class="temperature__text">{{ temp }}°</span>
              <span class="weather-state__text">{{ state }}</span>
            </div>
            <div class="hum-wind__container">
              <div class="hum__container">
                <span class="hum__text">humidity</span>
                <span class="hum-value__text">{{ hum }} %</span>
              </div>
              <div class="hum-wind__separator">&nbsp;</div>
              <div class="wind__container">
                <span class="wind__text">wind</span>
                <span class="wind-value__text">{{ wind }} K/M</span>
              </div>
            </div>
          </div>
          <div class="city-name__container">
            <div class="city-name__underline">
              <span class="city-name__text">{{ $route.params.city }}</span>
            </div>
          </div>
        </div>
      </section>
      <main class="body-content__wrapper">
        <section class="forecast__container">
          <div
            class="day-weather__container"
            v-for="(day, index) of daysForecast"
            :key="index"
          >
            <span class="day-name__text">{{ index }}</span>
            <svg
              class="forecast-condition__icon"
              v-if="day.state === 'Clouds'"
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
              v-else-if="day.state === 'Haze' || day.state === 'Fog'"
              viewBox="0 0 454 366"
            >
              <path
                fill="#12bcff"
                d="M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"
              />
            </svg>
            <svg
              class="forecast-condition__icon"
              v-else-if="day.state === 'Rain' || day.state === 'Drizzle'"
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
              class="forecast-condition__icon"
              v-else-if="day.state === 'Storm' || day.state === 'Thunderstorm'"
              viewBox="3487.9 -810.7 291.2 200.3"
            >
              <g data-name="Strom icon" transform="translate(1959 -1260.7)">
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
                  data-name="Ellipse 14"
                  rx="55.3"
                  ry="51.7"
                  transform="translate(1529 490.4)"
                />
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
                  data-name="Ellipse 15"
                  rx="55.3"
                  ry="51.7"
                  transform="translate(1569.6 467.8)"
                />
                <circle
                  cx="55.3"
                  cy="55.3"
                  r="55.3"
                  class="cls-1"
                  data-name="Ellipse 16"
                  transform="translate(1618.9 476.8)"
                />
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
                  data-name="Ellipse 17"
                  rx="55.3"
                  ry="51.7"
                  transform="translate(1631.8 450)"
                />
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
                  data-name="Ellipse 18"
                  rx="55.3"
                  ry="51.7"
                  transform="translate(1687.1 477.5)"
                />
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
                  data-name="Ellipse 19"
                  rx="55.3"
                  ry="51.7"
                  transform="translate(1709.6 507.3)"
                />
                <circle
                  cx="55.3"
                  cy="55.3"
                  r="55.3"
                  class="cls-1"
                  data-name="Ellipse 20"
                  transform="translate(1639.6 500.1)"
                />
                <ellipse
                  cx="55.3"
                  cy="51.7"
                  class="cls-1"
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
            <svg
              class="forecast-condition__icon"
              v-else-if="day.state === 'Sunny' || day.state === 'Clear'"
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
            <span class="day-temp__text">{{ day.temp }}°</span>
            <span class="day-state__text">{{ day.state }}</span>
          </div>
        </section>
      </main>
    </section>
  </div>
</template>

<script>
  import { EventBus } from '../eventBus';
  import { getWeather, getForecast } from '../services/weather';

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    todayNumberInWeek = new Date().getDay();
  export default {
    name: 'Details',
    data() {
      return {
        state: '',
        temp: '',
        hum: '',
        wind: '',
        today: days[todayNumberInWeek],
        darkMode: localStorage.getItem('dark-mode') || false,
        daysForecast: ''
      };
    },
    computed: {
      cityIllustrationPath() {
        switch (this.$route.params.city.toLowerCase()) {
          case 'paris':
            return require('../assets/cities/france.svg');
          case 'doha':
            return require('../assets/cities/qatar.svg');
          case 'rabat':
            return require('../assets/cities/rabat.svg');
          case 'tunis':
            return require('../assets/cities/tunis.svg');
          case 'tokyo':
            return require('../assets/cities/japan.svg');
          default:
            return require('../assets/cities/default.svg');
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      Promise.all([getWeather(to.params.city), getForecast(to.params.city)])
        .then((data) => next((vm) => vm.setData(data)))
        .catch((err) => next((vm) => vm.setData(err)));
    },
    mounted() {
      EventBus.$on('switch-darkmode', (mode) => (this.darkMode = mode));
    },
    methods: {
      setData(data) {
        if (data.some((item) => item.cod == 404)) {
          this.errorMessage = 'city not found';
          return;
        }
        this.state = data[0].weather[0].main;
        this.temp = Math.ceil(Number(data[0].main.temp));
        this.hum = data[0].main.humidity;
        this.wind = Math.round(Math.round(data[0].wind.speed));
        const dates = {};
        for (const res of data[1].list) {
          const date = new Date(res.dt_txt).toDateString().split(' ')[0];
          if (dates[date]) {
            dates[date].counter += 1;
            dates[date].temp += res.main.temp;
          } else {
            dates[date] = {
              state: res.weather[0].main,
              temp: res.main.temp,
              counter: 1
            };
          }
        }
        Object.keys(dates).forEach((day) => {
          dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
        });
        delete dates[Object.keys(dates)[0]];
        this.daysForecast = dates;
      }
    }
  };
</script>

<style>
  .details-page__wrapper {
    background: linear-gradient(to top, #86dbff 0%, #e0c3fc 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    padding: 2rem 0;
    width: 100vw;
  }

  .details-page__wrapper-dark {
    background: linear-gradient(#fc7db8, #495cfc);
  }

  .background-gradient__circle {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    height: 100rem;
    width: 100rem;
    border-radius: 50%;
    background: linear-gradient(
      -225deg,
      #ffffff 0%,
      #ffe29f 10%,
      #ffa99f 48%,
      #ffd1ff 100%
    );
    animation: scaleup-circle 900ms ease-in-out forwards;
    transition: background 1s ease-in-out;
  }

  .background-gradient__circle-dark {
    transition: background 1s ease-in-out;
    background: linear-gradient(to bottom, #ff8b8b, #6676ff);
  }

  .main-weather__card {
    background-color: white;
    height: 80%;
    width: 65%;
    border-radius: 1rem;
    position: relative;
    z-index: 3;
    justify-items: center;
    opacity: 0;
    animation: scaleup 1s ease-out 300ms, fadein 1.25s ease-out 300ms forwards;
  }

  .card-header__container-dark {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .back__button {
    position: absolute;
    top: 3rem;
    left: 3.25rem;
    width: 5rem;
    cursor: pointer;
    z-index: 6;
    margin-top: 2rem;
  }
  .back__button .a {
    fill: #2b244d;
  }

  .back__button .b {
    fill: rgba(0, 0, 0, 0);
  }

  .back__button .b,
  .back__button .c {
    stroke: #fff;
    stroke-width: 2px;
  }

  .back__button .c {
    fill: none;
  }

  .back__button .d {
    fill: #fff;
    font-size: 15px;
    font-family: SegoeUI, Segoe UI, sans-serif;
    letter-spacing: 0.4em;
  }
  .city__illustration {
    width: 100%;
    height: 510px;
    border-radius: 1rem 1rem 0 0;
    position: relative;
    object-fit: cover;
    display: block;
  }

  .header-content__wrapper {
    position: absolute;
    z-index: 2;
    color: white;
    top: 3rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  .temperature__text {
    font-size: 6rem;
    letter-spacing: 0.75rem;
  }

  .city-name__container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25%;
  }

  .city-name__underline {
    background: transparent;
    border-radius: 5px;
    height: 5px;
    box-shadow: 0 3rem 0 0 #ffffff;
  }

  .city-name__text {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1.75rem;
    padding-bottom: 2rem;
  }

  .today-weather__container {
    align-self: center;
    justify-self: center;
    display: grid;
    width: 100%;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 2rem;
  }

  .temp-state__container {
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .weather-state__text {
    letter-spacing: 0.5rem;
    font-size: 1.15rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .hum-wind__container {
    display: flex;
    align-items: center;
    margin-left: -4rem;
  }

  .hum-wind__separator {
    margin: 0 2rem;
    width: 2px;
    height: 2.5rem;
    background-color: white;
  }

  .hum__text,
  .wind__text {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .hum__container,
  .wind__container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .body-content__wrapper {
    display: flex;
    padding: 2rem;
  }

  .forecast__container {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    flex: 0 1 auto;
    margin: auto;
  }

  .day-weather__container {
    display: flex;
    flex-flow: column;
    margin: 2rem 3rem;
    justify-content: center;
    align-items: center;
  }

  .day-name__text {
    font-size: 1.5rem;
    color: #39437a;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .forecast-condition__icon {
    height: 4rem;
  }

  .day-temp__text {
    font-size: 1.85rem;
    color: #0c1066;
    letter-spacing: 0.25rem;
    margin: 0.75rem 0;
    text-align: center;
    padding-left: 0.35rem;
  }

  .day-state__text {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #2b244d;
  }
  @media screen and (max-width: 1919px) {
    .main-weather__card {
      height: 80%;
      width: 75%;
    }
  }
  @media screen and (max-width: 1279px) {
    .back__button {
      top: 1rem;
    }

    .main-weather__card {
      width: 80%;
    }
  }
  @media screen and (max-width: 959px) {
    .header-content__wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr;
    }

    .back__button {
      position: static;
      margin-bottom: 1rem;
    }

    .details-page__wrapper {
      flex-flow: column;
    }

    .hum-wind__container,
    .temp-state__container {
      margin: 0 auto;
    }

    .city-name__container {
      padding-bottom: 0;
    }
  }
  @keyframes scaleup-circle {
    from {
      transform-origin: top;
      transform: scale(0) translateY(-50%) rotate(0deg);
    }
    to {
      transform-origin: center;
      transform: scale(1) translateY(-50%) rotate(360deg);
    }
  }
</style>
