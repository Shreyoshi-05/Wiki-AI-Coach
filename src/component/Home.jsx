import React from "react";
import Marquee from "react-fast-marquee";
import hero from "../assets/hero.jpg";
import fb from '../assets/fb.png'
import ms from '../assets/ms.png'
import mt from '../assets/mt.png'
import off from '../assets/of.jpg'
import rc from '../assets/rc.png'
import tw from '../assets/tw.png'
import zm from '../assets/zm.png'
import { Link } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex-col w-[80vw] m-auto pb-24">
      <div className="my-8">
        <h2 className="text-3xl text-center md:text-left md:text-6xl">
          <span className=" text-outline font-extrabold md:text-8xl">
            AI Superpower
          </span>
          <span className="text-black-300 font-extrabold">
            - A better way to
          </span>
          <br />
          improve your interview chances and skills
        </h2>

        <p className="mt-4 text-muted-foreground text-sm">
          Boost your interview skills and increase your success rate with
          AI-driven insights. Discover a smarter way to prepare, practice, and
          stand out.
        </p>
      </div>

      <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
        <p className="text-3xl font-semibold text-gray-900 text-center">
          250k+
          <span className="block text-xl text-muted-foreground font-normal">
            Offers Recieved
          </span>
        </p>
        <p className="text-3xl font-semibold text-gray-900 text-center">
          1.2M+
          <span className="block text-xl text-muted-foreground font-normal">
            Interview Aced
          </span>
        </p>
      </div>

      <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
        <img src={hero} alt="" className="w-full h-full object-cover" />

        <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
          Inteviews Copilot&copy;
        </div>

        <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
          <h2 className="text-neutral-800 font-semibold">Developer</h2>
          <p className="text-sm text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            distinctio natus, quos voluptatibus magni sapiente.
          </p>
        </div>
      </div>

      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <img className="w-55 ml-13" src={fb} alt="" />
          <img className="w-45 ml-13" src={ms} alt="" />
          <img className="w-55 ml-13" src={mt} alt="" />
          <img className="w-55 ml-13" src={tw} alt="" />
          <img className="w-15 ml-13" src={rc} alt="" />
          <img className="w-30 ml-13" src={zm} alt="" />
        </Marquee>
      </div>


      <div className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src={off}
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <div className="flex gap-5">
            <Link to={"/generate"} className="w-full">
            <button className="btn btn-neutral ">Generate <FaWandMagicSparkles /></button>
            </Link>

            <Link to={"/wiki"} className="w-full">
            <button className="btn btn-neutral ">Learn <FaGraduationCap /></button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
