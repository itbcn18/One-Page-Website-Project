function gadgetNav(){
    const sections = document.querySelectorAll("section");  // Seleccionará cada una de las "section" establecidas en el html
    const navLinks = document.querySelectorAll("nav a");  // Seleccionará todos los anchor tags "a" en la barra de nav

    sections.forEach(section => {  // Loopeará sobre todas las secciones, accediendo con "forEach"
        section.addEventListener("mouseenter", function() {  // Toma cada seccion y agregale un evento
          /*  console.log(this);  */

            const id = this.getAttribute("id");  // "This" está atado a la "section". Se busca obtener el 
            // ID de cada sección individual y encontrar la nav asociada a él  
            // console.log(id);  Muestra en cónsola el id atado a cada section   
            const navActive = document.querySelector(`a[href="#${id}"]`);   /*  a[href="#${id}"]  Selecciona 
            un específico "a" tag con un "href" específico y se le pasa la variable "const= id"  */
            // console.log(navActive);  Mostrará en cónsola los "a" tags asociados a sus respectivos "href" 
           
            navLinks.forEach(link => link.classList.remove("active"));
            navActive.classList.add("active");  // Agrega el borde por debajo de cada item del nav cuando está activo 

        });
    });
}

gadgetNav();  // Llamamos a la function