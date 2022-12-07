<template>
  <ul class="flex flex-wrap text-sm font-medium text-center text-shy">
    <TabHeader
      v-for="lesson in lessons"
      :key="lesson[0]?.en ?? 'empty'"
      :label="lesson[0]?.tw ?? 'NEW'"
      :is-active="selected === lesson"
      @tab-select="selected = lesson"
    />
    <TabHeader
      v-if="selected.length !== 0"
      label="+"
      :is-active="false"
      @tab-select="createLesson"
    />
  </ul>
  <div class="container p-6 flex gap-4 flex-col border-2 border-cta">
    <TabRow>
      <template #1>
        <strong class="text-xl text-cta">中文</strong>
      </template>
      <template #2>
        <strong class="text-xl text-cta">English</strong>
      </template>
    </TabRow>
    <TabRow
      v-for="word in selected"
      :key="word.en"
      action-label="DELETE"
      @action="deleteWord(word)"
    >
      <template #1>
        <strong>
          {{ word.tw }}
        </strong>
      </template>
      <template #2>
        <div>
          {{ word.en }}
        </div>
      </template>
    </TabRow>
    <hr />
    <TabRow :is-disabled="!isValid" action-label="ADD" @action="submitAdd">
      <template #1>
        <input v-model="newTw" type="text" name="tw" class="text-black" />
      </template>
      <template #2>
        <input v-model="newEn" type="text" name="en" class="text-black" />
      </template>
    </TabRow>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue";
import useLessons from "../../composables/use-lessons";
import { Word } from "../../types";
import TabHeader from "./TabHeader.vue";
import TabRow from "./TabRow.vue";

const { lessons } = useLessons();
const newEn = ref("");
const newTw = ref("");
const twRegex = /[\u3400-\u9FBF]/;
const isValid = computed(
  () =>
    newEn.value !== "" &&
    !twRegex.test(newEn.value) &&
    newTw.value !== "" &&
    twRegex.test(newTw.value)
);

const selected = ref<Word[]>(lessons[lessons.length - 1]);

const createLesson = () => {
  const newLesson: Word[] = [];
  lessons.push(newLesson);
  selected.value = newLesson;
};
const submitAdd = () => {
  selected.value?.push({
    en: newEn.value.trim(),
    tw: newTw.value.trim(),
  });
  newEn.value = "";
  newTw.value = "";
};
const deleteWord = (word: Word) => {
  if (confirm("Are you sure ?")) {
    selected.value.splice(selected.value.indexOf(word), 1);
  }
};

watchEffect(() => {
  const emptyIndex = lessons.findIndex(
    (l) => l !== selected.value && l.length === 0
  );
  if (emptyIndex > -1) {
    lessons.splice(emptyIndex, 1);
  }
});
watch(selected, () => {
  newEn.value = "";
  newTw.value = "";
});
</script>

<style scoped></style>
