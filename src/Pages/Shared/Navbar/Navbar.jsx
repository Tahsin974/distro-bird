import { useRef } from "react";
import logo from "../../../assets/Logo/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const Navbar = ({ children }) => {
  // const [activeLink, setActiveLink] = useState(
  //   localStorage.getItem("activeLink")
  // );

  const drawerRef = useRef(null);
  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  const navOptions = (
    <>
      <li>
        <a
          href="/home"
          className={`duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 `}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className={` duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className={` duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4`}
        >
          Blogs
        </a>
      </li>
    </>
  );
  // useEffect(() => {
  //   setActiveLink(location.pathname);
  //   localStorage.setItem("activeLink", location.pathname);
  // }, [location.pathname]);
  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer-3"
          ref={drawerRef}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar lg:px-28 md:px-10  fixed top-0 bg-transparent lg:absolute z-20 text-white my-8 items-center justify-center ">
            <div className="navbar-start lg:mx-0 ms-auto">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost active:bg-transparent active:border-transparent"
                >
                  <MdOutlineMenu className="text-white" size={30} />
                </label>
              </div>
              <a
                href="/home"
                className="btn btn-ghost hover:bg-transparent hover:border-transparent hover:shadow-none lg:text-3xl md:text-3xl text-xl lg:mx-0 mx-auto"
              >
                <img src={logo} alt="brand logo" className="h-[60px] w-auto" />
              </a>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <ul className="px-1 menu menu-horizontal text-xl font-semibold space-x-3 ms-30">
                {navOptions}
              </ul>
            </div>
            <div className="navbar-end flex gap-3 items-center">
              <a href="#" className="poppins-regular hidden lg:flex">
                Log In
              </a>
              <a
                href="/access-request"
                target="_blank"
                className="btn bg-[#FFE3A9] border-[#FFE3A9]  btn-md rounded-full shadow-none  text-black"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-30 space-y-4">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-blue-950  min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="ms-auto my-5">
              <button
                onClick={closeDrawer}
                className="btn btn-circle bg-transparent border-transparent text-white shadow-none"
              >
                <IoMdClose size={30} />
              </button>
            </div>
            {navOptions}
            <a
              href="#"
              className="poppins-regular btn bg-[#FFE3A9] border-[#FFE3A9] text-black"
            >
              Log In
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
