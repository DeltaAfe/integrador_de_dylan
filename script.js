const preguntas = [
    { pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Amazonas" },
    { pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci" },
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    // Agrega 27 preguntas más
];

function iniciarJuego() {
    const preguntasSeleccionadas = [];
    while (preguntasSeleccionadas.length < 10) {
        const indice = Math.floor(Math.random() * preguntas.length);
        if (!preguntasSeleccionadas.includes(preguntas[indice])) {
            preguntasSeleccionadas.push(preguntas[indice]);
        }
    }
    mostrarPreguntas(preguntasSeleccionadas);
}

function mostrarPreguntas(preguntas) {
    const divPreguntas = document.getElementById("preguntas");
    divPreguntas.innerHTML = "";
    preguntas.forEach((preguntaObj, index) => {
        const preguntaHTML = document.createElement("div");
        preguntaHTML.innerHTML = `
            <p>${index + 1}. ${preguntaObj.pregunta}</p>
            <input type="text" id="respuesta${index}">
        `;
        divPreguntas.appendChild(preguntaHTML);
    });

    const botonTerminar = document.createElement("button");
    botonTerminar.textContent = "Terminar";
    botonTerminar.onclick = () => verificarRespuestas(preguntas);
    divPreguntas.appendChild(botonTerminar);
}

function verificarRespuestas(preguntas) {
    let correctas = 0;
    preguntas.forEach((preguntaObj, index) => {
        const respuestaUsuario = document.getElementById(`respuesta${index}`).value;
        if (respuestaUsuario.trim().toLowerCase() === preguntaObj.respuesta.toLowerCase()) {
            correctas++;
        }
    });

    const resultado = document.getElementById("resultado");
    const porcentaje = (correctas / preguntas.length) * 100;
    if (porcentaje > 70) {
        resultado.textContent = `¡Felicidades! Aprobaste con ${correctas} respuestas correctas.`;
    } else {
        resultado.textContent = `Obtuviste ${correctas} respuestas correctas. Sigue intentándolo.`;
    }
}
