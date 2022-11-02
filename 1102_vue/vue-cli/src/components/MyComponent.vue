<template>
  <div class='border'>
    <h1>배고픈데 배아픔 </h1>
    <MyComponentItem static-props="MyComponent에서 보낸 데이터"/>
  </div>
</template>

<script>
//  1. 불러오기
import MyComponentItem from '@/components/MyComponentItem'
export default {
  name: 'MyComponent',
  // 2. 등록하기
  components: {
    MyComponentItem,
  }
}
</script>

<style>
  .border {
    border: solid 1px black;
  }
</style>