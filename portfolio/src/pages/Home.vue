<script setup lang="ts"></script>

<template>
  <main id="main">
    <h2 id="beschriftung">
      Maximilian Uhlig <br />
      IA7 WS2324<br />
      Barrierefreies Design
    </h2>
    <img
      id="blindPic"
      class="pic"
      width="600px"
      height="auto"
      alt=""
      src="../../content/blinder_blob.svg"
    />
    <img
      id="googlePic"
      class="pic"
      width="400px"
      height="auto"
      alt=""
      src="../../content/sehschwächen_blob.svg"
    />
    <img
      id="deafPic"
      class="pic"
      width="400px"
      height="auto"
      alt=""
      src="../../content/tauber_blob.svg"
    />
  </main>
</template>

<style scoped>
.pic {
  width: 27vw;
}

#blindPic {
  position: absolute;
  top: 10vh;
}

#googlePic {
  position: absolute;
  right: 0;
  top: 10vh;
}

#deafPic {
  position: absolute;
  bottom: 0;
  left: 300px;
}

main {
  overflow: hidden;
  height: 90vh;
}
#beschriftung {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
