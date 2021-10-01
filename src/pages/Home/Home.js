import React, { useEffect, useState } from "react";
import SVG, { XSvg } from "../../assets/svg";
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
  const [textClass, setTextClass] = useState(" opacity-0");
  const [grainEff, setGrainEff] = useState(" ");
  const desc = ["FREKUENSI 27", "MOKLET'S FREQUENCY", "THE LEGEND"];

  useEffect(() => {
    setTimeout(() => {
      setTextClass(" animate-blink");
    }, 1800);
    setGrainEff("animate-grain");
  }, []);

  const blobs = (
    <>
      <img
        draggable="false"
        src={Grain}
        alt=""
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
    </>
  );

  const xAround = (
    <>
      <XSvg classes="z-10 absolute top-48 left-1/3 w-3 h-3" />
      <XSvg classes="z-10 hidden md:block absolute top-24 left-1/5 w-3 h-3" />
      <XSvg classes="z-10 hidden md:block absolute top-2/5 left-36 w-3 h-3" />
      <XSvg classes="z-10 absolute bottom-1/4 left-1/3 w-3 h-3" />
      <XSvg classes="z-10 absolute bottom-36 right-1/4 w-3 h-3" />
      <XSvg classes="z-10 absolute bottom-1/2 right-1/5 w-3 h-3" />
      <XSvg classes="z-10 absolute top-1/5 right-1/3 w-3 h-3 " />
    </>
  );

  return (
    <section id="sec0" className="sec-base relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-white h1 mb-6 animate-blink z-10">WE ARE</p>
        <Logo />
        <p className={"text-white h1 mt-8 tracking-widest z-10 " + textClass}>
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
      <div className="z-10 hidden md:block absolute inset-y-1/2 right-0 px-12 py-3">
        <p className="text-white text-lg font-work ">F</p>
      </div>
      <div className="z-20 absolute bottom-0 left-0 w-screen py-3 flex justify-center">
        <p className="text-white text-xs md:text-sm font-code ">
          Fly high, higher and higher
        </p>
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

export function Logo() {
  const [open, setOpen] = useState(false);
  const [logoClass, setLogoClass] = useState(" opacity-0");
  const [logoText, setLogoText] = useState([" opacity-0", " opacity-0"]);

  useEffect(() => {
    setTimeout(() => {
      setLogoClass(" animate-blink");
    }, 1000);
  }, []);

  const openMenu = (v) => {
    if (!v) {
      setLogoText([" animate-lineReverse", " animate-line"]);
      setTimeout(() => {
        setLogoText([" ", " "]);
      }, 200);
    } else {
      console.log("ts");
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
      className="transition cursor-pointer duration-500 ease-in-out transform hover:rotate-3 hover:scale-110"
    >
      <div className={"relative w-20 md:w-40 h-24 md:h-48 " + logoClass}>
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
        className={
          "w-16 h-16 border-2 left-0 border-white rounded-full mr-24 hidden md:block " +
          logoText[0]
        }
      ></div>
      {logo}
      <div
        className={
          "w-16 h-16 border-2 left-0 border-white rounded-full ml-24 hidden md:block " +
          logoText[1]
        }
      ></div>
    </div>
  );
}
