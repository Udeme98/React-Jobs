import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-700">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved.
          </div>
          <div>
            <img src="img/logo-white.svg" className="h-8" />
          </div>
          <div className="flex justify-center space-x-4">
            <Link to="#">
              <img src="img/icon-facebook.svg" />
            </Link>
            <Link to="#">
              <img src="img/icon-youtube.svg" />
            </Link>
            <Link to="#">
              <img src="img/icon-twitter.svg" />
            </Link>
            <Link to="#">
              <img src="img/icon-pinterest.svg" />
            </Link>
            <Link to="#">
              <img src="img/icon-instagram.svg" />
            </Link>
          </div>
        </div>

        <div className="flex justify-around space-x-32 md:space-x-0">
          <div className="flex flex-col space-y-3 text-white md:flex-row md:space-x-10 md:space-y-0">
            <Link to="#" className="hover:text-brightRed">
              Home
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Pricing
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Product
            </Link>
            <Link to="#" className="hover:text-brightRed">
              About
            </Link>
          </div>
        </div>

        <div className="hidden text-white md:block">
          Copyright &copy; 2023. All Right Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
