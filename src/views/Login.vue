<template>
  <section class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Iniciar sesión</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
  // Lógica de inicio de sesión, por ejemplo, enviar datos al servidor
  console.log('Iniciando sesión...');
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
