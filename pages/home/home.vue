<template>
  <view>
      <image v-for="(item,index) in image" :key="item" :src="item" @click="onClick(image,index)" ></image>
      <button @tap="onTap">关闭刷新</button>
  </view>
</template>


<style lang="scss">

image{
  height: 100rpx;
  width: 100rpx;
  
}
</style>


<script setup>
const image = ref(["/static/tagbar/logo.png","/static/tagbar/home.png","/static/tagbar/user.png"])
	uni.setTabBarItem({
	  index:0,
	  text:"自定义"
	})
  
  uni.setTabBarBadge({
    index:0,
    text:"11"
  })
  
  uni.removeTabBarBadge({
    index:0
  })
  



  // uni.setNavigationBarTitle({
  //   title:"动态标题",
  // })
  
  // uni.showNavigationBarLoading()

function onTap(){
  uni.stopPullDownRefresh()
}

function onClick(array,index){
  uni.startPullDownRefresh()
  
  
  // uni.hideNavigationBarLoading()
  // uni.setNavigationBarColor({
  //   backgroundColor:"#000000",
  //   frontColor:"#ffffff",
  //   animation: {
  //       duration: 400,
  //       timingFunc: 'easeIn' 
  //   }
  // })
  
  
  // uni.showToast({
  //   title:"标题",
  //   icon:"success",
  //   image:"/static/tagbar/logo.png",
  //   mask:true,
  //   duration:3000,
  //   success:res=>{console.log(res)},
  //   fail:res=>{console.log(res)},
  //   complete:res=>{console.log(res)}
  // })
  
  // uni.hideToast()
  
  
  
   
  
   // uni.previewImage({
   //   current:index,
   //   urls:array,
   //   showmenu:true,
   //   success:()=>{},
   // })
  }

</script>