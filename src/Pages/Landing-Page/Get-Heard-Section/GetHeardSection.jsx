import { FaCheck } from "react-icons/fa";
import rockstar from "../../../assets/GetHeard-Section/rockstar.svg";
import { useEffect, useRef } from "react";
const GetHeardSection = () => {
  const rotateRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let offset = 5;
    let animationFrameId;

    const animate = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      offset += delta * 0.005;

      if (rotateRef.current) {
        rotateRef.current.style.transform = `rotate(-${
          offset == 0 ? 10 : offset
        }deg)`;
      }

      lastScrollY = scrollY;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <div className="bg-[#101729] text-white ">
      <div className="hero   min-h-screen overflow-hidden">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-4 lg:gap-4 gap-y-9 items-center justify-items-center-safe pb-20 pt-16">
          <div className="space-y-3 max-w-lg px-4">
            <h1 className="text-5xl poppins-bold ">Get heard</h1>
            <div className="text-sm">
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Global music distribution to 100+ services
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Reach 50 million music users worldwide
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Free barcodes and IRSC codes
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Free iTunes pre-orders
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Free pre-saves and release day smartURLs
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Dedicated support team
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Free delivery to new stores
              </p>
              <p className="py-2 poppins-regular flex items-center gap-4">
                <FaCheck />
                Royalty Payments direct to your bank or mobile money account
              </p>
            </div>
          </div>
          <div
            ref={rotateRef}
            className="card w-60 text-black bg-white shadow-sm transition-transform ease-linear duration-500 will-change-transform"
          >
            <figure className="bg-[#7f2ccb] py-5">
              <img src={rockstar} alt="" />
            </figure>
            <div className="card-body items-center">
              <div className="mt-6">
                <div className="text-center font-semibold  text-xl space-y-2.5">
                  <p>
                    Keep 100% of <br /> royalties
                  </p>
                  <p>
                    Unlimited <br /> release, for <br /> 160GHS per <br /> year
                  </p>
                </div>
                <button className="btn bg-[#FFE3A9] border-[#FFE3A9] xl:btn-lg lg:btn-lg md:btn-lg btn-md rounded-full shadow-none mt-5 text-black">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHeardSection;
