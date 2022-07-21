<template>
  <div>
    <MyHeader title="MyTabBar"></MyHeader>
    <div class="main" style="margin-top: 45px">
      <component :is="comName"> </component>
    </div>
    <MyTable></MyTable>
    <MyTabBar :list="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyTable from "./components/MyTable.vue";
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import UserInfo from './views/UserInfo.vue';
export default {
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      comName:"MyGoodsList",
      
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyTable,
    MyGoodsList,
    MyGoodsSearch,
    UserInfo,
  },
 
};
</script>

<style>
</style>