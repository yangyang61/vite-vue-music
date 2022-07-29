import request from "../utils/request";

// 首页 - 推荐歌单
export const recommendMusic = (params: any) =>
  request({
    url: "/personalized",
    params,
    method: "GET",
  });

// 推荐新音乐
export const newSong = (params: any) =>
  request({
    url: "/personalized/newsong",
    params,
    method: "GET",
  });

// 热搜关键字
export const hotSearch = () =>
  request({
    url: "/search/hot",
    method: "GET",
  });

// 搜索结果列表
export const searchResult = (params: any) =>
  request({
    url: "/cloudsearch",
    params,
    method: "GET",
  });

// 播放 - 获取歌曲详情
export const getSongById = (params: any) =>
  request({
    url: `/song/detail`,
    params,
    method: "GET",
  });

// 播放 - 获取歌词
export const getLyricById = (params: any) =>
  request({
    url: `/lyric`,
    params,
    method: "GET",
  });
