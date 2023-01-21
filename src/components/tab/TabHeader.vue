<template>
  <li class="mr-2">
    <strong
      aria-current="page"
      class="inline-block px-4 py-2 rounded-t-lg text-xl w-30 text-sec bg-cta"
      :class="style"
      @click="emit('tab-select')"
    >
      {{ label }}
    </strong>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";

const activeStyle = "active";
const inactiveStyle = "hover:contrast-125 contrast-50 cursor-pointer";

const props = defineProps<{
  label: string;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: "tab-select"): void;
}>();

const style = computed(() => (props.isActive ? activeStyle : inactiveStyle));
</script>
