<template>
  <div id="about-me" class="about">
    <h2>👋 About Me</h2>
    <p>
      <strong>Thank you so much for checking out my website!</strong> <br />
      My name is <strong>Declan Blanchard</strong>, a passionate and driven
      <strong>Computer Science</strong> student at NJIT 🏫 I’ve immersed myself
      in coding 💻, community engagement, and leadership roles, blending
      technical expertise with a human-centered approach.
    </p>
    <p>
      I thrive on tackling complex challenges 🛠️, whether it's building a
      compiler, developing Chrome extensions, or leading community initiatives
      like <strong>campus resource mapping</strong> to improve student life.
      With experience in <code>React</code>, <code>Vue</code>, and
      <code>C++</code>, I aim to create software that not only works but
      enhances the user experience.
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
      girlfriend and our two cats 🐾❤️.
    </p>
  </div>
</template>

<style scoped>
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

.ab-group p {
  margin: 0 1rem;
}
.about {
  text-align: center;
  min-height: 80vh;
  /* width: 50vw; */
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 1150px) {
  .about {
    width: 550px;
  }
  .ab-group {
    width: 650px;
    flex-direction: row;
  }
}

@media (max-width: 650px) {
  .about {
    width: 80vw;
  }
}
</style>
