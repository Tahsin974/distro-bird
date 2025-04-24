import BGimg from "../../assets/Page-Title/pageTitle.jpg";
const Pagetitle = ({ subHeading, children }) => {
  return (
    <div className="relative">
      <div
        className=" hero lg:h-[400px] md:h-[400px] sm:h-[400px] h-[300px]  w-full bg-center bg-cover object-cover "
        style={{
          backgroundImage: `url(${BGimg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div>
            <h1 className="  lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold ">
              {children}
            </h1>
            <p className="lg:text-xl md:text-xl sm:text-lg text-base font-semibold">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            fill="#101729"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pagetitle;
