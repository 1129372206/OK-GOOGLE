"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    function remove() {
      common_vendor.index.showModal({
        title: "是否删除？",
        content: "删除后不会恢复",
        showCancel: true,
        cancelText: "关闭",
        confirmText: "删掉！",
        cancelColor: "green",
        confirmColor: "red",
        editable: true,
        placeholderText: "删掉删掉一定要删掉",
        success: (res) => {
          if (res.confirm)
            common_vendor.index.showToast({
              title: "成功了！"
            });
        },
        fail: (res) => {
        }
      });
    }
    function select() {
      let arrs = ["高中", "大专", "本科", "硕士"];
      common_vendor.index.showActionSheet({
        title: "菜单",
        alertText: "请选择",
        itemList: arrs,
        itemColor: "#007aff",
        success: (res) => {
          console.log(arrs[res.tapIndex]);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(remove),
        b: common_vendor.o(select)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Desktop/小程序/Demo3/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
