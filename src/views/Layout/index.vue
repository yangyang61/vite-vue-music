<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const title = ref(route.meta.title);
watch(route, (route, nextRoute) => {
  title.value = nextRoute.meta.title;
});
</script>
<template>
  <div>
    <van-nav-bar :title="title" fixed />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/layout/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
