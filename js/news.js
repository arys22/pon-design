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


// ページネーション
Vue.component("paginate", VuejsPaginate);
const vm3 = new Vue({
  el: "#app3",
  data: {
    items: [
      {id:1, time:"2030.02.01", type:"お知らせ",text:"Webデザインニュースサイト｢ウェブマガジン｣に取材いただきました",},
      {id:2, time:"2030.01.25",type:"制作実績", text:"Smoothiesta様のWebサイトを制作いたしました",},
      {id:3, time:"2030.01.20", type:"採用",text:"Webデザイナーを１名募集中です！",},
    ],
    parPage: 20,
    currentPage: 1,
  },
  // ダミーデータ生成
  created: function () {
    for (let i = 1; i <= 45; i++) {
      this.items.push({
        id: i + 3,
        time: "2030.02.01",
        type: "お知らせ",
        text: "テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
      });
    }
  },
  methods: {
    // クリック
    // Number(pageNum) 文字列を数値に変換
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  computed: {
    // 表示データの取得
    getItems: function () {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.items.slice(start, current);
    },
    // ページネーション件数の取得
    getPageCount: function () {
      // 「画面に表示する情報」の件数を「1ページに表示する件数」で除算
      // ceil 小数点を切り上げた整数
      return Math.ceil(this.items.length / this.parPage);
    },
  },
});
