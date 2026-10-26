interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

const reservaciones: Reservacion[] = [
    { id: 1, cliente: "Ana López", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "María García", personas: 5, zona: "Interior" },
    { id: 4, cliente: "José Hernández", personas: 4, zona: "Terraza" }
];

console.log("=== RESERVACIONES INICIALES ===");
console.log(reservaciones);

reservaciones.push({
    id: 5,
    cliente: "Roberto Díaz",
    personas: 5,
    zona: "Terraza"
});

reservaciones.unshift({
    id: 6,
    cliente: "Sofía Martínez",
    personas: 3,
    zona: "Interior"
});

console.log("=== LISTA ANTES DE ATENDER ===");
console.log(reservaciones);

function atenderPrimera(
    lista: Reservacion[]
): Reservacion | undefined {
    return lista.shift();
}

const atendida = atenderPrimera(reservaciones);

if (atendida !== undefined) {
    console.log("Cliente atendido:", atendida.cliente);
    console.log("Cantidad de personas:", atendida.personas);
} else {
    console.log("No hay reservaciones pendientes.");
}

const listaVacia: Reservacion[] = [];
const atendidaVacia = atenderPrimera(listaVacia);

if (atendidaVacia !== undefined) {
    console.log("Cliente atendido:", atendidaVacia.cliente);
} else {
    console.log("Prueba de lista vacía: no hay reservaciones pendientes.");
}

const encontrada = reservaciones.find(r => r.id === 2);

if (encontrada !== undefined) {
    console.log("Reservación encontrada:", encontrada);
} else {
    console.log("No existe la reservación con ID 2.");
}

const inexistente = reservaciones.find(r => r.id === 99);

if (inexistente !== undefined) {
    console.log("Reservación encontrada:", inexistente);
} else {
    console.log("No existe la reservación con ID 99.");
}

const cantidadAntesDeFiltrar = reservaciones.length;

const filtradas = reservaciones.filter(
    r => r.zona === "Terraza" && r.personas >= 5
);

const cantidadDespuesDeFiltrar = reservaciones.length;

console.log("=== RESERVACIONES FILTRADAS ===");
console.log(filtradas);

if (filtradas.length === 0) {
    console.log("No hay coincidencias en el filtro.");
}

console.log("=== ESTADO FINAL ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad de pendientes:", reservaciones.length);
console.log("Cantidad de coincidencias:", filtradas.length);

console.log("Cantidad antes de filtrar:", cantidadAntesDeFiltrar);
console.log("Cantidad después de filtrar:", cantidadDespuesDeFiltrar);

if (cantidadAntesDeFiltrar === cantidadDespuesDeFiltrar) {
    console.log("Comprobación: filter no eliminó registros del arreglo original.");
} else {
    console.log("El arreglo original cambió de tamaño.");
}

