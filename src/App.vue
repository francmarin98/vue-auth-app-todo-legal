<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap");

:root {
  --background-color-primary: #fafafa;
  --background-color-secondary: #fff;
  --primary-color: #2c4477;
  --secondary-color: #0069aa;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Roboto, serif;
  height: 90vh;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.radius {
  border-bottom-left-radius: 3rem;
  border-top-right-radius: 3rem;
}

.wrapper {
  background-color: var(--background-color-primary);
  display: grid;
  place-items: center;
  height: 100vh;
  width: 50vw;
}

.wrapper-header {
  display: grid;
  place-items: center;
}

.wrapper-content {
  position: relative;
  background-color: var(--background-color-secondary);
  width: 85%;
  padding: 0 2rem;
}

.wrapper-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-submit {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 2.5rem;
  outline: none;
  overflow: hidden;
  text-transform: uppercase;
}

.btn-submit > i {
  position: relative;
  top: 10%;
  right: -4%;
  font-size: 2rem;
}

.btn-submit:hover {
  color: var(--primary-color);
}

@media screen and (max-width: 767px) {
  .wrapper {
    width: 100%;
  }

  .wrapper-content {
    padding: 0 1rem;
  }

  .wrapper-content h3::after {
    width: 35%;
  }
}
</style>
