<template>
  <view>
    
  </view>
</template>


<style lang="scss">

</style>


<script setup>
uni.showLoading({
  title:"加载中",
  mask:true
})

setTimeout(()=>{
  uni.hideLoading()
},2000)

</script>
