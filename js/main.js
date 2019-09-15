$(function () {
  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
  });
  $('.tours__slider-hot, .tours__slider-popular').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="tours__arrow-next"></button>',
    prevArrow: '<button type="button" class="tours__arrow-prev"></button>',
    responsive: [{
        breakpoint: 1660,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          // autoplay: true,
          autoplaySpeed: 10000,
        }
      }
    ]
  });

  $('.main-menu:nth-child(2)').click(function () {
    $('.dd-tours').slideToggle('');
  });

  $('.main-menu:nth-child(4)').click(function () {
    $('.dd-uslugi').slideToggle('');
  });

  $(document).click(function (e) {
    if (!$('.main-menu:nth-child(2)').is(e.target) &&
      $('.main-menu:nth-child(2)').has(e.target).length === 0 && $('.dd-tours').attr('style') === 'display: block;') {
      $('.dd-tours').slideToggle('');
    }
  });

  $(document).click(function (e) {
    if (!$('.main-menu:nth-child(4)').is(e.target) &&
      $('.main-menu:nth-child(4)').has(e.target).length === 0 && $('.dd-uslugi').attr('style') === 'display: block;') {
      $('.dd-uslugi').slideToggle('');
    }
  });

  $('.slider-popular__btn').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active'),
        $('.slider-hot__btn').removeClass('active'),
        $('.tours__slider-popular').toggleClass('visible hidden'),
        $('.tours__slider-hot').toggleClass('visible hidden')
    }
  });

  $('.slider-hot__btn').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active'),
        $('.slider-popular__btn').removeClass('active'),
        $('.tours__slider-popular').toggleClass('visible hidden'),
        $('.tours__slider-hot').toggleClass('visible hidden')
    }
  });

  $('.header__btn-menu').click(function () {
    $('.menu>ul').slideToggle(''),
      $('.header__btn-menu').toggleClass('active no-active')
  });

  $(document).click(function (e) {
    if (!$('.menu ul').is(e.target) &&
      $('.menu ul').has(e.target).length === 0 && $('.menu>ul').attr('style') === 'display: block;') {
      $('.menu>ul').slideToggle(''),
        $('.header__btn-menu').toggleClass('active no-active')
    }
  });



  $(".content").mCustomScrollbar();

  // Select
  $('.select').each(function () {
    // Variables
    let $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>', {
      class: 'select__gap',
      text: 'Страна тура'
    }).insertAfter($this);

    let selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>', {
      class: 'select__list'
    }).insertAfter(selectGap);

    var selectList = selectGap.next('.select__list');
    // Add li - option items
    for (var i = 0; i < selectOptionLength; i++) {
      $('<li>', {
          class: 'select__item',
          html: $('<span>', {
            text: selectOption.eq(i).text()
          })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(dur);

        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());

          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });

  });



});