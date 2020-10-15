<template>
  <form class="auth" @keypress.enter.prevent="login">
    <md-field :class="{ 'md-invalid': error }">
      <label>Введите id сайта</label>
      <md-input @input="clearError" v-model="siteId"></md-input>
      <span class="md-error">id сайта должен содержать 24 символа.</span>
    </md-field>
    <md-button @click="loginHandler" class="md-raised md-primary">Войти</md-button>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AuthForm',
    data: () => ({
      error: false,
      siteId: ''
    }),
    methods: {
      ...mapActions('auth', ['login']),
      loginHandler() {
        const siteId = this.siteId.trim()
        if (siteId.length < 24) {
          return (this.error = true)
        }

        this.login(siteId)
      },
      clearError() {
        this.error = false
      }
    }
  }
</script>
<style scoped>
  .auth {
    width: 600px;
    display: flex;
    margin: 0 auto;
  }
</style>
