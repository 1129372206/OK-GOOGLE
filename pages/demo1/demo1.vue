<template>
  <view>
    <navigator url="/pages/demo2/demo2">跳转demo2</navigator>
    <view @click="goIndex"> 跳转到首页</view>
  </view>
</template>


<style lang="scss">

</style>


<script setup>
uni.setStorageSync('name','李四')
uni.setStorageSync('key键',[1,2,3])

let myname = uni.getStorageSync("name")
const res = uni.getStorageInfoSync()
uni.removeStorageSync("name")
uni.clearStorageSync()



function goDemo2(){
  uni.navigateTo({
    url:"/pages/demo2/demo2?name=张三&age=18"
  })
}

function goIndex(){
  uni.reLaunch({
    url:"/pages/home/home"
  })
}
  
  
</script>
