<template>
  <div>
    <h1 class="md-display-2">LeadHit</h1>
    <AuthForm />
  </div>
</template>

<script>
  import AuthForm from '@/components/Auth/AuthForm.vue'

  export default {
    name: 'Home',
    components: {
      AuthForm
    }
  }
</script>
