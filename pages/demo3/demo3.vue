<template>
  <view>
    <view class="textBox" v-for="(item,index) in getData" :key="item.id">
      <view class="title">{{item.title}}</view>
      <view class="body">{{item.body}}</view>
    </view>
    
  </view>
</template>


<style lang="scss">
page{
  background-color: #eee;
}
.textBox{
  padding: 24rpx;
  background-color: #fff;
  margin-top: 16rpx;
}

.title{
  font-weight:#999;
  font-size: 40rpx;
  margin-bottom: 8rpx;
}

.body{
  color: #aaa;
}

</style>


<script setup>
import { computed, ref } from 'vue';
  
const getData = ref([])


requestFun()

function requestFun(){
  uni.showLoading()
  uni.request({
    url:"https://jsonplaceholder.typicode.com/posts",
    data:{id:1},
    method:"GET",
    timeout:1000,
    header:{
      token:"1111111",
      "content-type":"application/json"
    },
    success:res=>{getData.value = res.data},
    fail:res=>{console.log("超时！")},
    complete:()=>{uni.hideLoading()}
  })
  
}


</script>
