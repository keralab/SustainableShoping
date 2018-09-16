  $(document).scroll(function() {
    //Show element after user scrolls 1000px
    var y = $(this).scrollTop();
    if (y > 1000) {
      $('.plain-page').fadeIn();
    } else {
      $('.plain-page').fadeOut();
    }

    // Show element after user scrolls past
    // the top edge of its parent
    $('h1').each(function() {
      var t = $(this).parent().offset().top;
      if (y > t) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });
