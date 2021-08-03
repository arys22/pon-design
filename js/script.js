"use strict";
// バーガー top戻るボタン
const vm1 = new Vue({
  el: "#app1",
  data: {
    ActiveBtn: false,
    scrollY: 0,
  },
  mounted (){
    // スクロール時 スクロール位置を取得
    window.addEventListener("scroll", this.onScroll);
    // ロード時
    window.addEventListener("load", this.onScroll);
  },
  methods: {
    // スクロールを検知
    onScroll() {
      this.scrollY = window.scrollY;
    },

    // top戻る
    returnTop() {
      // ver.1
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });

      // ver.2
      window.scrollTo(0, this.scrollY - 80);
      // 0になったらストップ
      if (this.scrollY > 0) {
        // 再帰処理 0.01秒
        window.setTimeout(this.returnTop, 7);
      }
    },
  },
});
