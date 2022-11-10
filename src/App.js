import image from "../src/images/per.png";
import im2 from "../src/images/plo2.jpg";
import im1 from "../src/images/plo1.png";
import im3 from "../src/images/plo3.png";
import "./App.css";
export default function App() {
  const estilos = {
    h1: " text-3xl  font-bold text-slate-200 flex h-full flex-col transition transform  text-center border-y-4 border-sky-500  mx-8 rounded-2xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  cursor-pointer py-4  tracking-widest tracking-wider ",
    h8: "text-7xl  font-extrabold text-slate-200 flex h-full flex-col ",
    p: "text-gray-300 text-xl",
    containerli: "mt-0.5 ml-4 mb-6 ",
    pli: "text-slate-300 text-md",
  };

  return (
    <div className=" flex flex-row  bg-gradient-to-r  from-indigo-900   to-blue-900   border border-black  ">
      <section
        id="panel izquierdo"
        className=" sticky top-0 flex border border-black h-full"
      >
        <section className="sticky top-0   justify-evenly  flex  w-max  h-screen   border border-black flex-col">
          <div>
            <h1 className={estilos.h1}>About</h1>
          </div>
          <div>
            <h1 className={estilos.h1}>Projects</h1>
          </div>
          <div>
            <h1 className={estilos.h1}>Skills</h1>
          </div>
          <div>
            <h1 className={estilos.h1}>Contact</h1>
          </div>
        </section>
      </section>
      <div className="w-1/5"></div>
      <section
        id="contenido"
        className="p-5 flex w-4/5  flex-col border border-white h-full w-full"
      >
        <div id="imagen y nombre" class="flex justify-center items-center ">
          <div>
            <img
              className=" max-w-lg opacity-90  rounded-3xl grayscale"
              src={image}
              alt="imagen de perfil"
            ></img>
          </div>
          <div>
            <h1 id="nombre" className={estilos.h8}>
              {" "}
              Maicol Ortiz <br />
            </h1>
            <p className="text-red-500 text-7xl font-bold" id="dev">
              Developer Web
            </p>
          </div>
        </div>
        <div id="about parrafo">
          <p className={estilos.p}>
            Me Encanta la Tecnologia!!!
            <br />
            Siempre he sido un Curioso con las diferentes tecnologias que
            aparecen y como estas se va desarrollando dia tras dia.
            <br />
            Tengo gran capacidad de resiliencia y adaptacion , me puedo adaptar
            a lo que se requiera adaptarse, soy un gran entusiasta con muchas
            ganas de colaborar en equipo y mejorar en mis habilidades dia tras
            dia para lo que se requiera.
            <br />
            Año 2022-(HENRY) Mi Formacion mas destacada fue con Henry, en donde
            desarrolle mis habilidades en el frontend y backend , ya venia con
            un aprendizaje de programacion pero mas del 90% fue nuevo para mi y
            logre adaptarme y aprender muchisimas tecnologias nuevas. Año
            2022-(Oracle Next Education) Esta formacion adicional me ayudo
            muchisimo para reforzar mis competencias y habilidades en la parte
            frontend y el uso de git para el trabajo en equipo en el Proyecto
            Final de Henry .<br />
            asdasd
          </p>
          <ol class="border-l border-gray-300">
            <li>
              <div class="flex flex-start items-center pt-2 ">
                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3 "></div>
                <p class={estilos.pli}>2015-2018</p>
              </div>
              <div class={estilos.containerli}>
                <h4 class="text-slate-400 font-bold text-xl mb-1.5">
                  Universidad (incompleto)
                </h4>
                <p class="text-slate-300 mb-3">
                  Estudie 3 Años de Ingenieria de Sistemas en la Universidad De
                  La Amazonia donde aprendi programacion con java, distintos
                  niveles de matematicas y fisica, entre otros.
                </p>
              </div>
            </li>
            <li>
              <div class="flex flex-start items-center pt-2 ">
                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3 "></div>
                <p class={estilos.pli}>2021</p>
              </div>
              <div class={estilos.containerli}>
                <h4 class="text-slate-400 font-bold text-xl mb-1.5">
                  Diseñador Publicitario en Servicios de Plomeria
                </h4>
                <p class="text-slate-300 mb-3">
                  Encargado de la atencion al cliente y creacion de contenido
                  publicitario en facebook y whatsapp para la empresa plomeros24.
                  En la ciudad de Ibague-Tolima en Colombia.
                </p>
              
                <div class="flex    border-y-4 border-sky-500">
                  <div  className=" px-2">
                    <img
                      src={im1}
                      class="  h-48  rounded-lg"
                      alt=""
                    />
                  </div>

                  <div class="px-2">
                    <img
                      src={im2}
                      class=" h-48  rounded-lg"
                      alt=""
                    />
                  </div>
                  <div class="px-2">
                    <img
                      src={im3}
                      class="h-48   rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <div className="w-1/5"></div>
    </div>
  );
}
