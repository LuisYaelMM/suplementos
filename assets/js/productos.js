let arregloProductos;

fetch("http://localhost:8080/productos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    arregloProductos = data;
    desplegar();
  })
  .catch((e) => {
    console.log(e);
  });

console.log(arregloProductos);

function desplegarFiltro(filtro) {
  document.getElementById("productos_despliegue").innerHTML = "";
  arregloProductos.forEach((element) => {
    if (filtro == element.categoria) {
      const box = document.createElement("div");
      box.classList = "card m-4 shadow";
      box.innerHTML = `
    
    <a href="#">
    <img
    src="${element.imagen_frontal}"
    class="card-img-top"
    height="150"
    alt="chocho1"
    />
    </a>
    <div class="card-body" >
    <p class="card-text fw-bold">${element.marca}</p>
    <small class="text-secondary "> ${element.precio}.00 </small>
    </div>
    `;
      document.getElementById("productos_despliegue").appendChild(box);
    }
  });
}
function desplegar() {
  document.getElementById("productos_despliegue").innerHTML = "";
  arregloProductos.forEach((element) => {
    const box = document.createElement("div");
    box.classList = "card m-4 shadow";
    box.innerHTML = `
    
    <a href="#">
    <img
    src="${element.imagen_frontal}"
    class="card-img-top"
    height="150"
    alt="chocho1"
    />
    </a>
    <div class="card-body" >
    <p class="card-text fw-bold">${element.marca}</p>
    <small class="text-secondary "> ${element.precio}.00 </small>
    </div>
    `;
    document.getElementById("productos_despliegue").appendChild(box);
  });
}
