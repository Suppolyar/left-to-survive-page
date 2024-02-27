<template>
  <div :class="setCurrentBlockSize()" class="bg-center bg-no-repeat font-medium">
    <div class="px-10 py-6">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "max-w-[434px] card-medium bg-card-medium text-base";
    case "large":
      return "max-w-[538px] card-large bg-card-large";
  }
};
</script>

<style scoped></style>