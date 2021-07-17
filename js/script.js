"use strict";
new Vue({
  el: "#app1",
  data: {
    ActiveBtn: false,
    scrollY: 0,
  },
  mounted() {
    // スクロール時 スクロール位置を取得
    window.addEventListener("scroll", this.onScroll);
    // ロード時
    window.addEventListener('load', this.setCoordinate)
  },
  methods: {
    // スクロールを検知
    onScroll() {
      this.scrollY = window.scrollY;
    },
  },
});
