const modalThanks = document.querySelector('.landing__modal__thanks');
modalThanks.addEventListener('click', (e) => {
    modalThanks.classList.remove('activeFlex');
    modalThanks.classList.add('inactive');
});

// глобальные переменные
var frame = $('.frame__modal');
var frame_len = $('.frame__modal').length;
var current_slide = 1;
// открытие модального окна
  $('.landing__calculate__offer__button').click( function(){
      $('.modal__window').show();
      $('.modal__window').css('overflow', 'scroll');
      $(frame[current_slide-1]).fadeIn(700).css('display', 'block');
      $('body').css('overflow', 'hidden');
  });
  // скрывание стрелок вперед и назад
  if (frame[0]) {
      $('.arrow__left').css('visibility', 'hidden');
  }
  // переключение окон, всевозможные проверки на кнопках
  $(function(){
    $('.arrow__left, .arrow__right').click(function(){
        if ($(this).hasClass('arrow__right')){
            var next_slide = ++current_slide-1;
        } else {
            var next_slide = --current_slide-1;
        }
        $(frame).css('display', 'none');
        $(frame[next_slide]).css('display', 'block');
        if (next_slide == 0) {
                $('.arrow__left').css('visibility', 'hidden');
            } else {
                $('.arrow__left').css('visibility', 'visible');
            }
        if (next_slide == 7) {
            $('.arrow__right').css('display', 'none');
            $('.everywhere__title').css('display', 'none');
            var furniture_price = $('.furniture__price__all').text().split(' ').join('');
            var facade_price = $('.facade__price__all').text().split(' ').join('');
            var countertop_price = $('.countertop__price__all').text().split(' ').join('');
            var filling_price = $('.filling__price__all').text().split(' ').join('');
            var all_price = (furniture_price*1) + (facade_price*1) + (countertop_price*1) + (filling_price*1);
            $('.all__price__val').text(my_price_format(all_price));
            $('.all__price__val__input').val(all_price);
        } else {
            $('.arrow__right').css('display', 'block');
            $('.everywhere__title').css('display', 'flex');
        }				
    });
});
  // закрытие модального окна
$('.cross').click(function(){
    $('.modal__window').removeClass('active');
    $('.modal__window').hide();
    $('.modal__window').css('overflow', 'hidden');
    $('body').css('overflow', 'scroll');
});
// действия с формой, чекбоксы, клики по объектам
$(".radio__opacity").change(function(){
       $(".view__furniture__window").removeClass('active').removeClass('active__without__dot').find($(".view__furniture__window > input")).prop('checked', false);
       $('input.radio__opacity').prop('checked', false);
       // $("#" + $(this).val()).prop('checked', false)
    $("#" + $(this).val()).addClass('active').find($(".view__furniture__window > input")).prop('checked', true);
    $(this).prop('checked', true);
});
$(".view__furniture__window").on('click', function(){
       $(".view__furniture__window").removeClass('active').removeClass('active__without__dot').find($(".view__furniture__window > input")).prop('checked', false);
       $('input.radio__opacity').prop('checked', false);
    $(this).addClass('active').find($(".view__furniture__window > input")).prop('checked', true);
    $('input.radio__opacity[value="'+$(this).attr('id')+'"]').prop('checked', true);
});
$(".select__furniture__window").on('click', function(){
       $(".select__furniture__window").removeClass('active').removeClass('active__without__dot').find($(".select__furniture__window > input")).prop('checked', false);
    $(this).addClass('active').find($(".select__furniture__window > input")).prop('checked', true);
    var price_furniture = $(this).find('.select__furniture__price > .furniture__price__span').text();
    $('.furniture__price__all').text(my_price_format(price_furniture));
});
$(".furniture__window").on('click', function(){
       $(".furniture__window").removeClass('active').removeClass('active__without__dot').find($(".furniture__window > input")).prop('checked', false);
    $(this).addClass('active').find($(".furniture__window > input")).prop('checked', true);
});
$(".form__radio-subtitle").on('click', function(){
       $(".form__radio-subtitle").find($(".form__radio-subtitle > input")).prop('checked', false);
    $(this).find($(".form__radio-subtitle > input")).prop('checked', true);
});
var cont = $(".facade__furniture__window");
$("#radio__8").on('click', function(){
    $(cont).removeClass('active').addClass('deactive__without__dot').removeClass('active__without__dot').find($(".facade__furniture__window > input")).prop('checked', false);
    $(cont[0]).removeClass('facade__furniture__window__disabled').addClass('active').find($(".facade__furniture__window > input")).prop('checked', true);
});
$("#radio__9").on('click', function(){
    $(cont).removeClass('active').addClass('deactive__without__dot').removeClass('active__without__dot').find($(".facade__furniture__window > input")).prop('checked', false);
    $(cont[0]).addClass('facade__furniture__window__disabled').removeClass('active').removeClass('active__without__dot').removeClass('deactive__without__dot').find($(".facade__furniture__window > input")).prop('checked', false);
});
$(".facade__furniture__window").on('click', function(){
    if ($(this).hasClass('facade__furniture__window__disabled')) {
        return false;
    }
       $(".facade__furniture__window").not('.facade__furniture__window__disabled').removeClass('active').removeClass('active__without__dot').addClass('deactive__without__dot').find($(".facade__furniture__window > input")).prop('checked', false);
    $(this).addClass('active').addClass('active__without__dot').removeClass('deactive__without__dot').find($(".facade__furniture__window > input")).prop('checked', true);
    var price_facade = $(this).find('.facade__furniture__price > .facade__price__span').text();
    $('.facade__price__all').text(my_price_format(price_facade));
});
$(".form__radio__furniture__block").on('click', function(){
       $(".form__radio__furniture__block").find($(".form__radio__furniture__block > input")).prop('checked', false);
    $(this).find($(".form__radio__furniture__block > input")).prop('checked', true);
});
$(".countertop__furniture__window").on('click', function(){
       $(".countertop__furniture__window").removeClass('active').find($(".countertop__furniture__window > input")).prop('checked', false);
    $(this).addClass('active').find($(".countertop__furniture__window > input")).prop('checked', true);
    var price_countertop = $(this).find('.countertop__furniture__price > .countertop__price__span').text();
    $('.countertop__price__all').text(my_price_format(price_countertop));
});
$('.filling__furniture__window').on('click', function(){
    if ($(this).hasClass('deactive__without__dot')) {
        $(this).addClass('active').addClass('active__without__dot').removeClass('deactive__without__dot').find($(".filling__furniture__window > input")).prop('checked', true);;        		
    } else {
        $(this).removeClass('active').removeClass('active__without__dot').addClass('deactive__without__dot').find($(".filling__furniture__window > input")).prop('checked', false);;
    }
    calculate_total_sum();
});
$(".form__radio_fridge").on('click', function(){
       $(".form__radio_fridge").find($(".form__radio_fridge > input")).prop('checked', false);
    $(this).find($(".form__radio_fridge > input")).prop('checked', true);
});
$(".form__radio_hood").on('click', function(){
       $(".form__radio_hood").find($(".form__radio_hood > input")).prop('checked', false);
    $(this).find($(".form__radio_hood > input")).prop('checked', true);
});
// калькуляция сбора все итоговых сумм и вывод на последднее окно
function calculate_total_sum(){
    var total_price = 0;
    $('.filling__furniture__window.active .filling__price__span').each(function(){
        total_price += parseInt($(this).text());
    });
    $('.filling__price__all').text(my_price_format(total_price));
}
// функция для калькуляции, и добавление разделителей в тысячных
function my_price_format(price){
    return price.toString().split("").reverse().join("").replace(/\d\d\d/g, "$& ").split("").reverse().join("");
}
// $('.all__price__val').text();