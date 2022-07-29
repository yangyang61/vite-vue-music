<script setup lang="ts">
import { onMounted, ref } from "vue";
import { newSong, recommendMusic } from "../../api/index";

const themeVars = {
  cellTextColor: "black",
};

const recommendList = ref<any>([]);
const newSongs = ref<any>([]);

onMounted(async () => {
  const res = await recommendMusic({ limit: 6 });
  if (res.data.code === 200) {
    recommendList.value = res.data.result;
  }
  const data = await newSong({ limit: 20 });
  if (res.data.code === 200) {
    newSongs.value = data.data.result;
  }
});
</script>
<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="container">
      <!-- 推荐歌单 -->
      <p class="title">推荐歌单</p>
      <van-row gutter="10">
        <van-col span="8" v-for="item in recommendList" :key="item.id">
          <van-image width="100%" :src="item.picUrl" />
          <p class="song_name">{{ item?.name }}</p>
        </van-col>
      </van-row>
      <!-- 最新音乐 -->
      <p class="title">最新音乐</p>
      <van-cell-group>
        <SongItem
          v-for="item in newSongs"
          :key="item.id"
          :name="item.name"
          :id="item.id"
          :author="item.song.artists[0].name"
        />
      </van-cell-group>
    </div>
  </van-config-provider>
</template>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.search-icon {
  font-size: 24px;
  line-height: inherit;
}
</style>
