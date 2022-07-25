<template>
  <div  class="songList">
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <!-- <van-cell-group v-for="item in reList" :key="item.id">
      <van-cell 
      :title="item.name" 
      center 
      :label="`${item.song && item.song.artists[0] && item.song.artists && item.song.artists[0].name}-${item.name}`">
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.6rem" />
        </template>
      </van-cell>
    </van-cell-group> -->
    <SongItem
    v-for="item in reList" 
    :key="item.id"
    :name="item.name"
    :author="item.song.artists[0].name"
    :id= "item.id"
    ></SongItem>
   
  </div>
</template>

<script>
import { recommendSongListApi, newSongListApi } from "@/api";

import SongItem from '@/components/SongItem.vue';
export default {
  name: "MusicDemoIndex",
  data() {
    return {
      list: [],
      reList: [],
    };
  },
  components:{
    SongItem,
  
  },
  /*  mounted() {
    recommendSongListApi({
      limit: 6,
    }).then((res) => {
      console.log(res);
      this.list = res.data.result
      console.log(this.list);
    });
  }, */
  mounted() {
    this.getRommendSongList();
    this.getnewSongList();
  },
  methods: {
    async getRommendSongList() {
      try {
        const res = await recommendSongListApi({
          limit: 6,
        });
        // console.log(res);
        this.list = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    async getnewSongList() {
      try {
        const res = await newSongListApi({
          limit: 20,
        });
        this.reList = res.data.result;
        console.log(this.reList);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

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
.songList {
  margin-bottom: 50px;
}
</style>