<template>
  <div class="bg-white text-black px-20 py-4 flex flex-row justify-between">
    <div>English memo</div>
    <div class="flex flex-row gap-4">
      <HeaderLink to="/store">STORE</HeaderLink>
      <HeaderLink to="/test">TEST</HeaderLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue";
</script>
