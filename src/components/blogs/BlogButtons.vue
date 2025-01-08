<script></script>

<template>
  <div>
    <a href="">
      <img class="heart-empty" src="../../assets/heart-icon.png" width="26px" />
    </a>
    <a href="">
      <img
        class="heart-full"
        src="../../assets/heart-icon-full.png"
        width="26px"
      />
    </a>
  </div>
</template>

<style scoped>
div {
  width: 800px;
  display: flex;
  justify-content: right;
}
.heart-full {
  display: none;
}

.heart-empty {
  /* display: none; */
}
</style>
