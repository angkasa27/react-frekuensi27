import React, { useEffect, useState } from "react";
import SVG from "../../assets/svg";
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
  const [logoClass, setLogoClass] = useState(" opacity-0");
  const [textClass, setTextClass] = useState(" opacity-0");

  const desc = ["FREKUENSI 27", "MOKLET'S FREQUENCY", "THE LEGEND"];

  useEffect(() => {
    setTimeout(() => {
      setLogoClass(" animate-blink");
    }, 1000);
    setTimeout(() => {
      setTextClass(" animate-blink");
    }, 2000);
  }, []);

  const logo = (
    <div className="transition duration-500 ease-in-out transform hover:rotate-3 hover:scale-110">
      <div className={"relative w-40 h-48 " + logoClass}>
        <img
          draggable="false"
          src={SVG.Base}
          alt=""
          className="z-10 absolute"
        />
        <img
          draggable="false"
          src={SVG.Bottom1}
          alt=""
          className="z-10 absolute"
        />
        <img
          draggable="false"
          src={SVG.Bottom2}
          alt=""
          className="z-10 absolute"
        />
        <img
          draggable="false"
          src={SVG.Top1}
          alt=""
          className="z-10 absolute"
        />
        <img
          draggable="false"
          src={SVG.Top2}
          alt=""
          className="z-10 absolute"
        />
      </div>
    </div>
  );

  return (
    <section id="sec0" className="sec-base relative overflow-hidden">
      {/* <img
        draggable="false"
        src={Grain}
        alt=""
        className="z-0 absolute top-0 left-0 animate-grainTwo opacity-40"
      /> */}
      <img
        draggable="false"
        src={Grain}
        alt=""
        className="z-0 absolute top-0 left-0 animate-grain opacity-60"
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-white text-2xl font-black font-work mb-6 animate-blink z-10">
          WE ARE
        </p>
        {logo}
        <p
          className={
            "text-white text-2xl font-black font-work mt-6 tracking-widest z-10 " +
            textClass
          }
        >
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
      {/* <img draggable="false"
        src={SVG.XGroup}
        alt=""
        className="z-10 absolute -top-24 left-120 transform rotate-180 scale-75"
      /> */}
      <img
        draggable="false"
        src={SVG.Corner}
        alt=""
        className="z-10 absolute top-6 left-3 transform rotate-180 scale-75"
      />

      <div className="z-10 absolute inset-y-1/2 right-0 px-12 py-3">
        <p className="text-white text-lg font-work ">F</p>
      </div>
      <div className="z-10 absolute bottom-0 right-0 px-12 py-3">
        <p className="text-white text-lg font-nunito ">
          Fly high, higher and higher!
        </p>
      </div>
    </section>
  );
}
