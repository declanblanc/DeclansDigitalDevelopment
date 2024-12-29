<template>
  <div id="about-me" class="about">
    <h2>👋 Hey</h2>
    <strong>Thanks for checking out my website!</strong>
    <br />
    <p>
      <br />
      My name is <strong>Declan Blanchard</strong>, a passionate and driven
      <strong>Computer Science</strong> student at NJIT 🏫 I’ve immersed myself
      in coding 💻, community engagement, and leadership roles, blending
      technical expertise with a human-centered approach.
    </p>
    <p>
      I thrive on tackling complex challenges 🛠️, whether it's building a
      compiler, developing Chrome extensions, or leading community initiatives
      like <strong>campus resource mapping</strong> to improve student life.
      With experience in frontend and backend development, I aim to create
      software that not only works but enhances the user experience.
    </p>

    <div class="ab-group">
      <img src="../assets/senate.png" width="300px" height="375px" />

      <p>
        Beyond the keyboard, I enjoy being a part of my community! <br />
        I am currently
        <strong>Executive Board Marketing Chair</strong> for the
        <strong>Off-Campus Commuter Association</strong> 🚗 and a member of
        <strong>The Student Senate Committee for Student Affairs</strong> 🎓.
      </p>
    </div>
    <p>
      When I’m not coding, you can find me in the gym 🏋️‍♂️, playing video games
      🎮, connecting with friends 👬🏼, or spending quality time with my
      girlfriend and our two cats 🐾❤️. To find out more about what I've been up
      to, check out my <RouterLink to="/blog">Blog Page</RouterLink>!
    </p>
    <br />
    <p id="details">
      You can view the GitHub repository for this project
      <a href="https://github.com/declanblanc/DeclansDigitalDevelopment">here</a
      >. <br /><br />
      If you have any questions or you're interested in working together, feel
      free to
      <a href="mailto:declanblanc@gmail.com">email me</a>, message me on
      <a href="https://www.linkedin.com/in/declanblanc/">LinkedIn</a>, or
      contact me via Discord <code>@declanblanc</code>
    </p>
  </div>
</template>

<style scoped>
code {
  color: aqua;
}
a {
  color: aqua;
  text-decoration: underline;
}
p {
  margin: 0.25rem;
}
strong {
  color: rgb(205, 205, 205);
}
.ab-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
}
#details {
  width: 50vw;
  color: rgb(100, 100, 100);
  text-align: center;
}
.ab-group p {
  margin: 0 1rem;
}
.about {
  text-align: justify;
  min-height: 80vh;
  /* width: 50vw; */
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 1150px) {
  .about {
    width: 850px;
  }
  .ab-group {
    width: 850px;
    flex-direction: row;
  }
  #details {
    width: 550px;
  }
}

@media (max-width: 650px) {
  .about {
    width: 80vw;
  }
}
</style>
