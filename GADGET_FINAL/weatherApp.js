/*  Permitir a "Firefox" acceder a la ubicación actual para visualizar la funcionalidad.  */

/* WEATHER APP  */

window.addEventListener("load", () => { // Se carga primero la página para luego obtener la location al ejecutarse la function 

    //  Obtener la "latitud y longitud" de nuestra locación, javascript tiene un método ya construido para ello (geolocation.getCurrentPosition).
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) { // Si esto existe en el browser, podremos obtender la position
        navigator.geolocation.getCurrentPosition(position => { // Acceso a la function "position"
            /* console.log(position); /*  Para ver en cónsola los datos de la "position" actual  */
            long = position.coords.longitude; // para acceder a los datos mostrados en la consola a través de la function "position"
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"; // Actuará como un Proxy para los request
            const api = `${proxy}https://api.darksky.net/forecast/1d8f77fac8f98ad10ed44650d45663e8/${lat},${long}`;


            // Para obtener la información (recuperar recursos) de dicha URL "(API Call)" se usa "Fetch".
            // La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas. 
            // El método global fetch() proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

            fetch(api)
                // Luego de que obtengas la info de la URL entonces "then" puedo hacer algo con esa "data" .then()
                .then(response => {
                    return response.json(); // Se toma la información y se convierte en JSON
                })
                .then(data => { // Luego de que esté en JSON...
                    console.log(data);
                    const {
                        temperature,
                        summary,
                        icon
                    } = data.currently; // Se accede a "data.currently", uno de los datos que nos lanza javascript si lo vemos en consola

                    // Fórmula para transformar a Grados Centígrados
                    let Celsius = (temperature - 32) * (5 / 9);

                    // Establecer los elementos del DOM desde la API
                    temperatureDescription.textContent = summary;
                    temperatureDegree.textContent = temperature;
                    locationTimezone.textContent = data.timezone;

                    // Set Icon
                    setIcons(icon, document.querySelector('.icon'));


                    // Cambiar la temperatura Farenheit / Centígrados 
                    // Chequear si está en centígrados o grados Farenheit y que cambie con el "click"

                    temperatureSection.addEventListener('click', () => { // Corremos la "tempertureSection", se le agrega un evento y esperamos por un "click", 
                        // se corre una function y se chequea
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(Celsius);
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }

                    });

                });

        });

    }

    function setIcons(icon, iconID) {  // Function para agregar los ICONS

        const skycons = new Skycons({
            color: "white"
        }); // Inicia la librería de "Skycons". Se cambia el color (opcional).
        const currentIcon = icon.replace(/-/g, "_").toUpperCase(); // Remplazamos lo que obtenemos del "icon" en la cónsola con lo de la API, ya 
        // que es de ahí que lo va a tomar, por lo que leerá todas las líneas y en las que encuentre "-" lo reemplazará por "_" y en mayúscula.

        // Inicializar
        skycons.play(); // Hará la animación del Icon
        return skycons.set(iconID, Skycons[currentIcon]); // Se añade el iconId y el current Icon que será el reemplazado. Esto hace correr el "set icon"
    }

});