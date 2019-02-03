/*  DRUM KIT  */


//  Escuchar un evento en la pantalla
window.addEventListener('keydown', function(e){ // A la escucha del "keydown" event y cuando eso suceda, correrá una function con
// el evento que se le está pasando. (e) Es el evento full of Data "keyboardEvent".
console.log(e.keyCode); // Mostrará en cónsola el código correspondiente a la tecla marcada. "keyCode" es uno de los datos que muestra el "keyboardEvent"


// Verificar si existe algún elemento de audio en la página que pertenezca a tal "key"....
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // Buscamos por un sólo selector y estamos a la escucha de un "audio"
// pero un "audio" con un "data-key", pasándole la variable, se utiliza un atribute selector [], 
// console.log(audio);   Se obtendrá el correspondiente audio a esa "data-key"

// Seleccionar la "key" correspondiente para hacer la animación establecida en el CSS "Playing"
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

// Parar la function si no hay audio correspondiente a determinada tecla...
if(!audio) return;

audio.currentTime = 0; // Empezará el sonido nuevamente desde el principio, no hace falta que acabe el sonido entero de dicha
// tecla para poder pulsarla de nuevo y que vuelva a sonar

audio.play();  // Javascript método para en este caso reproducir audio
key.classList.add('playing');  // Agrega la funcionalidad y estilos indicada en el CSS bajo "playing" a la "key" que presionemos


});


function removeTransition(e){
    // console.log(e);  Se verá en cónsola como todos los estilos de la key, pasarán por un "transition"
    if(e.propertyName !== 'transform')return;  // Saltalo si no es un "transform", su "event" indicado en cónsola 
    // es "propertyName: "transform". Para verlo en consola = console.log(e.propertyName)
    // console.log(this);   "This" en este caso se refiere a lo que se está escuchando que sería "key", se puede
    // ver en la function más abajo
    this.classList.remove('playing');  // "This" es a lo que el evento ha sido llamado, ha sido llamado por la "key"

}


// Escuchar cada "key" cuando el evento de la transition termine
const keys = document.querySelectorAll('.key');  // Devuelve todos los elementos que coincidan con la clase ".key".
keys.forEach(key => key.addEventListener('transitionend', removeTransition));   // "forEach" loopeará todo el nodo 
// de "key", "key" son cuatro definidos en el html, por lo que será un "nodeList" de 4 elementos.  Escucharemos por
// un evento "transitionend" y cuando ese evento termine aplicará la function "removeTransition"




