<template>
    <section class="comments">
      <h2>Comentarios</h2>
      <div class="comment-form">
        <label for="comment">Deja tu comentario:</label>
        <textarea id="comment" v-model="newComment" rows="4" required></textarea>
        <button @click="addComment">Agregar Comentario</button>
      </div>
      <div class="comment-list">
        <ul>
          <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
import { ref } from 'vue';

export default {
  setup() {
    const newComment = ref('');
    const comments = ref([
      { id: 1, text: '¡Excelente tienda!' },
      { id: 2, text: 'Me encanta la variedad de mochilas.' },
      // Agrega más comentarios según sea necesario
    ]);

    const addComment = () => {
      if (newComment.trim() !== '') {
        comments.value.push({ id: comments.value.length + 1, text: newComment });
        newComment.value = ''; // Limpiar el área de comentarios después de agregar
      }
    };

    return {
      newComment,
      comments,
      addComment
    };
  }
}
</script>
  
  <style scoped>
  .comments {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .comment-form {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  textarea {
    width: 100%;
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
  
  .comment-list ul {
    list-style: none;
    padding: 0;
  }
  
  .comment-list li {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .comment-list li:last-child {
    border-bottom: none;
  }
  </style>
  