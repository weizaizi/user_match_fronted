<script setup lang="ts">
import {ref} from 'vue';
import router from "./config/Routers.ts";

let lastActive = '';
const active = ref("home");
const onClickLeft = () => {
  history.back();
  active.value = lastActive;
};
const onClickRight = () => {
  lastActive = active.value;
  active.value = "";
  router.push('/search');
};
</script>

<template>
  <van-nav-bar
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <div id="content">
  </div>

  <router-view/>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home" to="/home">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team" to="/team">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="person" to="/person">个人</van-tabbar-item>
  </van-tabbar>


</template>

<style scoped>
</style>
