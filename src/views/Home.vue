<template>
  <div class="home">
      <LoginForm></LoginForm>
  </div>
</template>
<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'home',
  components: {
    LoginForm
  }
}
</script>
<style scoped>
.home{
  height: 100%;
}
</style>
