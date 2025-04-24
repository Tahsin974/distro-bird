import bgImg from "../../../assets/Hero-Section/Banner.jpg";
import img from "../../../assets/Hero-Section/img.png";
const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="flex-col text-white text-center space-y-28 px-4 xl:py-50 lg:py-50 py-40">
        <div className="flex justify-center relative text-white">
          <h1 className=" text-7xl  poppins-bold z-10  mb-6 ">GET</h1>
          <figure className="absolute w-[300px] -bottom-20">
            <img src={img} alt="" className=" w-full -rotate-6 mx-auto" />
          </figure>
        </div>
        <div>
          <p className="text-lg poppins-regular">
            Share and Monetize,
            <br /> Your music to the World !
          </p>

          <button className="btn bg-[#FFE3A9] border-[#FFE3A9] xl:btn-lg lg:btn-lg md:btn-lg btn-md rounded-full shadow-none mt-5 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
