"use strict";
// バーガー top戻るボタン
const vm1 = new Vue({
  el: "#app1",
  data: {
    ActiveBtn: false,
    scrollY: 0,
  },
  mounted() {
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

// スライダー
// vue-awesome-swiperを呼び出し
const VueAwesomeSwiper = window.VueAwesomeSwiper;
Vue.use(VueAwesomeSwiper);

const vm2 = new Vue({
  el: "#app2",
  data: {
    // options設定
    swiperOption: {
      // ループ
      loop: true,
      autoplay: {
        // 自動再生5秒間隔
        delay: 5000,
        // 操作されても自動再生止めない
        disableOnInteraction: false,
      },
      // フェードで切り替え
      // effect: "fade",
      // スライドの間隔
      // spaceBetween: 0,
      // ページネーション
      pagination: {
        el: ".swiper-pagination",
        // クリック有効
        clickable: true,
      },
      // 次のページ、前のページ
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
