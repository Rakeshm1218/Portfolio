import Logo from "../assets/Logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="h-14" src={Logo} alt="logo" />
      </div>
      <div className="text-white text-2xl flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/rakesh-m-0b64072b0/"><FaLinkedin /></a>
        <a href="https://github.com/Rakeshm1218"><FaGithub /></a>
        <button  className="text-sm px-4 py-2 border rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
            <a href="https://drive.google.com/file/d/1heSxMZAc6HirVJzkz9nxFeb1Kbsox5aP/view?usp=drive_link" target="_blank">Resume</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
