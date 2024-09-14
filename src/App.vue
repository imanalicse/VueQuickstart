<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-3 mb-3 border-bottom sticky-top">
    <div class="container">
      <div class="d-flex">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="50" />
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
      </div>
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
header nav a {
  padding: 0 10px;
}
</style>
