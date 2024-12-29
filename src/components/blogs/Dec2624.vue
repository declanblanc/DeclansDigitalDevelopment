<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="blog-container">
    <h1 id="blog-">
      A Semester's Success <br />
      12/26/24
    </h1>
    <hr />
    <p>Good morning!</p>
    <p>
      Today is December 26th 2024 so I would like to start this post by saying
      happy holidays! I’m fortunate enough to have spent the last few days with
      family and loved ones, and I am even still looking forward to celebrating
      Hanukkah with my girlfriend and her family. I hope your holiday season has
      been just as enjoyable!
    </p>
    <div class="img-container">
      <img src="../../../public/me-xmas@0.25x.png" />
    </div>
    <p>
      I wanted to make this quick post as a final summary to say goodbye to the
      Fall 2024 semester as well as an introduction to my first winter semester.
    </p>
    <p>
      Starting this afternoon, and continuing until the 16th of January I will
      be taking <code>CS301 - Intro to Data Science</code> at NJIT. I’ve already
      taken some time to set things up on my laptop so that I can get straight
      to work. The course uses
      <a href="https://wesmckinney.com/book/"
        >O’Reilly Python for Data Analysis</a
      >
      which is conveniently available online and enabled me to get a pretty nice
      head start on the course’s material. I may do some writing about the
      material as I learn throughout the semester to keep myself sharp.
    </p>
    <p>
      I’m feeling pretty good about the upcoming class considering the good news
      that came out of my first semester at NJIT - final grades have been posted
      and I currently have a 3.7 GPA! I really cannot express how much this
      accomplishment means to me. I am not someone who is naturally gifted nor
      did I have ambitious parents pushing me through the education system. In
      2017, I just barely graduated high school and my GPA was so low that when
      I tell people most of them say “How did you even graduate??!!” After high
      school I worked for a few years doing IT for a physical therapy clinic
      before attending classes at a local community college where I slowly but
      surely found my footing in academia before transferring to NJIT. Fast
      forward to now and I’ve completely 180’d. My high school self would be in
      disbelief! I love school and I love what I’m learning. I’m more motivated
      than ever and my grades reflect my discipline.
    </p>
  </div>
</template>
<style scoped>
h1,
h2,
h3 {
  text-align: center;
}

img {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: underline;
  color: rgb(111, 111, 111);
}

.blog-container {
  text-align: justify;
  text-justify: inter-cluster;
  border: solid rgb(120, 120, 120) 8px;
  border-radius: 8px;
  width: 80vw;
  padding: 20px 30px;
  margin: 2rem 0;
}

@media (min-width: 1024px) {
  .blog-container {
    width: 800px;
  }
  img {
    width: 650px;
  }
}
</style>
