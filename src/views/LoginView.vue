<template>
  <div>
    <h1>Login</h1>
    <input data-cy="username" placeholder="Username" />
    <input data-cy="password" type="password" placeholder="Password" />
    <button data-cy="login-button" @click="login">Login</button> <!-- changed here -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function login() {
  router.push('/dashboard')
}
</script>
