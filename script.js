// Obtén el elemento del contador de visitas
const contador = document.getElementById('contador');
const horaActual = document.getElementById('hora-actual'); // Asegúrate de que el elemento tenga el ID 'hora-actual'

// Verifica si ya existe una entrada en el almacenamiento local para el contador
if (localStorage.getItem('visitas')) {
    // Si existe, obtén el valor actual y conviértelo a número
    let visitas = parseInt(localStorage.getItem('visitas'));
    // Incrementa el contador en 1
    visitas++;
    // Actualiza el contador en la página y en el almacenamiento local
    contador.textContent = `Visitas: ${visitas}`;
    localStorage.setItem('visitas', visitas);
} else {
    // Si no existe, inicializa el contador en 1 y guárdalo en el almacenamiento local
    localStorage.setItem('visitas', 1);
    contador.textContent = 'Visitas: 1';
}

// Función para mostrar la hora actual
function mostrarHoraActual() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    horaActual.textContent = `Hora actual: ${horaFormateada}`;
}

// Llama a la función para mostrar la hora actual y actualízala cada segundo
mostrarHoraActual();
setInterval(mostrarHoraActual, 1000);

// Resto de tu código JavaScript
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#3498db';
        link.style.color = '#ecf0f1';
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transition = 'all 0.3s';
        link.style.backgroundColor = '#ecf0f1';
        link.style.color = '#3498db';
        link.style.transform = 'scale(1)';
    });
});

const container = document.querySelector('.container');

container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.05)';
    container.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
});

container.addEventListener('mouseleave', () => {
    container.style.transition = 'all 0.3s';
    container.style.transform = 'scale(1)';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});
