import image from "../src/images/per.png";
import im2 from "../src/images/plo2.jpg";
import im1 from "../src/images/plo1.png";
import im3 from "../src/images/plo3.png";
import reactimage from "../src/images/react.png";
import postgres from "../src/images/postgres.png";
import redux from "../src/images/redux.png";
import tailwind from "../src/images/tailwind.png";
import js from "../src/images/javascript.png";
import html from "../src/images/html.png";
import node from "../src/images/node.png";
import express from "../src/images/express-js.png";
import pf1 from "../src/images/sectionProjects/portafolio_pf_1.png";
import pf2 from "../src/images/sectionProjects/portafolio_pf_2.png";
import pf3 from "../src/images/sectionProjects/portafolio_pf_3.png";
import pi1 from "../src/images/sectionProjects/portafolio_pi_1.png";
import pi2 from "../src/images/sectionProjects/portafolio_pi_2.png";
import pi3 from "../src/images/sectionProjects/portafolio_pi_3.png";
import github from "../src/images/Github-logo.png";
import linkedin from "../src/images/logo-linkedin.png";
import emailjs from "emailjs-com";
import css from "../src/images/css.png";
import "./App.css";
import { HashLink } from "react-router-hash-link";
import { Route, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
export default function Portafolio() {
  const estilos = {
    h1: "font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-400 text-3xl  font-bold text-slate-200 flex h-full flex-col   transition transform  text-center border-b-4 border-sky-500  mx-2 rounded-2xl hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  cursor-pointer py-2  tracking-widest tracking-wider shadow-lg shadow-blue-700 hover:shadow-sm ",
    h1NE: "text-3xl  font-bold text-slate-200 flex h-full flex-col transition transform  text-center border-y-4 border-sky-500  mx-8 rounded-2xl py-4 my-20",
    h1_down:
      "text-3xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-400 flex h-full flex-col transition transform  text-center border-x-4 border-sky-500  mx-8 rounded-2xl py-4 mt-32 my-20",
    linkGrande: "text-3xl  font-extrabold text-slate-400  ",

    h8: "text-7xl  font-extrabold text-slate-200 flex h-full flex-col ",
    p: "text-gray-300 text-xl",
    p_2: "text-slate-300 mb-3",
    containerli: "mt-0.5 ml-4 mb-6 ",
    pli: "text-slate-300 text-md",
    tittle: "text-slate-300 font-bold text-2xl mb-1.5",
    subtittle: "text-slate-400 font-bold text-xl mb-1.5",
    input:
      " bg-gradient-to-r from-slate-200  to-slate-300 rounded p-2 text-x w-full text-slate-700 active-slate-300",
    label: "text-md text-neutral-400 px-2 ",
    button:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-1 w-32",
  };
  const enviaremail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yyiek8l",
        "template_h374dyb",
        e.target,
        "sY_mOvM-y021g3XnS"
      )
      .then((res) => {
        swal({
          title: "Excelente, me comunicare contigo lo mas pronto posible",
          icon: "success",
        }).then(e.target.reset());
      });
  };
  return (
    <div className=" flex   bg-gradient-to-r  from-indigo-900  justify-center to-blue-900    ">
      <section
        id="panel izquierdo"
        className=" sticky top-0 flex  h-full w-max"
      >
        <section className="sticky top-0   justify-evenly  flex  w-max  h-screen    flex-col border-double border-4 border-sky-500 rounded-md">
          <div>
            <HashLink to="#about">
              <h1 className={estilos.h1}>🕵️About</h1>
            </HashLink>
          </div>
          <div>
            <HashLink to="#skills">
              <h1 className={estilos.h1}>🦾Skills</h1>
            </HashLink>
          </div>
          <div>
            <HashLink to="#projects">
              <h1 className={estilos.h1}>🚩Projects</h1>
            </HashLink>
          </div>
          <div>
            <HashLink to="#contact">
              <h1 className={estilos.h1}>📞Contact</h1>
            </HashLink>
          </div>
          <div className="flex flex-row content-center justify-center">
            <a
              className={estilos.linkGrande}
              href="https://github.com/maicolortz"
              target="_blank"
              rel="noopener"
            >
              <img
                className="w-12 hover:-translate-y-1 motion-reduce:transition-none cursor-pointer "
                src={github}
              ></img>
            </a>
            <a
              className={estilos.linkGrande}
              href="https://www.linkedin.com/in/maicol-ortiz2897/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="w-12 hover:-translate-y-1 motion-reduce:transition-none cursor-pointer"
                src={linkedin}
              ></img>
            </a>
          </div>
        </section>
      </section>
      <section
        id="home"
        className="p-5 flex w-4/5  flex-col  h-full max-w-screen-lg	 justify-center"
      >
        <div id="about" class="flex justify-center items-center ">
          <div>
            <img
              className=" max-w-lg opacity-90  rounded-3xl grayscale"
              src={image}
              alt="imagen de perfil"
            ></img>
          </div>
          <div>
            <h2 id="nombre" className={estilos.h8}>
              <strong className=" font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-400 ">
                Maicol Ortiz
              </strong>{" "}
            </h2>
            <p id="dev">
              <strong className=" font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-500 to-red-600 ">
                Developer Web
              </strong>
              <br />
            </p>
          </div>
        </div>
        <div id="about parrafo">
          <p className="text-slate-300 mb-3">
            <strong className=" font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 ">
              Me encanta el Desarrollo Web!!!
            </strong>
            <br />
            Siempre he sido curioso con las diferentes tecnologias cada vez que
            aparecen y como estas se va desarrollando dia tras dia. Me gusta
            tener retos que permitan ir a un nivel mas alla de donde estoy y asi
            probar de que estoy hecho. Me gustan los videojuegos, la lectura y
            el deporte💪🏁📙
            <br />
            <br />
          </p>
          <h3 className={estilos.h1_down}>Time Line</h3>
          <ol class="border-l border-gray-300">
            <li>
              <div class="flex flex-start items-center pt-2 ">
                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3 "></div>
                <p class={estilos.pli}>2015-2018</p>
              </div>
              <div class={estilos.containerli}>
                <h4 class={estilos.subtittle}>Universidad (incompleto 🧑‍🎓 )</h4>
                <p class="text-slate-300 mb-3">
                  Estudie 3 Años de Ingenieria de Sistemas en la Universidad De
                  La Amazonia, donde aprendi programacion con java, varios
                  niveles de matematicas, fisica, biologia, quimica, estadistica
                  entre otros campos que enriquecieron mi contexto.
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
                  Diseñador Publicitario en Servicios de Plomeria 💪
                </h4>
                <p class="text-slate-300 mb-3">
                  Encargado de la atencion al cliente y creacion de contenido
                  publicitario en facebook y whatsapp para la empresa
                  plomeros24. En la ciudad de Ibague-Tolima en Colombia. Algunos
                  trabajos que hize fueron los siguientes:
                </p>

                <div class="flex    border-y-4 border-sky-500">
                  <div className=" px-2">
                    <img src={im1} class="  h-48  rounded-lg" alt="" />
                  </div>

                  <div class="px-2">
                    <img src={im2} class=" h-48  rounded-lg" alt="" />
                  </div>
                  <div class="px-2">
                    <img src={im3} class="h-48   rounded-lg" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="flex flex-start items-center pt-2 ">
                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3 "></div>
                <p class={estilos.pli}>2022</p>
              </div>
              <div class={estilos.containerli}>
                <h4 class="text-slate-400 font-bold text-xl mb-1.5">
                  Oracle Next Education (Bootcamp flexible time 🧑‍🎓 )
                </h4>
                <p class="text-slate-300 mb-3">
                  Esta formacion se trato del desarrollo de habilidades frontend
                  como Html, Css, Javascript, Css3 y Git. Adicionalmente me
                  permitio tener mas fluidez en el desarrollo del proyecto final
                  de Henry, gracias al aprendizaje en git se me facilito la
                  organizacion del equipo en github y la dispersion de dudas de
                  mis compañeros con todo lo relacionado a ramas y cambios en
                  git .
                </p>
              </div>
              <div class={estilos.containerli}>
                <h4 class="text-slate-400 font-bold text-xl mb-1.5">
                  Henry (Bootcamp full time 🧑‍🎓){" "}
                </h4>
                <p class="text-slate-300 mb-3">
                  Mi Formacion mas destacada este año fue con Henry, en donde
                  desarrolle mis habilidades de desarrollo web fullstack. Debido
                  a la alta intensidad del Bootcamp y tambien porque estaba
                  estudiando a la par el bootcamp de Oracle, logre adaptarme y
                  aprender muchisimas tecnologias nuevas y desarrollar las
                  skills mencionadas aqui en el 💼portafolio.
                  <br />
                  Desarrolle 2 Proyectos con Henry, 🐺Pi-Dogs y
                  🚗🚕🚓🛺🚙Cars-Market
                </p>
              </div>
            </li>
          </ol>
        </div>
        <section id="skills" className="flex flex-col">
          <h2 className={estilos.h1_down}>skills</h2>
          <div className="flex  flex-wrap  content-center justify-between ">
            <img className=" h-32 sm:24 rounded-lg" src={reactimage}></img>
            <img className="h-32 m-1  rounded-lg" src={express}></img>
            <img className="h-32 m-1 rounded-lg" src={html}></img>
            <img className="h-32 m-1 rounded-lg" src={redux}></img>
            <img className="h-32 m-1 rounded-lg" src={css}></img>
            <img className="h-32 m-1 rounded-lg" src={js}></img>
            <img className="h-32 m-1 rounded-lg" src={tailwind}></img>
            <img className="h-32 m-1 rounded-lg" src={postgres}></img>
            <img className="h-32 m-1 rounded-lg" src={node}></img>
          </div>
        </section>
        <section id="projects">
          <h2 className={estilos.h1_down}>Projects</h2>
          <div className=" flex content-center  flex-col">
            <div id="pf"></div>
            <div>
              <h1 className="py-9">
                <a
                  className={estilos.linkGrande}
                  href="https://carsmarket.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  👆Cars_Market- visit Project
                </a>
              </h1>
              <p className={estilos.p_2}>
                Este proyecto fue hecho entre 5 personas:
                <br />
                <p className="text-cyan-500">
                  {" "}
                  Maicol Ortiz Hernandez, Franco Navarro, Luis Fernando Alvares,
                  Jose Manuel Lezema y Hector Horacio Heredia.
                </p>
                <br />
                Estuvimos desarrollando una pagina de vehiculos con una amplia
                variedad de servicios que incluyen :<br />
                🩸Busqueda de vehiculo
                <br />
                🩸Publicar un vehiculo
                <br />
                🩸Contactar con el vendedor del producto
                <br />
                🩸servicio de Mercadopago
                <br />
                🩸notificaciones de email
                <br />
                🩸Registrarse en la pagina
                <br />
                🩸Panel de usuario donde podia gestionar sus publicaciones (
                crear , editar, pausar y marcar como vendido)
                <br />
                🩸Panel de administrador( bloquear usuarios , pausar y Editar
                cualquier publicacion de cualquier usuario registrado)
              </p>
            </div>
            <div class="flex    border-y-4 border-sky-500">
              <div className=" px-2">
                <img src={pf1} class="  h-48  rounded-lg" alt="" />
              </div>

              <div class="px-2">
                <img src={pf2} class=" h-48  rounded-lg" alt="" />
              </div>
              <div class="px-2">
                <img src={pf3} class="h-48   rounded-lg" alt="" />
              </div>
            </div>
            <div id="pi"></div>
          </div>
          <div className=" flex content-center  flex-col">
            <div id="pf"></div>
            <div>
              <h1 className="py-9">
                <a
                  className={estilos.linkGrande}
                  href="https://pi-dogs-peach.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  👉Pi_Dogs- visit Project
                </a>
              </h1>
              <p className={estilos.p_2}>
                Estuve desarrollando una single Page de perros, que incluye
                caracteristicas como
                <br />
                🩸Busqueda de perro
                <br />
                🩸Publicar un perro
                <br />
                🩸ordenar perros por tamaño,
                <br />
                🩸ordenar por alfabeto
                <br />
                🩸filtrar por temperamento
                <br />
              </p>
            </div>
            <div class="flex    border-y-4 border-sky-500">
              <div className=" px-2">
                <img src={pi1} class="  h-48  rounded-lg" alt="" />
              </div>

              <div class="px-2">
                <img src={pi2} class=" h-48  rounded-lg" alt="" />
              </div>
              <div class="px-2">
                <img src={pi3} class="h-48   rounded-lg" alt="" />
              </div>
            </div>
            <div id="pi"></div>
          </div>
        </section>
        <section id="contact">
          <h2 className={estilos.h1_down}>contact</h2>
          <div className="flex  py-8 border border-black content-center justify-center w-max-96 ">
            <form
              onSubmit={enviaremail}
              className="border-double border-4 border-sky-500 p-4 rounded-xl"
            >
              <div className="my-2">
                <input
                  name="name"
                  type={"text"}
                  required
                  className={estilos.input}
                  placeholder="name.."
                ></input>
              </div>
              <div className="my-2">
                <input
                  name="email"
                  type={"email"}
                  required
                  className={estilos.input}
                  placeholder=" email.."
                ></input>
              </div>
              <div className="my-2">
                <input
                  name="subject"
                  required
                  className={estilos.input}
                  placeholder="subject.."
                ></input>
              </div>
              <div className="my-2">
                <textarea
                  name="message"
                  required
                  className={estilos.input}
                  cols="37"
                  rows={"5"}
                  placeholder="write your message.."
                ></textarea>
              </div>
              <div className=" flex justify-center  content-center">
                <button type="submit" className={estilos.button}>
                  send
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
