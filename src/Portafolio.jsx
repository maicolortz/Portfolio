import image from "../src/images/per.png";
import im2 from "../src/images/plo2.jpg";
import im1 from "../src/images/plo1.png";
import im3 from "../src/images/plo3.png";
import reactimage from "../src/images/react.png"
import postgres from "../src/images/postgres.png"
import redux from "../src/images/redux.png"
import tailwind from "../src/images/tailwind.png"
import js from "../src/images/javascript.png"
import html from "../src/images/html.png"
import node from "../src/images/node.png"
import express from "../src/images/express-js.png"
import css from "../src/images/css.png"
import "./App.css";
import { HashLink } from "react-router-hash-link";
import { Route, Router } from "react-router-dom";
export default function Portafolio() {
  const estilos = {
    h1: " text-3xl  font-bold text-slate-200 flex h-full flex-col transition transform  text-center border-y-4 border-sky-500  mx-8 rounded-2xl hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  cursor-pointer py-4  tracking-widest tracking-wider ",
    h1NE: "text-3xl  font-bold text-slate-200 flex h-full flex-col transition transform  text-center border-y-4 border-sky-500  mx-8 rounded-2xl py-4 my-20",

    h8: "text-7xl  font-extrabold text-slate-200 flex h-full flex-col ",
    p: "text-gray-300 text-xl",
    containerli: "mt-0.5 ml-4 mb-6 ",
    pli: "text-slate-300 text-md",
  };

  return (
    <div className=" flex   bg-gradient-to-r  from-indigo-900  justify-content to-blue-900   border border-black  ">
      <section
        id="panel izquierdo"
        className=" sticky top-0 flex border border-black h-full w-max"
      >
        <section className="sticky top-0   justify-evenly  flex  w-max  h-screen   border border-black flex-col">
          <div>
            <HashLink to="#about">
              <h1 className={estilos.h1}>About</h1>
            </HashLink>
            
          </div>
          <div>

            <h1 className={estilos.h1}>Projects</h1>
            
          </div>
          <div>
            <HashLink to="#skills">

            <h1 className={estilos.h1}>Skills</h1>
            </HashLink>
          </div>
          <div>
            <h1 className={estilos.h1}>Contact</h1>
          </div>
        </section>
      </section>
      <section
        id="home"
        className="p-5 flex w-4/5  flex-col border border-white h-full w-max justify-content"
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
          <p className="text-slate-300 mb-3">
            <strong className=" text-slate-200 bg-red-800 rounded red">
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
          <h3 className={estilos.h1NE}>linea de tiempo</h3>
          <ol class="border-l border-gray-300">
            <li>
              <div class="flex flex-start items-center pt-2 ">
                <div class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3 "></div>
                <p class={estilos.pli}>2015-2018</p>
              </div>
              <div class={estilos.containerli}>
                <h4 class="text-slate-400 font-bold text-xl mb-1.5">
                  Universidad (incompleto 🧑‍🎓 )
                </h4>
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
                <h1 className={estilos.h1NE}>skills</h1>
                <div className="flex  flex-wrap  content-center justify-center ">
                    <img className=" h-32 rounded-lg" src={reactimage}></img>
                    <img  className="h-32  rounded-lg"src={express}></img>
                    <img className="h-32  rounded-lg"src={html}></img>
                    <img className="h-32  rounded-lg"src={redux}></img>
                    <img className="h-32  rounded-lg"src={css}></img>
                    <img className="h-32  rounded-lg"src={js}></img>
                    <img className="h-32  rounded-lg"src={tailwind}></img>
                    <img className="h-32  rounded-lg"src={postgres}></img>
                    <img className="h-32  rounded-lg"src={node}></img>
                </div>
        </section>
      </section>
    </div>
  );
}
