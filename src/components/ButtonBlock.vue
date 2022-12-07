<template>
  <button
    :class="`${colors} font-bold py-2 px-4 rounded cursor-pointer disabled:bg-shy hover:contrast-125`"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "cta" | "success" | "warn" | "alert";
  }>(),
  {
    variant: "cta",
  }
);
const colors = computed(() => {
  switch (props.variant) {
    case "cta":
      return "bg-cta text-white";
    default:
      return "bg-alert text-white";
  }
});
</script>
