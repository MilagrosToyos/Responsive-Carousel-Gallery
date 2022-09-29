$(function () {
    $('.carousel .carousel-item').on('click', function(){
        $('#modal').modal;
        var ruta_imagen = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_imagen);
    });
    
    $('#modal').on('click', function () {
        $('#modal').modal('hide');
    });
    
    })


/*===========Btn up===============*/
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*==========Navbar==================*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*VER COMO ARREGLAR ESTO PARA QUE FUNCIONE EL DROPDOWN DEL NAVBAR*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdwn() {
    document.getElementById("myDropdown").classList.toggle("show");
  
 }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }


