<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  name: String,
  author: String,
  id: Number,
});

const playFn = () => {
  router.push({
    path: "/play",
    query: { id: props.id },
  });
};
</script>
<template>
  <van-cell center :title="name" :label="author + ' - ' + name">
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.6rem" @click="playFn" />
    </template>
  </van-cell>
</template>
