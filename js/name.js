// 画像を数秒おきに切り替える関数
function startGallery() {
  const images = document.querySelectorAll(".gallery img");
  let currentIndex = 0;

  // 2枚目以上の画像がある場合のみ実行
  if (images.length <= 1) return;

  setInterval(() => {
    // 今表示されている画像から active クラスを取る
    images[currentIndex].classList.remove("active");

    // 次の画像の番号を計算（最後までいったら0に戻る）
    currentIndex = (currentIndex + 1) % images.length;

    // 次の画像に active クラスをつける
    images[currentIndex].classList.add("active");
  }, 3000); // 4000 = 4秒おきに切り替え
}

// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", startGallery);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("namingForm");

  // フォームが送信されたときの処理
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // namingForm（フォームそのもの）を隠す
    const formElement = document.getElementById("namingForm");
    const thanksMessage = document.getElementById("thanksMessage");

    if (formElement && thanksMessage) {
      formElement.style.display = "none"; // これでフォームが消えます
      thanksMessage.style.display = "block"; // これでお礼が出ます
    }
  });
}); // ここが DOMContentLoaded の閉じカッコ
