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
