const card = document.querySelector('.card');

document.addEventListener('mousemove', function(event) {
    let rotateY = (event.clientX / window.innerWidth * 360) - 180; // Vollständige 360°-Drehung
    let rotateX = (event.clientY / window.innerHeight * 20) - 10;  // Kleiner Neigungswinkel nach oben/unten
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});
