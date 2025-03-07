import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* HTML */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-orange-500 duration-300 ease-in">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>

        {/* CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-blue-500 duration-300 ease-in">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>

        {/* JavaScript */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-yellow-400 duration-300 ease-in">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>

        {/* React.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-cyan-400 duration-300 ease-in">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        {/* Next.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-gray-400 duration-300 ease-in">
          <TbBrandNextjs className="text-7xl text-gray-300" />
        </div>

        {/* MongoDB */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-green-400 duration-300 ease-in">
          <SiMongodb className="text-7xl text-green-400" />
        </div>

        {/* Java */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-red-500 duration-300 ease-in">
          <FaJava className="text-7xl text-red-500" />
        </div>

        {/* Node.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-green-500 duration-300 ease-in">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
