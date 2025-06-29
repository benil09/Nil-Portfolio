import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-20 flex   items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="text-4xl font-bold cursor-pointer ">
          Portfolio
        </a>
      </div>
      <div className="quote  text-xl text-[#FF9933] hidden font-bold md:block">
        || यद् भावं तद् भवति ||
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://github.com/benil09">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_hola_its.nil_/">
          <FaInstagram />
        </a>
        <FaTwitter />
        <a href="https://www.linkedin.com/in/nil-kamal-93945a294/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
