import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-700">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 md:items-center">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved.
          </div>
          <div>
            <img className="h-10 w-auto mb-5" src={logo} alt="React Jobs" />
          </div>
          <div className="flex justify-center space-x-4">
            <FaYoutube className="inline-block text-3xl text-white cursor-pointer" />
            <FaLinkedin className="inline-block text-3xl text-white cursor-pointer" />
            <FaTwitter className="inline-block text-3xl text-white cursor-pointer" />
            <FaFacebook className="inline-block text-3xl text-white cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-around space-x-32 md:space-x-0">
          <div className="flex flex-col space-y-3 text-white md:flex-row md:space-x-10 md:space-y-0">
            <Link to="/" className="font-bold text-lg">
              Home
            </Link>
            <Link to="#" className="font-bold text-lg">
              About
            </Link>
            <Link to="/jobs" className="font-bold text-lg">
              Jobs
            </Link>
            <Link to="#" className="font-bold text-lg">
              FAQ
            </Link>
          </div>
        </div>

        <div className="hidden text-white md:block">
          Copyright &copy; 2024. All Right Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
