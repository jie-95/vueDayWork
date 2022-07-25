<template>
  <div  class="songList">
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="list.length == 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span 
        class="hot_item" 
        v-for="(item, index) 
        in hotlist" 
        :key="index"
        @click="hotInput(item.first)"
          >{{ item.first }}
        </span>
      </div>
      <!-- 搜索列表 -->
    </div>

    <div v-else>
      <span>
        <van-cell-group>
          <van-cell
            center
            v-for="item in list"
            :key="item.id"
            :title="item.name"
            :label="`${item.ar[0].name}-${item.name}`"
          >
            <template #right-icon>
              <van-icon name="play-circle-o" size="0.6rem" />
            </template>
          </van-cell>
        </van-cell-group>
      </span>
    </div>
  </div>
</template>
<script>
import { searchHotListApi, cloudSearchApi } from "@/api";
export default {
  data() {
    return {
      hotlist: [],
      list: [],
      value: "",
    };
  },
  async mounted() {
    this.getSearchHotList();
    // const list = await this.cloudSearch()
    // console.log("list",list);
  },
  methods: {
    //热门搜索
    async getSearchHotList() {
      try {
        const res = await searchHotListApi();
        // console.log(res);
        this.hotlist = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    //所搜列表
    async cloudSearch() {
      try {
        const res = await cloudSearchApi({
          keywords: this.value,
        });
        return (res.data.result && res.data.result.songs) || [];
      } catch (e) {
        console.log(e);
      }
    },
    //所搜列表展示
    //const timer(),
    // 封装防抖函数
    async inputFn() {
      try {
        this.list = await this.cloudSearch();
        console.log(this.list);
      } catch (e) {
        console.log(e);
      }
      if (this.value == "") {
        this.list = [];
      }
    },
    hotInput(val){
      console.log(val);
      this.value = val;
      this.inputFn()
    }
  },
};
</script>

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

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
.songList {
  margin-bottom: 50px;
}
</style>