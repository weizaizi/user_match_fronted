<script setup lang="ts">
const router = useRouter();
import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: 'winter',
  userAccount: 'winter',
  avatarUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.bPL2pJ8S32hp363_5s1hiwHaHa?rs=1&pid=ImgDetMain',
  email: '123456789@qq.com',
  phone: '123456789',
  createTime: new Date()
}

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<template>
  <van-cell title="昵称" is-link :value="user.username" to="/user/edit"
            @click="toEdit('username','昵称' , user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link :value="user.avatarUrl" to="/user/edit"
            @click="toEdit('avatarUrl','头像' , user.avatarUrl)">
    <img :src="user.avatarUrl" alt="图片无法加载" height="40"/>
  </van-cell>

  <van-cell title="邮箱" is-link :value="user.email" to="/user/edit" @click="toEdit('email' , '邮箱' , user.email)"/>
  <van-cell title="手机号" is-link :value="user.phone" to="/user/edit"
            @click="toEdit('phone' , '手机号' ,user.phone)"/>
  <van-cell title="创建时间" :value="user.createTime.toISOString()"/>
</template>

<style scoped>

</style>
