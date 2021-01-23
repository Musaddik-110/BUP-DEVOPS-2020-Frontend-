/* comment */


  /*comment */

    /* search  script start */
 

function searchFunction() {
var input, filter, cards, cardContainer, h4, title, i;
input = document.getElementById("searchFilter");
filter = input.value.toUpperCase();
cardContainer = document.getElementById("myItems");
cards = cardContainer.getElementsByClassName("card");
for (i = 0; i < cards.length; i++) {
title = cards[i].querySelector(".card-body h4.card-title");
if (title.innerText.toUpperCase().indexOf(filter) > -1) {
cards[i].style.display = "";
} else {
cards[i].style.display = "none";
}
}
}

/* search script end */


/* counter */
document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 350, 5000);
 counter("count2", 100, 500, 6500);
 counter("count3", 0, 450, 6000);
});

/* counter */




/* upload file js */
 
(function() {
  
  'use strict';

  $('.input-file-button').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });

})(); 

/* upload file js */

             


  /* <!-- filter script start-->*/
      
        filterSelection("all")
        function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
        }
        function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1)
        {element.className += " " + arr2[i];}
        }
        }
        function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
        }
        element.className = arr1.join(" ");
        }
        
        
    
   /* filter script end- */   
 


    

/*  Filter start */


  function myFunction() {
    var input, filter, cards, cardContainer, h6, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card-blog ");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".search h6.tags");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}


/*  Filter end */


 

/* 404 page not found start*/
window.onload = function(){
document.querySelector('.cont_principal').className= "cont_principal cont_error_active";  
  
}



/* 404 page not found end */





