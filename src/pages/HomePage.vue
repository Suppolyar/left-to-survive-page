<template>
  <div class="flex flex-col overflow-hidden ">
    <div
      class="relative logo-screen:h-full h-screen w-screen overflow-hidden bg-lts-bg bg-cover bg-center bg-no-repeat"
    >
      <MyGamesLogo class="absolute right-[80px] top-[80px]" />
      <div
        class="flex h-full flex-col items-center justify-center gap-5 py-16 text-lg 2xl:gap-4"
      >
        <MainLogo />

        <BaseButton />

        <InfoBlock size="medium" class="text-black text-base">
          Скачивая MY.GAMES Launcher вы соглашаетесь с
          передачей
          ваших данных компании MY.GAMES B.V. и их обработкой согласно
          <a class="hover:underline" href="https://documentation.my.games/terms/mygames_privacy" target="_blank">Политике
            конфиденциальности </a>
          портала MY.GAMES
        </InfoBlock>
      </div>
    </div>
    <BaseFooter class="w-full" />
  </div>

</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import MainLogo from "../assets/main-logo.vue";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import MyGamesLogo from "../assets/my-games-logo.vue";
import BaseFooter from "../components/footer/BaseFooter.vue";

const title = useTitle();
title.value = "Left to Survive";

</script>

<style scoped></style>
