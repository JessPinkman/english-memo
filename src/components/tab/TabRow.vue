<template>
  <div class="flex flex-row gap-2 text-lg items-center max-w-screen-md">
    <div class="flex-1 text-center">
      <slot name="1" />
    </div>
    <div class="flex-1 text-center">
      <slot name="2" />
    </div>
    <div class="w-36">
      <ButtonBlock
        v-if="actionLabel"
        class="w-full"
        :disabled="isDisabled"
        @click="emit('action')"
        >{{ actionLabel }}</ButtonBlock
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBlock from "../ButtonBlock.vue";

defineProps<{
  actionLabel?: string;
  isDisabled?: boolean;
}>();
const emit = defineEmits<{
  (e: "action"): void;
}>();
</script>

<style scoped></style>
