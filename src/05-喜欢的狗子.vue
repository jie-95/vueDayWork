<template>
  <div style="display: flex;">
    <div class="dog">
      <ManyDog
        v-for="(item, index) in arr"
        :key="index"
        :url="item.dogImgUrl"
        :name="item.dogName"
        v-on:dlike="Ylike"
      />
    </div>
    <div>
      <h2>喜欢的狗子： {{ likeDog }}</h2>
    </div>
  </div>
</template>

<script>
import ManyDog from "./components/ManyDog.vue";
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mwpet.com%2Fuploads%2Fallimg%2F180118%2F1-1P11Q61409493.jpg&refer=http%3A%2F%2Fwww.mwpet.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660619767&t=34326b6169153db7a15fd62f324ef37b",

          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff4%2F00%2F01%2Ff40001337745b0c323a15b1fd40549a0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660619795&t=81134df3ce3aee5e85c83e1ce805a931",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://img2.baidu.com/it/u=2671356588,3149683866&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=2868473159,2341938328&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=379",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=2918806275,269922383&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          dogName: "萨摩耶",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mwpet.com%2Fuploads%2Fallimg%2F180118%2F1-1P11Q61409493.jpg&refer=http%3A%2F%2Fwww.mwpet.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660619767&t=34326b6169153db7a15fd62f324ef37b",

          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff4%2F00%2F01%2Ff40001337745b0c323a15b1fd40549a0.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660619795&t=81134df3ce3aee5e85c83e1ce805a931",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://img2.baidu.com/it/u=2671356588,3149683866&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=2868473159,2341938328&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=379",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=2918806275,269922383&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          dogName: "萨摩耶",
        },
      ],
      likeDog: "",
    };
    /* {
        dogImgUrl:
        "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
        dogName: "博美",
        }, */
  },
  components: {
    ManyDog,
  },
  methods: {
    Ylike(val) {
      this.likeDog += `${val} `;
    },
  },
};
</script>

<style>
.dog {
    display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  border: 1px solid #000;
  width: 1300px;
}
    h2 {
     border: 1px solid #000;
      width: 200px;
    }
</style>
