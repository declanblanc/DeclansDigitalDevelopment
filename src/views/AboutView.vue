<template>
  <div id="about-me" class="about">
    <h2>👋 About Me</h2>
    <p>
      Hi, I'm <strong>Declan Blanchard</strong>, a passionate and driven
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
        Beyond the keyboard, I actively contribute to the NJIT community as the
        <strong>Executive Board Marketing Chair</strong> for the
        <strong>Off-Campus Commuter Association</strong> 🚗 and a member of the
        <strong>Student Senate Committee for Student Affairs</strong> 🎓. These
        roles reflect my commitment to making an impact both in and out of the
        classroom.
      </p>
    </div>
    <p>
      When I’m not coding, you can find me in the gym 🏋️‍♂️, playing video games
      🎮, connecting with friends 👬🏼, or spending quality time with my
      girlfriend and our two cats 🐾❤️.
    </p>
  </div>
</template>

<style>
.ab-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
}

.ab-group p {
  margin: 0 1rem;
}
.about {
  text-align: center;
  min-height: 80vh;
  width: 50vw;
  display: flex;
  align-items: center;

  flex-direction: column;
}

/* I need to make changes when the display width is below 650px */
@media (max-width: 650px) {
  .about {
    width: 80vw;
  }
  .ab-group {
    flex-direction: column;
  }
}
</style>
