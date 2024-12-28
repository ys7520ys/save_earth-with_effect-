$('.firstSection .text_box a').on('mouseenter', function() {
  // 부모 중 .img_box를 찾은 후 내부의 <img> 요소 선택
  $(this).parents('.img_box').find('img').css({
    'transform': 'scale(1.1)',
    'filter':'invert(0.8)',
  });
  $(this).parents('.img_box').find('.card-title, .card-subtitle').css({
    'color':'black',
  });
});
$('.firstSection .text_box a').on('mouseout', function() {
  // 부모 중 .img_box를 찾은 후 내부의 <img> 요소 선택
  $(this).parents('.img_box').find('img').css({
    'transform': 'scale(1)',
    'filter':'invert(0)'
  });
  $(this).parents('.img_box').find('.card-title, .card-subtitle').css({
    'color':'#fff'
  });
});









$('.fourthSection .card').on('mouseenter', function() {
  // 현재 이벤트가 발생한 .card 내부의 .img_box와 .text_box만 선택
  $(this).css({
    'scale':'1.1',
    // 'border':'solid 1px rgb(172, 172, 172)',
    'box-shadow': '0px 10px 15px rgba(0, 0, 0, 0.3)' 
  });
});
$('.fourthSection .card').on('mouseleave', function() {
  // 현재 이벤트가 발생한 .card 내부의 .img_box와 .text_box만 선택
  $(this).css({
    'scale':'1',
    // 'border':'solid 1px #fff',
    'box-shadow': '0px 10px 15px rgba(0, 0, 0, 0)' 
  });
});



$('.thirdSection .card_box>div').on('mouseenter', function(){
  $(this).css({

  })
})
$('.thirdSection .card_box>div').on('mouseout', function(){
  $(this).css({

  })
})