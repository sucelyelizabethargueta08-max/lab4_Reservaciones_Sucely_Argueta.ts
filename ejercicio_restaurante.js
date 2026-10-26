"use strict";
// Nombre: Sucely Argueta
Object.defineProperty(exports, "__esModule", { value: true });
const reservaciones = [
    { id: 1, cliente: "Ana", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Carlos", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "Maria", personas: 5, zona: "Interior" },
    { id: 4, cliente: "Jose", personas: 4, zona: "Terraza" }
];
// Registrar reservaciones
reservaciones.push({ id: 5, cliente: "Pedro", personas: 5, zona: "Terraza" });
reservaciones.unshift({ id: 6, cliente: "Sofia", personas: 3, zona: "Interior" });
console.log("Antes de atender:", reservaciones);
// Función para atender
function atender(lista) {
    return lista.shift();
}
const atendida = atender(reservaciones);
console.log("Atendida:", atendida ?? "No hay reservaciones");
const vacia = [];
console.log("Lista vacía:", atender(vacia) ?? "No hay reservaciones");
// Buscar reservaciones
console.log("Encontrada:", reservaciones.find(r => r.id === 2) ?? "No existe");
console.log("No encontrada:", reservaciones.find(r => r.id === 99) ?? "No existe");
// Filtrar terraza con 5 o más personas
const antes = reservaciones.length;
const filtradas = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
console.log("Filtradas:", filtradas.length ? filtradas : "Sin coincidencias");
// Estado final
console.log("Pendientes:", reservaciones);
console.log("Cantidad pendiente:", reservaciones.length);
console.log("Coincidencias:", filtradas.length);
console.log("Antes y después del filtro:", antes, reservaciones.length);
//# sourceMappingURL=ejercicio_restaurante.js.map