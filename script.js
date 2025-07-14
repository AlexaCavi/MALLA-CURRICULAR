const cursos = [
  { nombre: "Diseño I", ciclo: 1 },
  { nombre: "Matemática", ciclo: 1 },
  { nombre: "Diseño II", ciclo: 2 },
  { nombre: "Historia de la Arquitectura", ciclo: 2 },
  // Puedes agregar más cursos
];

const contenedor = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso";
  div.innerText = `${curso.nombre}\n(Ciclo ${curso.ciclo})`;
  div.onclick = () => alert(`Este curso es: ${curso.nombre}`);
  contenedor.appendChild(div);
});
