import { motion } from "framer-motion";
import { FaFigma, FaGithub,FaDocker,  FaNodeJs, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";


function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tech-Stack</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          className="rounded-2xl border-4  border-neutral-800 p-4 hover:border-neutral-600 transition duration-200  "
         
          
        >
          <SiMongodb
            style={{ color: "#47A248" }}
            className="text-7xl text-cyan-400 "
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <SiExpress className="text-7xl text-white-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <FaNodeJs
            style={{ color: " #339933" }}
            className="text-7xl text-cyan-400"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <FaFigma
            style={{ color: "#A259FF" }}
            className="text-7xl text-red-400"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <FaPython
            style={{ color: " #FFD43B" }}
            className="text-7xl text-white-400"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
        <TbBrandCpp className="text-7xl text-white-400" />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <SiMysql
            style={{ color: " #5D9B9F " }}
            className="text-7xl text-white-400"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <FaGithub
            style={{ color: "white" }}
            className="text-7xl text-white-400"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4  hover:border-neutral-600 transition duration-200">
          <FaDocker
            style={{ color: "#2496ED" }}
            className="text-7xl text-white-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Tech;
