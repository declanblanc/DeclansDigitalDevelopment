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
    <div id="nameSocial">
      <h1 class="green">{{ msg }}</h1>
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
    </div>
    <hr />
    <p id="bio">
      Software Engineer. <br />
      Passionate about solving problems, delivering solutions, and working with
      others.
    </p>
  </div>
</template>

<style scoped>
hr {
  margin: 5px 0 8px 0;
}
#nameSocial {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  line-height: 1;
  margin: 0;
}

#bio {
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
}
.socials a {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 0;
  padding: 0px 16px;
}

.socials {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -10px;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
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
