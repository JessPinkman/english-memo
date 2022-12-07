<template>
  <RouterLink class="px-4 rounded-full hover:bg-black hover:text-white" :to="to"
    ><slot
  /></RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
