function initMap() {
    const sedePrincipal = { lat: 40.730610, lng: -73.935242 }; // Ejemplo: Coordenadas de Nueva York

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: sedePrincipal,
    });

    const marker = new google.maps.Marker({
        position: sedePrincipal,
        map: map,
        title: "Sede Principal",
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('testDriveForm');
    const emailCounter = {};

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Variables para capturar los valores
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const estrato = document.getElementById('estrato').value;
        const dob = document.getElementById('dob').value;
        const sangre = document.getElementById('sangre').value;
        const fechaTestDrive = document.getElementById('fechaTestDrive').value;
        const horaTestDrive = document.getElementById('horaTestDrive').value;
        const genero = document.querySelector('input[name="genero"]:checked').value;

        // Capturar actividades favoritas seleccionadas
        let actividades = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
            actividades.push(checkbox.value);
        });

        // Validaciones con expresiones regulares
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        let valid = true;

        if (!emailRegex.test(email)) {
            document.getElementById('emailerror').innerText = 'Email inválido';
            valid = false;
        } else {
            document.getElementById('emailerror').innerText = '';
        }

        if (!phoneRegex.test(telefono)) {
            document.getElementById('phoneerror').innerText = 'Teléfono inválido';
            valid = false;
        } else {
            document.getElementById('phoneerror').innerText = '';
        }

        if (valid) {
            // Manejo de contador de email
            if (emailCounter[email]) {
                emailCounter[email]++;
            } else {
                emailCounter[email] = 1;
            }

            // Mostrar la información en un alert
            alert(`Nombre: ${nombres} ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de nacimiento: ${dob}\nGrupo sanguíneo: ${sangre}\nFecha del Test Drive: ${fechaTestDrive}\nHora del Test Drive: ${horaTestDrive}\nGénero: ${genero}\nActividades Favoritas: ${actividades.join(', ')}\n\nEste email ha sido registrado ${emailCounter[email]} veces.`);
        }
    });

    // Redirigir al menú de inicio al presionar "Cancelar"
    document.getElementById('cancelBtn').addEventListener('click', function () {
        window.location.href = 'inicio.html';
    });
});

