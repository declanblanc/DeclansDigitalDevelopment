<template>
  <div class="proj-container">
    <div class="proj-title">Web Based Numerical Integration Calculator</div>
    <div class="proj-desc">
      <p>
        When I was attending Raritan Valley Community College taking Calculus 2
        the legendary Professor Nikitovic challenged those of us pursuing
        degrees in computer science to make a simple program that would perform
        any one of the numerical integration methods that we had learned thus
        far. I was motivated enough by the fact that we were promised extra
        credit for completing this task, and I was doubly motivated by what I
        saw as an opportunity to go above and beyond and make something outside
        of my comfort zone.
      </p>
      <p>
        This project uses vanilla HTML, CSS, and Javascript and was my first
        time doing any sort of web development. I taught myself using videos
        from
        <a href="https://www.youtube.com/channel/UC4SVo0Ue36XCfOyb5Lh1viQ"
          >Bro Code</a
        >
        on YouTube and was proud to present the results to my professor.
      </p>
    </div>
    <div class="site-container">
      <embed
        src="https://declanblanc.github.io/numInt/"
        id="numIntEmbed"
        class="site-embed"
      />
    </div>
  </div>
</template>

<style scoped>
.proj-title {
  text-align: left;
  color: white;
  font-weight: 600;
  font-size: 2rem;
}
.proj-container {
  text-align: justify;
  text-justify: inter-cluster;
  border: solid rgb(120, 120, 120) 8px;
  border-radius: 8px;
  width: 80vw;
  padding: 20px 30px;
  margin: 2rem 0;
}
.site-embed {
  height: 800px;
  width: 100%;
}
.site-container {
  border: solid rgb(118, 118, 118) 10px;
  border-radius: 16px;
}
p {
  text-align: center;
}
code {
  color: aqua;
}
a {
  color: aqua;
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .proj-container {
    width: 1000px;
  }
}
</style>
