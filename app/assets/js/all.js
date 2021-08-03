// const { ready } = require("jquery");


// 文章編輯器
ClassicEditor
  .create( document.querySelector( '#editor' ), {
    placeholder: 'Reply an answer…',
    // 這裡可以設定 plugin
  })
  .catch( error => {
      console.error( error );
  } );


// jquery 操作留言回復
$(function() {
  // $('.admin').fadeOut().addClass('d-none'); // 預設隱藏
  $('.js_ckeditor_content').hide();

  // 頁面切換
  // js_assignment_page
  $('.js_assignment_page').on('click', function () {
    $('.assignment').fadeIn().removeClass('d-none');
    $('.admin').fadeOut().addClass('d-none');
  });
  // js_admin_page
  $('.js_admin_page').on('click', function () {
    $('.assignment').fadeOut().addClass('d-none');
    $('.admin').fadeIn().removeClass('d-none');
  });


  // 開啟編輯
  $('.js_message_reply_btn').on('click', function () {
    $('.js_reply_content').slideUp();
    $('.js_ckeditor_content').slideDown();
    $('.js_operation_btns').toggleClass('d-none');
  });
  // 關閉編輯
  $('.js_reply_cancel_btn').on('click', function () {
    $('.js_reply_content').slideDown();
    $('.js_ckeditor_content').slideUp();
    $('.js_operation_btns').toggleClass('d-none');
  });
});


// 詳細資料的 modal
// var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

// const a = document.querySelector('modal123');
// myModal.show();

// 編輯資料的 modal


// 新增資料的 modal