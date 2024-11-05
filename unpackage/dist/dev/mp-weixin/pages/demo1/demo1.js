"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo1",
  setup(__props) {
    common_vendor.index.setStorageSync("storage_key", "hello");
    common_vendor.index.setStorageSync("习近平", "打倒！");
    function goIndex() {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goIndex)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Desktop/小程序/Demo3/pages/demo1/demo1.vue"]]);
wx.createPage(MiniProgramPage);
