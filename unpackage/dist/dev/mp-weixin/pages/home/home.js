"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const image = common_vendor.ref(["/static/tagbar/logo.png", "/static/tagbar/home.png", "/static/tagbar/user.png"]);
    common_vendor.index.setTabBarItem({
      index: 0,
      text: "自定义"
    });
    common_vendor.index.setTabBarBadge({
      index: 0,
      text: "11"
    });
    common_vendor.index.removeTabBarBadge({
      index: 0
    });
    function onTap() {
      common_vendor.index.stopPullDownRefresh();
    }
    function onClick(array, index) {
      common_vendor.index.startPullDownRefresh();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(image), (item, index, i0) => {
          return {
            a: item,
            b: item,
            c: common_vendor.o(($event) => onClick(common_vendor.unref(image)), item)
          };
        }),
        b: common_vendor.o(onTap)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Desktop/小程序/Demo3/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
