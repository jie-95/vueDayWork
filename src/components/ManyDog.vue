<template>
  <div >
    <div >
      <img :src="url" alt="" />
      <p :style="{ backgroundColor: colorRadom}" @click="btn">{{ name }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["url", "name"],
  data() {
    return {
      colorRadom: "",
      
    };
  },
  methods: {
    btn() {
    //   console.log(123);
      this.colorRadom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    //   console.log(this.name);
        this.$emit("dlike", this.name)
      
    },
  },
};
</script>

<style>
.like {
    float: right;

}

img {
  width: 300px;
  height: 300px;
  margin-left:20px
}
p{
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
</style>
