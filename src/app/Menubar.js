import Hamburger from "hamburger-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="lg:flex flex-row gap-[25%] bg-transparent items-center mt-[20px] ml-[3%] hidden">
        <Image
          src="https://vayals-restaurant.vercel.app/vayals.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-row gap-5 uppercase font-bold text-custdarkgreen text-xl">
          <p>Home</p>
          <p>Menu</p>
          <p>About Us</p>
          <p>catering</p>
          <p>Contact</p>
        </div>
      </div>

      {/* mobile view*/}
      <div className="lg:hidden flex flex-row justify-between bg-transparent items-center mt-[20px] ml-[3%] ">
        <Image
          src="https://vayals-restaurant.vercel.app/vayals.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <div class="w-fit h-auto aspect-square p-2 m-4 bg-white text-custorange rounded-xl z-50 fixed right-[20px] top-[20px]">
          <button
            class="aspect-square flex flex-col gap-[5px] justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </button>
        </div>
        {isOpen && (
          <div
            className={`flex flex-col gap-5  p-5 uppercase font-bold text-white text-xl bg-custorange fixed w-[100vw]  z-40 top-0 right-0 bottom-0 left-0 h-${
              animate ? "100vh" : "0"
            } transition-height duration-2000 ease-custom`}
          >
            <div className="flex justify-start pl-[40px] items-center mt-6 text-[24px]">
              <p>Vayal’s Kitchen</p>
            </div>
            <p>Home</p>
            <p>Menu</p>
            <p>About Us</p>
            <p>catering</p>
            <p>Contact</p>

            <div>
              stay connected
              <div className="mt-5 flex justify-evenly text-4xl">
                <BsInstagram />
                <BsWhatsapp />
                <FaFacebookSquare />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menubar;
