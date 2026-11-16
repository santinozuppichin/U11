let listaDeSuper = [];

function logItems(arreglo) {
  arreglo.forEach(function (producto, indice) {
    console.log(indice + ": " + producto);
  });
}

let comando = "";

while (comando !== "salir") {
  comando = prompt("Ingresá un comando: nuevo, listar, borrar o salir");

  if (comando === null) {
    comando = "salir";
  }

  comando = comando.trim().toLowerCase();

  if (comando === "nuevo") {
    let item = prompt("¿Qué producto querés agregar?");
    if (item !== null && item.trim() !== "") {
      listaDeSuper.push(item.trim());
      console.log("Agregado: " + item.trim());
    }
  } else if (comando === "listar") {
    if (listaDeSuper.length === 0) {
      console.log("La lista está vacía.");
    } else {
      logItems(listaDeSuper);
    }
  } else if (comando === "borrar") {
    let indice = Number(prompt("Ingresá el índice del producto a eliminar:"));
    if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
      let eliminado = listaDeSuper.splice(indice, 1);
      console.log("Se eliminó: " + eliminado[0]);
    } else {
      console.log("Índice inválido.");
    }
  } else if (comando !== "salir") {
    alert("Comando no válido. Usá: nuevo, listar, borrar o salir.");
  }
}

console.log("Programa finalizado.");