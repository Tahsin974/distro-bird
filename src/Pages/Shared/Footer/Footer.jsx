import { FaFacebook, FaTwitter } from "react-icons/fa";
import bgImg from "../../../assets/Footer/footer.svg";
import logo from "../../../assets/Logo/logo.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer footer-horizontal footer-center bg-[#101729] min-h-[50vh] text-white rounded p-10"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img src={logo} alt="Distro Bird Logo" className="w-[300px]   h-auto" />
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover poppins-regular">Contact Us</a>
          <a className="link link-hover poppins-regular">Tieme Music</a>
          <a className="link link-hover poppins-regular">Terms of Service</a>
          <a className="link link-hover poppins-regular">Privacy Policy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="#"
              className="btn btn-circle text-white bg-[#263149] border border-[#263149] "
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="btn btn-circle text-white bg-[#263149] border border-[#263149] "
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="btn btn-circle text-white bg-[#263149] border border-[#263149] "
            >
              <PiInstagramLogoFill size={20} />
            </a>
            <a
              href="#"
              className="btn btn-circle text-white bg-[#263149] border border-[#263149] "
            >
              <IoLogoYoutube size={20} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Tieme Distribution. All
            rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
