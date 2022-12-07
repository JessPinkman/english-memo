<template>
  <div class="grid grid-cols-8">
    <div class="col-span-6">
      <div v-if="current" class="flex flex-row items-center gap-4">
        <div class="w-32">{{ current.word.tw }}</div>
        <input
          v-model="userInput"
          type="text"
          class="text-black"
          @keyup.enter="submit(userInput, current as Test)"
        />
        <ButtonBlock @click="submit(userInput, current as Test)"
          >TRY</ButtonBlock
        >
        <ButtonBlock variant="warn" @click="(current as Test).hasHint = true"
          >HINT</ButtonBlock
        >
        <TestHint v-if="current.hasHint" :test="current" :input="userInput" />
      </div>
    </div>
    <TestResults :tests="tests" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { Test, Word } from "../../types";
import ButtonBlock from "../ButtonBlock.vue";
import TestHint from "./TestHint.vue";
import TestResults from "./TestResults.vue";

const props = defineProps<{
  words: Word[];
}>();

const emit = defineEmits<{
  (e: "test-finish"): void;
}>();

const userInput = ref("");
const tests = reactive<Test[]>(
  props.words.map((word) => ({
    word,
    success: 0,
    attempts: 0,
    hasHint: false,
  }))
);
const incomplete = computed<Test[]>(() => tests.filter((t) => t.success !== 2));

const previous = ref<Test>();

const getNext = () => {
  return (
    incomplete.value.find((r) => r !== previous.value) ??
    previous.value ??
    incomplete.value[0]
  );
};

const current = ref<Test | undefined>(getNext());
const submit = (input: string, test: Test) => {
  const isSuccess = test.word.en.toLowerCase() === input && !test.hasHint;
  test.hasHint = false;
  test.attempts++;
  test.success += isSuccess ? 1 : 0;
  previous.value = test;
  current.value = getNext();
  userInput.value = "";
};
watch(incomplete, (incomplete) => {
  if (incomplete.length === 0) {
    emit("test-finish");
  }
});
</script>
