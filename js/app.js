$(function(){
  // タイトルのフェードイン
  $(".main_title, .sub_title").hide().fadeIn(3000);

  $(".contact").on({
    // マウスがボタンに乗っている時、.largeというclass属性を追加
    'mouseenter':function(){
    $(this).addClass("large");
    },
    // マウスがボタンから離れた時、.largeというclass属性を削除
    'mouseleave':function(){
    $(this).removeClass("large");
    }
    });

  // ハンバーガーメニュー
  $(function () {
    $("#js-hamburger, .navigation_link").on('click', function(){
      $(".navigation").slideToggle(500)
      $(".hamburger").toggleClass("hamburger-open")
    });
  });
}
);