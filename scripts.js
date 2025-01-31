$(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 200){
      document.getElementById('test').style.backgroundColor='#C20000';
    }
  
   if(scrollTop < 200){
      document.getElementById('test').style.backgroundColor=' ';
    }
  
  });