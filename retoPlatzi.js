// Calcular el promedio general de una clase
// Calcular el promedio individual de cada estudiante
// recibire un array de objetos con el nombre de estudiante y 5 calificaciones

// const estudiantes = [
//   { nombre: "Juan", calificaciones: [9, 7, 10, 8, 6, 9] },
//   { nombre: "María", calificaciones: [8, 9, 7, 8, 10, 9] },
//   { nombre: "Pedro", calificaciones: [7, 6, 8, 9, 10, 7] },
//   { nombre: "Ana", calificaciones: [10, 9, 9, 8, 7, 8] },
//   { nombre: "Luis", calificaciones: [8, 7, 9, 6, 9, 10] },
// ];

// // let names = ""
// getStudentAverage(estudiantes);
// function getStudentAverage(estudiantes){
//     const estudiantesConPromedio = [];
//     let totalAverage = [];
//     for(let i = 0; i < estudiantes.length; i++){
//         const estudiante = estudiantes[i].nombre;
//         const promedio = estudiantes[i].calificaciones.reduce((a,b) => a + b, 0) / estudiantes[i].calificaciones.length;
//         estudiantesConPromedio.push([estudiante, promedio]);
//         totalAverage += promedio;
//     }
//     console.log(estudiantesConPromedio);
//     console.log(totalAverage);
// }
const estudiantes = [
  { nombre: "Juan", calificaciones: [9, 7, 10, 8, 6, 9] },
  { nombre: "María", calificaciones: [8, 9, 7, 8, 10, 9] },
  { nombre: "Pedro", calificaciones: [7, 6, 8, 9, 10, 7] },
  { nombre: "Ana", calificaciones: [10, 9, 9, 8, 7, 8] },
  { nombre: "Luis", calificaciones: [8, 7, 9, 6, 9, 10] },
];

function getStudentAverage(estudiantes) {
  const estudiantesConPromedio = [];
  let totalAverage = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i].nombre;
    const promedio =
      estudiantes[i].calificaciones.reduce((a, b) => a + b, 0) /
      estudiantes[i].calificaciones.length;
    estudiantesConPromedio.push([estudiante, promedio]);
    totalAverage += promedio;
  }
  console.log(estudiantesConPromedio);
  console.log("Total average:", totalAverage / estudiantes.length);
}

getStudentAverage(estudiantes);