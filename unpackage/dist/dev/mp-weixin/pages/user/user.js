"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
    }, 2e3);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Desktop/小程序/Demo3/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
