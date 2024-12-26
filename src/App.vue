<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="header-container">
    <header>
      <img
        alt="My Profile Photo"
        class="profile-photo"
        src="./assets/me.png"
        width="225"
        height="225"
      />
      <div class="wrapper">
        <HelloWorld msg="Declan Blanchard" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <div id="routView">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  /* width: 80vw; */
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#header-container {
  display: flex;
  align-items: center;
}

#routView {
  /* width: 80vw; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-photo {
  border-radius: 180px;
  display: block;
  margin: 0 auto 0rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: #cb0001;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .profile-photo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  }

  .profile-photo {
    margin: 0 2rem 0 0;
  }
}
</style>
