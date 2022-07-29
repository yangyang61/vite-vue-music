<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { hotSearch, searchResult } from "../../api";

const themeVars = {};
const value = ref<number | string>();
const searchResList = ref<any>([]);
const hotSearchList = ref<any>([]);
const timerId = ref<any>(null);

const setValue = (val: number | string) => {
  value.value = val;
};
const handleSearch = async () => {
  const res = await searchResult({ type: 1, keywords: value.value });
  if (res.status === 200) {
    searchResList.value = res.data.result.songs;
  }
};
onMounted(async () => {
  const res = await hotSearch();
  if (res.status === 200) {
    hotSearchList.value = res.data.result.hots;
  }
});
watch(value, async () => {
  if (!value.value) return (searchResList.value = []);
  if (timerId.value) {
    clearTimeout(timerId.value);
    timerId.value = null;
    return;
  }
  timerId.value = setTimeout(() => {
    handleSearch();
  }, 500);
});
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <van-search shape="round" placeholder="搜索" @search="handleSearch" v-model="value" />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="searchResList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          v-for="(item, index) in hotSearchList"
          :key="index"
          @click="setValue(item.first)"
          class="hot_item"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="item in searchResList"
        :key="item.id"
        :name="item.name"
        :id="item.id"
        :author="item.ar[0].name"
      />
    </div>
  </van-config-provider>
</template>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
