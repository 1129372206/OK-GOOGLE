<template>
  <view>
    <button @click="goBack">返回</button>
  </view>
</template>


<style lang="scss">

</style>


<script setup>
console.log(getCurrentPages().length)

getCurrentPages()

function goBack(){
  uni.navigateBack()
}

</script>
