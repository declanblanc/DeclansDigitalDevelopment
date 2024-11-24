<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p id="bio">
      Software Engineer. Passionate about solving problems, delivering
      solutions, and working with others.
    </p>
    <h2 class="socials">
      <a href="https://www.linkedin.com/in/declanblanc/" target="_blank">
        <img src="../assets/socials/LinkedIn.png" width="24" height="24" />
      </a>
      <a href="https://www.github.com/declanblanc/">
        <img src="../assets/socials/GitHub.svg" width="24" height="24" />
      </a>
      <a href="https://www.twitter.com/declanblanc">
        <img src="../assets/socials/twitter.png" width="24" height="24" />
      </a>
      <!-- <a href="declanblanc@gmail.com" class="light">
        <img src="../assets/socials/mail_b.png" width="24" height="24" />
      </a> -->
      <a href="mailto:declanblanc@gmail.com" class="dark">
        <img src="../assets/socials/mail_w.png" width="24" height="24" />
      </a>
    </h2>
    <h3>
      You’ve successfully navigated to my portfolio page! This site was created
      using
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  /* top: 10px; */
}

#bio {
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: center;
}
.socials a {
  padding: 16px;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .socials {
    justify-content: left;
  }

  #bio {
    text-align: left;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
