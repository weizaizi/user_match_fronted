<script setup lang="ts">
import {Toast} from "vant";
import {ref} from 'vue';
import Home from "./components/Home.vue";
import Team from "./components/Team.vue";
import Person from "./components/Person.vue";

const active = ref("home");
const onClickLeft = () => history.back();
const onClickRight = () => Toast('按钮');
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
    <template v-if="active === 'home'">
      <Home/>
    </template>
    <template v-if="active === 'team'">
      <Team/>
    </template>
    <template v-if="active === 'person'">
      <Person/>
    </template>
  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="person">个人</van-tabbar-item>
  </van-tabbar>


</template>

<style scoped>
</style>
