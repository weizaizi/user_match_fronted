<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const userEdit = ref({
  editKey: route.query.editKey as string,
  editName: route.query.editName as string,
  currentValue: route.query.currentValue as string,
})

const onSubmit = (values: any) => {
  console.log('submit', values);
}
</script>

<template>
  <van-form @submit="onSubmit(userEdit.currentValue)">
    <van-field v-model="userEdit.currentValue" :name="userEdit.editKey"
               :label="userEdit.editName"
               :placeholder="`请输入${userEdit.editName}`"/>
  </van-form>
  <van-button type="primary" native-type="submit" round block>
    提交
  </van-button>
</template>

<style scoped>

</style>
