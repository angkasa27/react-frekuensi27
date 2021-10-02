import React, { useEffect, useState } from "react";
import SVG, {
  Archive,
  Event,
  Instagram,
  Web,
  XSvg,
  YearBook,
} from "../../assets/svg";
import Grain from "../../assets/grain2.png";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div className="main overflow-x-hidden">
      <Sect1 />

      {/* <section id="sec1" className="sec-base">
        <div className="flex flex-col items-center justify-center h-screen">
          tes
        </div>
      </section> */}
    </div>
  );
}

export function Sect1() {
  // const [textClass, setTextClass] = useState(" opacity-0");
  // const [headClass, setHeadClass] = useState(" opacity-0");
  const [loadClass, setLoadClass] = useState(" ");
  const [grainEff, setGrainEff] = useState(" ");
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(true);

  const desc = [
    "FREKUENSI 27",
    "MOKLET'S FREQUENCY",
    "FREKUENSI 27",
    "THE LEGEND",
  ];

  const blobs = (
    <div>
      <img
        draggable="false"
        src={Grain}
        alt=""
        onLoad={() => setImage(true)}
        className={
          "z-0 absolute top-0 left-0 opacity-80 md:h-auto h-screen " + grainEff
        }
      />
      <img
        draggable="false"
        src={SVG.Blop1}
        alt=""
        className="z-10 absolute -top-64 -right-40 transform -rotate-12 scale-75 noDrag"
      />
      <img
        draggable="false"
        src={SVG.Blop2}
        alt=""
        className="z-10 absolute -bottom-80 -left-60 transform rotate-180 scale-75"
      />
      {/* <img
        draggable="false"
        src={SVG.XGroup}
        alt=""
        className="z-10 absolute -top-24 left-120 transform rotate-180 scale-50"
      /> */}
      <img
        draggable="false"
        src={SVG.Corner}
        alt=""
        className="z-10 absolute top-6 left-3 transform rotate-180 scale-75"
      />
    </div>
  );

  const xAround = (
    <div>
      <XSvg className=" top-48 left-1/3 w-3 h-3 " />
      <XSvg className=" hidden md:block top-24 left-1/5 w-3 h-3 " />
      <XSvg className=" hidden md:block top-2/5 left-36 w-3 h-3 " />
      <XSvg className=" bottom-1/4 left-1/3 w-3 h-3 " />
      <XSvg className=" bottom-36 right-1/4 w-3 h-3 " />
      <XSvg className=" bottom-1/2 right-1/5 w-3 h-3 " />
      <XSvg className=" top-1/5 right-1/3 w-3 h-3  " />
    </div>
  );

  useEffect(() => {
    if (image) {
      setLoadClass(" animate-out");
      setTimeout(() => {
        setLoadClass(" opacity-0");
      }, 500);
      setTimeout(() => {
        // setHeadClass(" animate-blink");
        setLoading(false);
      }, 800);
      // setTimeout(() => {
      //   setTextClass(" animate-blink");
      // }, 2000);
    }
    setGrainEff("animate-grain");
  }, [image]);

  const load = (
    <div
      className={
        "z-50 w-screen h-screen absolute bg-gray-500 flex justify-center items-center " +
        loadClass
      }
    >
      {!image && (
        <p className="text-white h1 mt-8 tracking-widest z-10 ">
          <ReactTypingEffect
            speed={50}
            eraseSpeed={50}
            typingDelay={200}
            text={["memuat...", "sabar..."]}
            cursorRenderer={(cursor) => (
              <span className="font-thin font-nunito">{cursor}</span>
            )}
            displayTextRenderer={(text) => {
              return text;
            }}
          />
        </p>
      )}
    </div>
  );

  return (
    <section id="sec0" className="sec-base relative overflow-hidden">
      {loading && load}
      <div className="flex flex-col items-center justify-center h-screen">
        {/* <p className={"text-white h1 mb-6 z-10" + headClass}>WE ARE</p>  */}
        <p className="text-white h1 mb-6 z-10">WE ARE</p>
        <Logo done={image} />
        {/* <p className={"text-white h1 mt-8 tracking-widest z-10 " + textClass}>   */}
        <p className="text-white h1 mt-8 tracking-widest z-10 mb-20 md:mb-12">
          <ReactTypingEffect
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            text={desc}
            cursorRenderer={(cursor) => (
              <span className="font-thin font-nunito">{cursor}</span>
            )}
            displayTextRenderer={(text) => {
              return text;
            }}
          />
        </p>
      </div>
      <div className="z-10 flex md:flex-col justify-center items-center absolute inset-x-1/2 bottom-16 md:-right-1/3 md:inset-y-1/2 md:my-3 ">
        <a
          href="https://instagram.com/frekuensi27_"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-1 transition duration-100 hover:bg-white hover:bg-opacity-20 rounded-lg mr-6 md:mr-0 md:mb-6"
        >
          <Web className="w-8 h-8 text-white " />
        </a>
        <a
          href="https://instagram.com/frekuensi27_"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-1 transition duration-100 hover:bg-white hover:bg-opacity-20 rounded-lg mr-6 md:mr-0 md:mb-6"
        >
          <Instagram className="w-8 h-8 text-white " />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1EJvtmEEN89cAYJx6qkt71Hy5A3_xE32Q?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-1 transition duration-100 hover:bg-white hover:bg-opacity-20 rounded-lg"
        >
          <Archive className="w-8 h-8 text-white " />
          <div className="w-5 h-5 absolute bg-green-400 animate-ping rounded-full -top-1 -right-1" />
          <div className="w-3 h-3 absolute bg-green-400 rounded-full -top-0 -right-0" />
        </a>
      </div>
      <div className="z-20 absolute bottom-0 left-0 w-screen py-3 flex justify-center">
        <a
          href="https://github.com/angkasa27/react-frekuensi27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs md:text-sm font-code "
        >
          Fly high, higher and higher
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 md:w-5 text-green-500 mx-2"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      {blobs}
      {xAround}
    </section>
  );
}

export function Logo({ done }) {
  const [open, setOpen] = useState(false);
  const [logoClass, setLogoClass] = useState(" ");
  const [logoText, setLogoText] = useState([" opacity-0", " opacity-0"]);

  useEffect(() => {
    if (open) {
      setLogoClass(
        " transform rotate-3 scale-110 bg-white bg-opacity-10 bg-glass"
      );
    } else {
      setLogoClass(" ");
    }
  }, [open]);

  const openMenu = (v) => {
    if (!v) {
      setLogoText([" animate-lineReverse", " animate-line"]);
      setTimeout(() => {
        setLogoText([" ", " "]);
      }, 200);
    } else {
      setLogoText([" animate-lineReverseOut", " animate-lineOut"]);
      setTimeout(() => {
        setLogoText([" opacity-0", " opacity-0"]);
      }, 200);
    }
    setOpen(!v);
  };

  const logo = (
    <div
      onClick={() => openMenu(open)}
      className={
        "transition cursor-pointer duration-500 ease-in-out transform hover:rotate-3 hover:scale-110 hover:bg-white hover:bg-opacity-10 w-56 h-56 flex justify-center items-center rounded-full " +
        logoClass
      }
    >
      {/* <div className={"relative w-20 md:w-40 h-24 md:h-48 " + logoClass}> */}
      <div className="relative w-20 md:w-40 h-24 md:h-48 ">
        <img draggable="false" src={SVG.Base} alt="" className="absolute" />
        <img draggable="false" src={SVG.Bottom1} alt="" className="absolute" />
        <img draggable="false" src={SVG.Bottom2} alt="" className="absolute" />
        <img draggable="false" src={SVG.Top1} alt="" className="absolute" />
        <img draggable="false" src={SVG.Top2} alt="" className="absolute" />
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center z-10">
      <div
        onClick={() => console.log("tsetse")}
        className={
          "md:mr-24 mr-10 flex flex-col justify-center items-center transition-colors duration-100 hover:bg-white hover:bg-opacity-20 p-3 rounded-lg " +
          logoText[0]
        }
      >
        <Event className="w-12 h-12 text-white" />
        <p className="text-xs md:text-sm mt-2 text-white font-code">
          reunion.txt
        </p>
      </div>
      {logo}
      <div
        className={
          "md:ml-24 ml-10 flex flex-col justify-center items-center transition-colors duration-100 hover:bg-white hover:bg-opacity-20 p-3 rounded-lg " +
          logoText[1]
        }
      >
        <YearBook className="w-12 h-12 text-white" />
        <p className="text-xs md:text-sm mt-2 text-white font-code">
          yearbook.pdf
        </p>
      </div>
    </div>
  );
}
