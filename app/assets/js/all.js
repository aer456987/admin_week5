
// 文章編輯器
ClassicEditor
  .create( document.querySelector( '#editor' ), {
    placeholder: 'Reply an answer…',
    // 這裡可以設定 plugin
  })
  .catch( error => {
      console.error( error );
  } );


// jquery
$(function() {
  $('.admin').fadeOut().addClass('d-none'); // 預設隱藏
  $('.js_modal_footer_btns').toggleClass('d-none');

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

  // 打開 modal
  // 新增資料的 modal
  $('.js_new_admin_btn').on('click', function() {
    $('.js_new_admin_modal').modal('show');
  });
  // 編輯資料的 modal
  $('.js_edit_admin_btn').on('click', function() {
    $('.js_edit_admin_modal').modal('show');
  });
  // 詳細資料的 modal
  $('.js_user_admin_btn').on('click', function() {
    $('.js_user_admin_modal').modal('show');
    $('.js_open_more_btn').removeClass('change_background_image');
    $('.js_modal_footer_btns').addClass('d-none');
  });

  // 按鍵展開
  $('.js_open_more_btn').on('click', function() {
    $('.js_modal_footer_btns').toggleClass('d-none');

    $('.js_open_more_btn').toggleClass('change_background_image');
  });

  // 從詳細資料開啟 modal
  $('.js_open_edit_modal').on('click', function() {
    $('.js_edit_admin_modal').modal('show');
    $('.js_user_admin_modal').modal('hide');
  });
});