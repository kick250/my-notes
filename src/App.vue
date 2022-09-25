<template>
  <div>
    <nav class="d-flex py-3 px-4 nav gap-3">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Adicionar</router-link>
    </nav>
    <router-view class="mx-3 my-2"/>
  </div>
</template>

<style>
  body {
    color: #4F5E67;
  }

  #app {
    font-family: sans-serif;
  }

  .nav {
    background: cornflowerblue;
  }

  .nav a {
    color: white;
    text-decoration: none;
  }
</style>
