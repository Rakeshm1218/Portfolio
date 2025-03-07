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
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
        {/* <button  className="text-sm px-4 py-2 border rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
            Resume
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
