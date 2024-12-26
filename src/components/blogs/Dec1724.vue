<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 id="blog-">
    First Blog Post <br />
    12/17/24
  </h1>
  <hr />
  <p>
    Good morning! It is 10:30am on December 17th 2024 as this writing begins -
    the first post on my website!
  </p>
  <h2 id="this-website">This Website</h2>
  <p>
    This website is hopefully going to evolve into something of a “homepage for
    my career”.
  </p>
  <p>
    Think of it as a more personal resumé or portfolio that not only exhibits my
    skills and projects but also highlights who I am as a person.
  </p>
  <p>
    The goal of this blog is not to gather an audience, but rather to create a
    space to talk about the things I’m working on, share progress in my career
    and education, or simply express thoughts and ideas.
  </p>
  <p>
    Outside of putting content on the blog page, I would also like to learn how
    I can better display my projects. I think I will first attempt to tackle
    embedding my Numerical Integration Calculator project so that it can be used
    from this site. I imagine it won’t be too difficult but those are typically
    some famous last words so we shall see! [You can check it out now on the
    <RouterLink to="/projects">Projects Page!</RouterLink>]
  </p>
  <h2 id="school">School</h2>
  <p>
    My first semester at NJIT is coming to a close! My last final is tomorrow
    afternoon and I am already looking forward to the classes that lie ahead.
    All of which are more focused on Computer Science rather than general
    education requirements.
  </p>
  <p>Some highlights from this semester include:</p>
  <ul>
    <li>
      <code>CS280 - Programming Language Concepts</code>
      <ul>
        <li>
          This course really challenged what understanding I thought I had of
          programming. We were left to our own devices to learn C++ as we
          navigated weekly coding assignments on top of a semester-long project
          that had us creating a Lexical Analyzer, Parser, and Interpreter for
          our own “Mini C-Like” programming language.
        </li>
      </ul>
    </li>
    <li>
      <code>IT202 - Internet Applications</code>
      <ul>
        <li>
          I would describe this course as a full-stack web development crash
          course. You begin by learning the basics of HTML and CSS, then you’re
          quickly introduced to Javascript, PHP, and SQL. On top of weekly
          participation assignments (small programming challenges) throughout
          the semester we created a fully functional website for a plumbing
          company that allows users to log in to their “Plumber Account”, manage
          customers, book appointments, and more.
        </li>
        <li>
          I was far more comfortable with this course when compared to CS280.
          For many of my classmates, this was their first time working with web
          development, while I was fortunate to have already worked on some web
          development in my own free time.
        </li>
      </ul>
    </li>
    <li>
      <code>COM312 - Oral Presentations</code>
      <ul>
        <li>
          While not directly related to computer science I still greatly
          appreciated this course as well as the professor who taught it, Laura
          Stanik. At first glance many students might think this course will be
          another general education “filler course”, and it very well could have
          been if not for the guidance of Professor Stanik. The importance of
          public speaking and presentation skills can be found regardless of
          what career you pursue and I believe this class provided a rock solid
          foundation for those skills.
        </li>
      </ul>
    </li>
    <li>
      <code>Student Senate Committee for Student Affairs</code>
      <ul>
        <li>
          When I transferred to NJIT I knew I wanted to get involved but I was
          unsure where to begin. I was lucky enough to befriend a classmate is a
          member of the Student Senate and encouraged me to get involved. I
          didn’t know what to expect going into it but I immediately fell in
          love with it. The core of the Student Affairs committee is a team of
          students who want to make life at NJIT better for their peers and
          future generations of students to come.
        </li>
      </ul>
    </li>
  </ul>
  <p>
    I wish I could say it was time to sit back enjoy winter break but I’ve
    decided to keep up my positive momentum and take
    <code>CS301 - Introduction to Data Science</code> during the winter
    semester. It will be my first time taking a winter course and while it is a
    bit intimidating but I’m confident I can get the work done.
  </p>
</template>
<style scoped>
h1,
h2,
h3 {
  text-align: center;
}

a {
  text-decoration: underline;
  color: rgb(111, 111, 111);
}
</style>
