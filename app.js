function agregarTarea() {
  const input = document.getElementById("tarea");
  const lista = document.getElementById("lista");
  if (!input.value.trim()) return;
 Eliminar_tarea ;
=======
Editar_tarea;
 main;

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  spanTexto.textContent = input.value;

Eliminar_tarea;
=======
  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = () => {
    const nuevoTexto = prompt("Nuevo texto de la tarea:", spanTexto.textContent);
    if (nuevoTexto && nuevoTexto.trim()) {
      spanTexto.textContent = nuevoTexto;
    }
  };

 main;
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(spanTexto);
 Eliminar_tarea;
  li.appendChild(btnEliminar);
  lista.appendChild(li);

=======
  li.appendChild(btnEditar);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

=======
  const li = document.createElement("li");
  li.textContent = input.value;
  lista.appendChild(li);
 main;
 main;
  input.value = "";
}
