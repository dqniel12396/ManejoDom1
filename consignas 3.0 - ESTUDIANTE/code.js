/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

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
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona

  datosPersona.nombre = prompt("ingresa tu nombre");
  datosPersona.edad = prompt("ingresa el año en que naciste");
  // if (isNaN(datosPersona.edad)) {
  //   alert("El año de nacimiento debe ser un número válido.");
  //   return;
  // }
  datosPersona.ciudad = prompt("ingrese la ciudad donde vives");
  datosPersona.interesPorJs = confirm("te interesa Javascript");

  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - datosPersona.edad;

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreh = document.querySelector("#nombre");
  nombreh.textContent = datosPersona.nombre;

  const edadh = document.querySelector("#edad");
  edadh.textContent = datosPersona.edad;

  const ciudadh = document.querySelector("#ciudad");
  ciudadh.textContent = datosPersona.ciudad;

  const javascripth = document.querySelector("#javascript");
  javascripth.textContent = datosPersona.interesPorJs ? "Sí" : "No";


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const fila = document.getElementById("fila");
  
  // Verificar si la fila ya tiene contenido
  if (fila.children.length === 0) {
    listado.forEach((item) => {
      const caja = document.createElement("div");
      caja.classList.add("caja");

      const imagen = document.createElement("img");
      imagen.src = item.imgUrl;
      imagen.alt = item.lenguajes;
      caja.appendChild(imagen);

      const parrafoLenguaje = document.createElement("p");
      parrafoLenguaje.textContent = `Lenguajes: ${item.lenguajes}`;
      caja.appendChild(parrafoLenguaje);

      const bimestre = document.createElement("p");
      bimestre.textContent = `Bimestre: ${item.bimestre}`;
      bimestre.classList.add("bimestre");
      caja.appendChild(bimestre);

      fila.appendChild(caja);
    });
  }
    }
  


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  const botonTema = document.querySelector("cambiar-tema");
  const sitio = document.getElementById("sitio");
  
  if (!sitio.classList.contains("dark")) {
    sitio.classList.add("dark");
  } else {
    sitio.classList.remove("dark");
  }
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const mi = document.getElementById("sobre-mi");

document.addEventListener("keydown", function(event){
  if (event.key === "f"|| event.key === 'F')
    {
      document.getElementById("sobre-mi").classList.remove("oculto");
    } 
}




);
