alert("I work!");

$(document).ready(function() {
    $('.container').magnificPopup({
        delegate: '.test-popup-link',
        type:'image',
        gallery: {
            enabled: false, // set to true to enable gallery
          
            navigateByImgClick: true,
          
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
              
        }
    });
});
  
alert("I work too");

//$('.test-popup-link').magnificPopup({
//    type: 'image',
//    gallery: {enabled: true}
    // other options
//});

alert("i work also")