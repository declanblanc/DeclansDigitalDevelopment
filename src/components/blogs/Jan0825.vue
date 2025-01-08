<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="blog-container">
    <h1 id="blog-">
      Tech Tour <br />
      01/08/25
    </h1>
    <hr />
    <p>
      I thought it would be fun to do a quick post talking about my tech so this
      will be a setup tour as well as a small peek into some of the background
      of how I found myself tinkering with computers in the first place.
    </p>
    <img src="../../assets/desk.png" />
    <p>
      The first thing people notice about my current setup is the split
      keyboard. It also happens to be my most recent addition to my desk. I
      first discovered ergonomic keyboards from
      <a href="https://youtu.be/pK41Mr4Kdd0">this YouTube video</a> and I was
      instantly in love with the idea. I got a ZSA Voyager in early December and
      have been loving it since.
    </p>
    <p>
      My other way-too-expensive piece of tech is absolutely my monitor. The
      <a
        href="https://www.dell.com/en-us/shop/alienware-34-curved-qd-oled-gaming-monitor-aw3423dwf/apd/210-bfrp/monitors-monitor-accessories"
        >Alienware AW3423DWF</a
      >
      is a beauty and one of my most impulsive purchases probably of all time.
      That’s not to say I didn’t do my research. I’m a sucker for spending days
      on end obsessing over tech research whether it’s a fancy $700 gaming
      monitor, or a new refrigerator, I make it my mission to find the best bang
      for my buck.
    </p>
    <p>
      Speaking of bang for your buck, I built my first computer in 2013 when I
      was just 14 years old and a freshman in high school. I had some friends I
      liked to play Minecraft with and they convinced me building it yourself
      was the way to go (especially considering my limited budget as a 14 year
      old). So after ordering all the parts, and weeks of troubleshooting faulty
      ram, I finally had my first gaming PC up and running.
    </p>
    <p>
      A keen eye (or... maybe any eye) may have noticed there’s no PC in the
      photo above. Had this photo been taken about 6 months ago there would’ve
      been a very shiny glowing in-your-face RGB ram gaming PC under the desk.
      However I very recently made the switch from PC to Mac and to my own
      surprise I only have good things to say. I was someone who resisted the
      change and often insisted that PC was the way to go. Despite my strong
      opinions, I had never really given Apple a chance. I’m fairly turned-off
      by the “walled garden” of the Apple ecosystem but when I began attending
      NJIT and I wanted something to bring to school everyday, the Macbook Air
      M3 didn’t have much competition in terms of battery life and performance.
      I quickly found myself using my Macbook in favor of my PC (unless of
      course for gaming).
    </p>
    <p>
      I primarily keep my gaming PC hooked up to my television for the
      occasional opportunity to chill on the couch with a controller in hand.
      (Lately I’ve been playing replaying Portal 2 and going for 100%
      achievements in Stardew Valley).
    </p>
    <img src="../../assets/couch.png" />
    <p>
      The hardware in my computer is by no means the latest or the greatest,
      more of an “Ol’ Reliable” than anything else. Since putting everything
      together in 2017, the only parts I’ve upgraded are the GPU and the RAM.
      I’m happy to say I still boast solid and consistent FPS when I do boot up
      more competitive games.
    </p>
    <p>
      I honestly expected I would have a lot more to ramble about in this post
      but I think for now I’ve covered everything I can think of.
    </p>
    <p>Thanks for reading!</p>
  </div>
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
