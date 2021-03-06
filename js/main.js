/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]'); 
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var bullet = $('.swiper-pagination-bullet')

  next.css('left', prev.width() + 35 + bullets.width() + 35)
  bullets.css('left', prev.width() + 20)
  bullet.css({'margin': '0 8px'}) 
  

  var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 2
});

  new WOW().init();


  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило обьект (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: {
        required: "Номер обязателен",
        minlength: "Введите корректный номер"
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com"
      },
      policyCheckbox: "Заполните поле"
      
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами в течении 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible')
        },
        error: function (response) {
          console.error('Ощибка запроса' + response);
        }
      });
    } 
  });

  $('.control__form').validate({
    errorClass:"invalid1",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      policyCheckbox1: "required"
    }, 
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв "
      } ,
      userPhone: {
        required: "Номер обязателен",
        minlength: "Введите корректный номер"
      },

      policyCheckbox1: "Заполните поле"
      
  
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами в течении 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible')
        },
        error: function (response) {
          console.error('Ощибка запроса' + response);
        }
      });
    } 

  });

  $('.footer__form').validate({
    errorClass:"invalid2",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило-объект (блок)
      userQuestion: {
        required: true
      },
      policyCheckbox2: "required"
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв "
      } ,
      userPhone: {
        required: "Номер обязателен",
        minlength: "Введите корректный номер"
      },
      userQuestion: {
        required: "Обязательно заполните поле",
      },
      policyCheckbox2: "Заполните поле"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами в течении 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible')
        },
        error: function (response) {
          console.error('Ощибка запроса' + response);
        }
      });
    } 

    

  });

  //маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00');

});
