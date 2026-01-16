document.addEventListener("DOMContentLoaded", function () {
  // 1. 要素を一括で取得
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const calDec = document.getElementById("calendarDec");
  const calJan = document.getElementById("calendarJan");
  const title = document.getElementById("calendarTitle");

  // 2. 「今日」を判定して色をつける関数
  function highlightToday() {
    const now = new Date();
    const tYear = now.getFullYear();
    const tMonth = now.getMonth() + 1;
    const tDate = now.getDate();

    // 全てのtdからtodayクラスを一旦削除
    document.querySelectorAll(".calendar-table td").forEach((td) => {
      td.classList.remove("today");
    });

    // 表示されている月が「今」の年月と一致する場合のみ実行
    if (calDec.style.display !== "none" && tYear === 2025 && tMonth === 12) {
      markDate(calDec, tDate);
    } else if (calJan.style.display !== "none" && tYear === 2026 && tMonth === 1) {
      markDate(calJan, tDate);
    }
  }

  // 3. マスの中から「数字」を探してクラスをつける関数
  function markDate(container, day) {
    const cells = container.querySelectorAll("td");
    cells.forEach((cell) => {
      // マスの中のテキストを全部つなげず、日付の数字（最初のテキストノード）だけをチェック
      const cellText = cell.innerText.split('\n')[0].trim();
      if (cellText == day && !cell.classList.contains('gray')) {
        cell.classList.add("today");
      }
    });
  }

  // 4. ボタンのクリックイベント（1つにまとめました）
  btnNext.addEventListener("click", function () {
    calDec.style.display = "none";
    calJan.style.display = "block";
    title.textContent = "2026年 1月";
    btnNext.style.visibility = "hidden";
    btnPrev.style.visibility = "visible";
    highlightToday(); // 月を切り替えた時に再チェック
  });

  btnPrev.addEventListener("click", function () {
    calJan.style.display = "none";
    calDec.style.display = "block";
    title.textContent = "2025年 12月";
    btnPrev.style.visibility = "hidden";
    btnNext.style.visibility = "visible";
    highlightToday(); // 月を切り替えた時に再チェック
  });

  // 5. ページを開いた時の初期設定
  btnPrev.style.visibility = "hidden";
  highlightToday(); // 最初に今日の色をつける
});