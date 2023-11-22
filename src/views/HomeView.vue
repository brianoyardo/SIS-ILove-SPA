<script setup>
import { onMounted, ref } from 'vue';
import { store } from './store.js';

const prods = ref([]);

onMounted(() => {
  fetch("http://localhost:3000/productos")
    .then((res) => res.json())
    .then((data) => (prods.value = data))
    .catch((err) => console.log(err.message));
});

const handleAdd = (o) => {
  const existingProduct = store.count.find((p) => p.producto_Id === o.producto_Id);

  if (existingProduct) {
    existingProduct.cantidad += 1;
  } else {
    store.increment(o);
  }
};
</script>

<template>
  <div>
    <!-- Encabezado -->
    <header>
      <h1>TIENDA DE MOCHILAS</h1>
      <nav>
        <ul>
          
          <p>Somos una tienda dedicada a ofrecer mochilas de alta calidad en una variedad de colores y estilos. Nos esforzamos por brindar la mejor experiencia de compra a nuestros clientes.</p>

          
        </ul>
      </nav>
    </header>

    <!-- Contenido del catálogo -->
    <section class="container">
      <article class="card" v-for="p in prods" :key="p.id">
        <img :src="p.img" alt="" class="card-img">
        <div class="card-body">
          <h3 class="title">{{ p.nombre }}</h3>
          <p class="text">Cantidad en Stock: {{ p.stock }}</p>
        </div>
        <div class="card-footer">
          <div class="price">{{ p.precio }}Bs</div>
          <button class="button" @click="handleAdd({ producto_Id: p.id, precio: p.precio, cantidad: 1 })">comprar</button>
        </div>
      </article>
    </section>

    <!-- Comentarios -->
    <footer>
      <p><!-- Tus comentarios sobre la página --></p>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos del componente */

header {
  background-color: #3498db;
  padding: 10px;
  text-align: center;
  color: #fff;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  padding: 10px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text {
  font-size: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.price {
  font-size: 20px;
  font-weight: bold;
}

.button {
  background-color: #021e31;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #021e31;
}

footer {
  margin-top: 20px;
  text-align: center;
}

</style>
