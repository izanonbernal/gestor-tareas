function agregarTarea() {
  const input = document.getElementById("tarea");
  const lista = document.getElementById("lista");
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  spanTexto.textContent = input.value;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(spanTexto);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
}
