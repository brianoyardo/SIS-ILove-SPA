<template>
    <section class="create-user">
      <h2>Crear Usuario</h2>
      <form @submit.prevent="createUser">
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Crear Usuario</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  const createUser = () => {
    // Lógica para crear un nuevo usuario, por ejemplo, enviar datos al servidor
    console.log('Creando nuevo usuario...');
  };
  </script>
  
  <style scoped>
  .create-user {
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
    background-color: #e74c3c;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c0392b;
  }
  </style>
  