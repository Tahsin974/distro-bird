import img1 from "../../../assets/Store-Section/audiomack.svg";
import img2 from "../../../assets/Store-Section/deezer.svg";
import img3 from "../../../assets/Store-Section/googleplay.svg";
import img4 from "../../../assets/Store-Section/music.svg";
import img5 from "../../../assets/Store-Section/shazam.svg";
import img6 from "../../../assets/Store-Section/tieme.svg";
import img7 from "../../../assets/Store-Section/jio.svg";
import img8 from "../../../assets/Store-Section/boomplay.svg";
import img9 from "../../../assets/Store-Section/triller.svg";
import img10 from "../../../assets/Store-Section/spotify.svg";
import img11 from "../../../assets/Store-Section/music2.svg";
import img12 from "../../../assets/Store-Section/youtube.svg";
import img13 from "../../../assets/Store-Section/tidal.svg";
import img14 from "../../../assets/Store-Section/kkbox.svg";
import img15 from "../../../assets/Store-Section/instagram.svg";
import img16 from "../../../assets/Store-Section/tiktok.svg";
import img17 from "../../../assets/Store-Section/meta.svg";
import { useEffect, useRef } from "react";
// The main StoreSection component

const StoreSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let offset1 = 140,
      offset2 = 160,
      offset3 = 180;

    const animate = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      offset1 += delta * 0.12;
      offset2 += delta * 0.16;
      offset3 += delta * 0.18;

      if (row1Ref.current)
        row1Ref.current.style.transform = `translateX(-${offset1}px)`;
      if (row2Ref.current)
        row2Ref.current.style.transform = `translateX(-${offset2}px)`;
      if (row3Ref.current)
        row3Ref.current.style.transform = `translateX(-${offset3}px)`;

      lastScrollY = scrollY;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative py-20">
      <div className="relative hero items-center  min-h-screen overflow-hidden  ">
        {/* Left Blur Effect */}
        <div className="absolute top-0 left-0 h-full xl:w-24 lg:w-24 md:w-24 w-12 bg-[#101729] blur-3xl z-10 pointer-events-none"></div>
        {/* right Blur  Effect*/}
        <div className="absolute top-0 right-0 h-full xl:w-24 lg:w-24 md:w-24 w-12 bg-[#101729] blur-3xl z-10 pointer-events-none"></div>

        {/* Parallax Scroll   */}

        <div className="space-y-10 ">
          <ul
            ref={row1Ref}
            className="flex transition-transform duration-300 will-change-transform  items-center gap-10 "
          >
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img1} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img2} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img3} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img4} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img5} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img6} alt="" />
            </li>
          </ul>
          <ul
            ref={row2Ref}
            className="flex transition-transform duration-300 will-change-transform  items-center gap-10 ms-20"
          >
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img7} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img8} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img9} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img10} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img11} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex ">
              <img className="w-[300px] h-[100px]" src={img12} alt="" />
            </li>
          </ul>
          <ul
            ref={row3Ref}
            className="flex transition-transform duration-500 will-change-transform  items-center gap-10 ms-36"
          >
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img13} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img14} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img15} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img16} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img17} alt="" />
            </li>
            <li className="w-[360px] h-[148px] rounded-md p-16   bg-[#19233a] items-center flex">
              <img className="w-[300px] h-[100px]" src={img6} alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/* Store Section Content Content */}

      <div className="hero  absolute bottom-0 bg-[#101729]/70 h-full">
        <div className="xl:w-5xl lg:w-5xl max-w-5xl flex justify-start">
          <div className="px-4">
            <h1 className="text-5xl poppins-bold">More stores</h1>
            <p className="py-6 poppins-regular">
              We work with over 100 online music stores and <br />
              streaming services accross the world to help get your <br /> music
              online.
            </p>
            <button className="btn bg-[#FFE3A9] border-[#FFE3A9] xl:btn-lg lg:btn-lg md:btn-lg btn-md rounded-full shadow-none mt-5 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
