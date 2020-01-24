<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/catlogo.png" alt="Lightweight UI components for Vue.js based on Bulma" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{path: '/' }">Home 🏠</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path: '/catfacts' }">Catfacts 📈</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path: '/catquiz' }">CatQuiz ❓</b-navbar-item>
    </template>
  </b-navbar>
</template>
