<template>
  <view>
    <button @click="remove">删除</button>
    <button @click="select">选择</button>
  </view>
</template>


<style lang="scss">


</style>


<script setup>
function remove(){
  uni.showModal({
    title:"是否删除？",
    content:"删除后不会恢复",
    showCancel:true,
    cancelText:"关闭",
    confirmText:"删掉！",
    cancelColor:"green",
    confirmColor:"red",
    editable:true,
    placeholderText:"删掉删掉一定要删掉",
    success:res=>{if(res.confirm)uni.showToast({
      title:"成功了！"
    })},
    fail:res=>{}
  })
}


function select(){
  let arrs = ["高中","大专","本科","硕士"]
  uni.showActionSheet({
    title:"菜单",
    alertText:"请选择",
    itemList:arrs,
    itemColor:"#007aff",
    success:res=>{console.log(arrs[res.tapIndex] )}
  })
}

</script>
