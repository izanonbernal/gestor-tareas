function agregarTarea() {
  const input = document.getElementById("tarea");
  const lista = document.getElementById("lista");
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  spanTexto.textContent = input.value;

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = () => {
    const nuevoTexto = prompt("Nuevo texto de la tarea:", spanTexto.textContent);
    if (nuevoTexto && nuevoTexto.trim()) {
      spanTexto.textContent = nuevoTexto;
    }
  };

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(spanTexto);
  li.appendChild(btnEditar);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
}
