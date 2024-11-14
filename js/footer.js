function obtenerFechaHora() {
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'America/Bogota' };
    
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-CO', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-CO', opcionesHora);

    document.getElementById('fecha-hora').textContent = `Fecha: ${fechaFormateada} | Hora: ${horaFormateada} (Colombia)`;
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", obtenerFechaHora);
