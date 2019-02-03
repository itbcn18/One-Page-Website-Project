/*  SCROLL TO THE TOP BUTTON  */

(function (){    // IIFE - Función autoejecutable

    // Cuando el usuario hace scroll hacia abajo 200px desde el top del documento, mostrar el botón...

    window.onscroll = function() {scrollFunction()};  // "onscroll" es un eventHandler que se activa cuando se desplaza 
    // la barra de desplazamiento de un elemento

    function scrollFunction() {
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
          document.getElementById('scrollBtn').style.display = "block";
        } else {
          document.getElementById('scrollBtn').style.display = "none";
        }
      }
      
    // Cuando el usuario hace click al botón, scroll hacia el top del documento
    function topFunction() {
         document.body.scrollTop = 0; // Para Safari
         document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE and Opera
      }
      

    // Obtener la referencia del "Scroll Button"
    let scrollBtn = document.getElementById('scrollBtn');
    scrollBtn.addEventListener('click', function() { scrollFunction(), topFunction() } ) ;  // Cada vez que se escuche el "Click" event, queremos que
    // se ejecute la function "clickHandler"

}) ();   

