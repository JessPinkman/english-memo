<template>
  <ol class="col-span-2 border-sec border-2 px-8 py-4 rounded-md list-decimal">
    <li
      v-for="item in tests"
      :key="item.word.en"
      :class="getClass(item.success)"
    >
      <template v-if="item.attempts > 0">
        {{ item.word.tw }}
      </template>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { Test } from "../../types";

defineProps<{
  tests: Test[];
}>();

const getClass = (success: number) => {
  switch (success) {
    case 0:
      return "text-alert";
    case 1:
      return "text-black";
    default:
      return "text-success";
  }
};
</script>
