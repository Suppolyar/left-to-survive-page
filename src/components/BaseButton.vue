<template>
  <button
    @click="onBtnClick"
    class="bg-center bg-btn-bg btn-bg bg-no-repeat py-10 px-24 text-[40px] my-4 uppercase hover:scale-105 transition duration-150"
  >
    <span class="custom-button"> Скачать</span>
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton"
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "0.2002134",
    "https://static.gc.my.games/LeftToSurviveLoader.exe"
  );
};
</script>

<style lang="scss" scoped>
.custom-button {
  background: linear-gradient(180.00deg, rgb(245, 245, 245), rgb(209, 167, 141));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 900;
}
</style>
