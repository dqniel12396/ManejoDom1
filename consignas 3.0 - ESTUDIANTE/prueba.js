function renderizarMaterias(materias) {
    const fila = document.getElementById("#fila");
  
  
    materias.forEach((materia) => {
      // Crear la tarjeta contenedora
      const caja = document.createElement("div");
      caja.classList.add("caja");
  
      // Agregar imagen
      const imagen = document.createElement("img");
      imagen.src = materia.imgUrl;
      imagen.alt = materia.lenguajes;
      imagen.classList.add("imagen-materia");
      caja.appendChild(imagen);
  
      // Agregar contenedor de información
      const info = document.createElement("div");
      info.classList.add("info-materia");
      caja.appendChild(info);
  
      // Agregar título
      const titulo = document.createElement("h3");
      titulo.textContent = materia.lenguajes;
      info.appendChild(titulo);
  
      // Agregar bimestre
      const bimestre = document.createElement("p");
      bimestre.textContent = materia.bimestre;
      info.appendChild(bimestre);
  
      // Agregar la tarjeta a la fila
      fila.appendChild(caja);
    });
  }
  
  // Ejemplo de uso
  const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  }];
  
  renderizarMaterias(listado);


  materiasBtn.addEventListener("click",  renderizarMaterias);
