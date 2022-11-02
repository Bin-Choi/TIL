<template>
  <div>
    <h3>MyComponent의 하위 컴포넌트</h3>
    <p>{{staticProps}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponentItem',
  props: {
    staticProps: String,
  }

}
</script>

<style>

</style>