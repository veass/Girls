// Conditions for order
// Еracking the status of orders for back-edevelopers


function pbStatus(n) {

  if(n > 0) {

    let elem_first = $('.circle:nth-child(1)');
    let elem_temp = elem_first;

    for(let i = 1; i <= n; i++) {
      elem_temp.addClass('done');
      elem_temp.prevAll('.bar').addClass('done');
      elem_temp = elem_temp.next().next('.circle');
      
    }
  }

}

// Testing function pbStatus
// pbStatus(4);

  $.ajax({
    method: "POST",
    url: '',
    data: {
    },                              
    success: function(response) {  
    
      pbStatus(response);
    }

})


// dynamic shadow gradient 
$('.gradient-button').on('mousedown', function(){
  $(this).addClass('active');
})
$('.gradient-button').on('mouseleave', function(){
  $(this).removeClass('active');
})



// slider
$('.photo').slick({
  infinite: true,
  speed: 700,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [

    {
      breakpoint: 500,
      settings: {
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToScroll: 2
      }
    }
  ]
});


// modal window
$('.card__button').on('click', function () {

  let title = $(this).siblings('.card__title').text();
  let cost_wrong = $(this).siblings('.card__cost').find('.cost_wrong').text();
  let cost_true = $(this).siblings('.card__cost').find('.cost_true').text();
  let img = $(this).parent().siblings('.card__img').attr('style');


  $('.modal-wrap').addClass('active');
  $('.modal-block__title').text(title);
  $('.modal-wrap').find('.cost_wrong').text(cost_wrong);
  $('.modal-wrap').find('.cost_true').text(cost_true);
  $('.modal-block__left').attr('style', img);

})

$('.modal-wrap').on('click', function (event) {
  let target = $(event.target);
  target.removeClass('active');
})




// Tabs
function tabs(event, clothes) {

  let i, tabcontent, tablinks;
  tabcontent = $(".cards");
  tablinks = $(".switch")

  for (tab of tabcontent) {
    $(tab).removeClass('active');
  }

  for (tablink of tablinks) {
    $(tablink).removeClass('switch_active');
  }


  event.currentTarget.classList += " switch_active";
  $(`#${clothes}`).addClass('active');
  
} 
