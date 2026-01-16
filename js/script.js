//イベントセクションスワイプーーーーーーーーーーーーーーー
const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  loop: true,
  speed: 300,
  slidesPerView: 3,
  slidesPerGroup: 1,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // 丸は3つだけ作る
      if (index < 3) {
        return `<span class="${className}"></span>`;
      }
      return "";
    },
  },

  breakpoints: {
    // 768px 未満（スマホ）
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: false,
    },

    // 768px 以上（タブレット〜PC）
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: true,
    },
  },

  on: {
    slideChange: function () {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");

      bullets.forEach((b) =>
        b.classList.remove("swiper-pagination-bullet-active")
      );

      // realIndex を 3 で割って対応させる
      const activeIndex = this.realIndex % 3;

      if (bullets[activeIndex]) {
        bullets[activeIndex].classList.add("swiper-pagination-bullet-active");
      }
    },
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// トップに戻るボタンーーーーーーーーーーーーーーー
const toTopButton = document.getElementById("toTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

toTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// トップに戻る時スムースにーーーーーーーーーーーーーーーー
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// cssアニメーション
$(function () {
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("is-show");
    } else {
      $(this).removeClass("is-show");
    }
  });
});
