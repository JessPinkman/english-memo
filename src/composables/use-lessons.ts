import { reactive, watchEffect } from "vue";
import { Word } from "../types";

const fromLocalStorage = localStorage.getItem("lessons");

const original =
  !!fromLocalStorage && (JSON.parse(fromLocalStorage) as Word[][]);

const lessons = reactive<Word[][]>(
  original && original.length ? original : [[]]
);

const useLessons = () => {
  return { lessons };
};

watchEffect(() => localStorage.setItem("lessons", JSON.stringify(lessons)));

export default useLessons;
