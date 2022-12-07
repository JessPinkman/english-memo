<template>
  <div class="bg-prim min-h-screen min-w-screen flex flex-col gap-4 text-sec">
    <div class="header">
      <LayoutHeader />
    </div>
    <main class="flex-1 flex flex-row gap-4">
      <div class="flex-1 p-4">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "./LayoutHeader.vue";
</script>
