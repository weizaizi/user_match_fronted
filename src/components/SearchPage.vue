<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
const onSearch = (val: string) => {
  const tempShowTagList = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(val));
    return tempParentTag;
  })
  showTagList.value = tempShowTagList.filter(item => item.children.length > 0);
};

const onCancel = () => {
  showTagList.value = originTagList;
};

const show = ref(true);


const originTagList = [{
  text: '性别',
  children: [
    {text: '男', id: '男'},
    {text: '女', id: '女'},
    {text: '嬲', id: '嬲'},
  ],
}, {
  text: '年级',
  children: [
    {text: '大一', id: '大一'},
    {text: '大二', id: '大二'},
    {text: '大三', id: '大三'},
    {text: '大四', id: '大四'},
    {text: '大五', id: '大五'},
    {text: '大六', id: '大六'},
  ],
},
];

const showTagList = ref(originTagList);

const tagList = ref([]);

const close = (val: string) => {
  tagList.value = tagList.value.filter((item: any) => item !== val);
}

const activeIndex = ref(0);
</script>

<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder='请输入搜索标签'
        @search="onSearch(value)"
        @cancel="onCancel"
    />
  </form>
  <van-divider dashed>已选择的标签</van-divider>
  <div v-if="tagList.length === 0">还没有选择标签</div>
  <van-row gutter="20">
    <van-col span="5" v-for="tag in tagList">
      <van-tag :show="show" closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider dashed>标签选择</van-divider>
  <van-tree-select
      v-model:active-id="tagList"
      v-model:main-active-index="activeIndex"
      :items="showTagList"
  />
</template>

<style scoped>

</style>
