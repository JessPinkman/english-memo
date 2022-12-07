<template>
  <div v-if="!isTest" class="container">
    <div>
      <div v-for="(lesson, i) in lessons" :key="i">
        <ButtonBlock @click="toggleLesson(lesson)">{{
          lesson[0].tw
        }}</ButtonBlock>
        <div
          v-for="word in lesson"
          :key="word.en"
          class="flex flex-row gap-4 items-center mb-1 pl-8"
        >
          <input
            type="checkbox"
            :value="word"
            :checked="isActive(word)"
            @change="toggleWord(word)"
          />
          <label>{{ word.en }} : {{ word.tw }}</label>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <ButtonBlock :disabled="testWords.length === 0" @click="isTest = true"
        >START</ButtonBlock
      >
    </div>
  </div>
  <FullTest v-else :words="testWords" @test-finish="isTest = false" />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import ButtonBlock from "../components/ButtonBlock.vue";
import FullTest from "../components/test/FullTest.vue";
import useLessons from "../composables/use-lessons";
import { Word } from "../types";

const { lessons } = useLessons();
const testWords = reactive<Word[]>([]);

const isTest = ref(false);

const toggleLesson = (lesson: Word[]) => {
  const allSelected = lesson.every(isActive);
  if (!allSelected) {
    lesson.forEach((word) => {
      const index = testWords.findIndex(
        (w) => w.en === word.en && w.tw === word.tw
      );
      index === -1 && testWords.push(word);
    });
  } else {
    lesson.forEach((word) => {
      const index = testWords.findIndex(
        (w) => w.en === word.en && w.tw === word.tw
      );
      index > -1 && testWords.splice(index, 1);
    });
  }
};

const isActive = (word: Word) => {
  return testWords.some((test) => test.en === word.en && test.tw === word.tw);
};

const toggleWord = (word: Word) => {
  const index = testWords.findIndex(
    (w) => w.en === word.en && w.tw === word.tw
  );
  index > -1 ? testWords.splice(index, 1) : testWords.push(word);
};
</script>
<style scoped></style>
