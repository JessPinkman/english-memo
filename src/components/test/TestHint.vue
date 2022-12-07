<template>
  <div v-for="(letter, i) in test.word.en" :key="i">
    <div :class="getClass(i)" class="text-bold">_</div>
  </div>
</template>

<script setup lang="ts">
import { Test } from "../../types";

const props = defineProps<{
  test: Test;
  input: string;
}>();

const getClass = (i: number) => {
  const inputLetter = props.input.charAt(i).toLowerCase();
  const answerLetter = props.test.word.en.charAt(i).toLowerCase();
  switch (true) {
    case !inputLetter:
      return "text-black";
    case answerLetter === inputLetter:
      return "text-success";
    default:
      return "text-alert";
  }
};
</script>
