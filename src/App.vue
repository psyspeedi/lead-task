<template>
  <div id="app">
    <md-toolbar class="md-primary" md-elevation="1">
      <h3 class="md-title" style="flex: 1; text-align: left">
        {{ isLoggedIn ? 'Вы авторизованы' : 'Вы не авторизованы' }}
      </h3>
      <md-button class="md-primary" @click="logout" v-if="isLoggedIn">Выйти</md-button>
    </md-toolbar>
    <Spinner v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import Spinner from './components/spinner'

  export default {
    components: { Spinner },
    computed: {
      ...mapGetters('auth', ['isLoggedIn']),
      ...mapState('auth', ['loading'])
    },
    methods: {
      ...mapActions('auth', ['logout'])
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    overflow: hidden;
  }
</style>
