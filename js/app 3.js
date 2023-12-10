$(function(){
  // タイトルのフェードイン
  $(".title").hide().fadeIn(3000);

  $(".contact").on({
    // マウスがボタンに乗っている時、.largeというclass属性を追加
    'mouseenter':function(){
    $(this).addClass("large_contact");
    },
    // マウスがボタンから離れた時、.largeというclass属性を削除
    'mouseleave':function(){
    $(this).removeClass("large_contact");
    }
    }
  );
  $(".back_button").on({
    // マウスがボタンに乗っている時、.largeというclass属性を追加
    'mouseenter':function(){
    $(this).addClass("large_back");
    },
    // マウスがボタンから離れた時、.largeというclass属性を削除
    'mouseleave':function(){
    $(this).removeClass("large_back");
    }
    }
  );

  $(".photo_item").click(function() {
    // クリックされた写真のソース（src）を取得
    var src = $(this).attr("src");
    // モーダル内の写真のソースをクリックされた写真のソースに設定
    $("#modal_image").attr("src", src);
    // モーダルを表示
    $(".modal").fadeIn();
    // 背景を暗くする
    $(".modal_bg").fadeIn();
  });

  // 閉じるボタンがクリックされた時の動作
  $(".close").click(function() {
    // モーダルを非表示にする
    $(".modal").fadeOut();
    // 背景を明るくする
    $(".modal_bg").fadeOut();
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