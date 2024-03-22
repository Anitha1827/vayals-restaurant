"use client";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Menubar from "./Menubar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [show, setShow] = useState(true);

  gsap.to(".content-wrapper", {
    scrollTrigger: {
      trigger: ".content-wrapper",
      start: "10px top",
      end: "30px 20px",
      // markers: true,
      scrub: true,
      onEnter: () => setShow(false),
      onEnterBack: () => setShow(true),
    },
  });

  // imge Move Biryani
  gsap.to(".biryani", {
    scrollTrigger: {
      trigger: ".content-wrapper",
      start: "100px 50px",
      end: "bottom 150px",
      scrub: 1,
      // markers: true,
      // onEnter: () => gsap.to(".biryani", { width: "350px" }),
      // onEnterBack: () => gsap.to(".biryani", { width: "400px" }),
    },
    x: -200,
    y: -500,
    ease: "none",
    duration: 3,
  });
  // imge Move chicken
  gsap.to(".chicken", {
    scrollTrigger: {
      trigger: ".content-wrapper",
      start: "100px 50px",
      end: "bottom 150px",
      scrub: 1,
      // markers: true,
    },
    x: 400,
    y: 700,
    ease: "none",
    duration: 3,
  });
  //Chicken body
  gsap.to(".chicken-body", {
    scrollTrigger: {
      trigger: ".chicken-body",
      start: "bottom top",
      end: "bottom 150px",
      scrub: 1,
      // markers: true,
      onEnter: () => gsap.to(".chicken-body", { width: "300px" }),
      onEnterBack: () => gsap.to(".chicken-body", { width: "400px" }),
    },
    y: -150,
    ease: "none",
    duration: 3,
  });

  // imge Move Ticka
  gsap.to(".ticka", {
    scrollTrigger: {
      trigger: ".hen",
      start: "top 50px",
      end: "bottom 150px",
      scrub: true,
      // markers: true,
    },
    x: 800,
    ease: "none",
  });

  // imge Move Ticka
  gsap.to(".ticka-body", {
    scrollTrigger: {
      trigger: ".ticka",
      start: "top 50px",
      end: "bottom 150px",
      scrub: 3,
      // markers: true,
    },
    y: -300,
    ease: "none",
  });

  // imge Move Tandoori
  gsap.to(".tandoori", {
    scrollTrigger: {
      trigger: ".hen",
      start: "top 50px",
      end: "bottom 150px",
      scrub: true,
      // markers: true,
    },
    x: -800,
    ease: "none",
  });

  // imge Move Tandoori body
  gsap.to(".tandoori-body", {
    scrollTrigger: {
      trigger: ".tandoori",
      start: "top 50px",
      end: "bottom 150px",
      scrub: 3,
      // markers: true,
    },
    y: -350,
    ease: "none",
  });

  // image Move naan
  gsap.to(".naan", {
    scrollTrigger: {
      trigger: ".biryani",
      start: "top 50px",
      end: "bottom 150px",
      scrub: 3,
      // markers: true,
    },
    y: -300,
    ease: "none",
  });

  // flavor moving and resizing
  // const flavorDiv = document.querySelector(".flavor");
  gsap.to(".flavor", {
    scrollTrigger: {
      trigger: ".hen",
      start: "30px top",
      end: "bottom 150px",
      scrub: 1,
      onEnter: () =>
        gsap.to(".flavor", {
          width: "600px",
          fontSize: "94px",
          ease: "none",
          height: "600px",
          top: "200px",
        }),
      onEnterBack: () =>
        gsap.to(".flavor", {
          width: "200px",
          fontSize: "18px",
          ease: "none",
          height: "150px",
          top: "250px",
        }),
      // markers: true,
    },
    y: -600,
    ease: "none",
  });
  return (
    <>
      <div className=" h-[2500px] overflow-x-hidden content-box bg-custgreen">
        <Menubar />
        <div className="content-wrapper relative h-[1200px] w-[100%] flex items-center overflow-hidden">
          <div
            id="content1"
            className={`absolute top-0 w-[100%] text-center flex flex-col items-center justify-center ${
              show ? "" : "show"
            }`}
          >
            <h1 className="text-custdarkgreen uppercase text-[28px] p-[10px] md:p-0 md:w-[100%] lg:w-[50%] xl:w-[50%] mt-[40px] sm:mt-[15px] md:text-[3.75rem]  ">
              <b>Welcome to Vayals Kitchen</b>
            </h1>
            <p className="text-[1.25rem] sm:text-xl sm:w-[100%] mt-5 md:w-[41%]  font-normal">
              Immerse yourself in a culinary journey & indulge in the vibrant
              tastes of India
            </p>
          </div>
          <div
            id="content2"
            className={`absolute  flex items-center top-0 w-[100%] ${
              show ? "show" : ""
            }`}
          >
            <div className="container h-[100%] w-[100%] overflow-hidden">
              <Marquee className="w-[100%] mt-[15%] z-[0] uppercase">
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
              </Marquee>
              <Marquee className="w-[100%]  mt-[4%] z-[0] uppercase">
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
              </Marquee>
              <Marquee className="w-[100%] z-[0] mt-[4%] uppercase">
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
                <h1 class="  tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px] overflow-hidden">
                  Vayal’s kitchen
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #002C1F",
                      textStroke: "2px #002C1F",
                    }}
                  >
                    Best Indian experience
                  </span>
                </h1>
              </Marquee>
            </div>
          </div>
          <div className="flex gap-10 hen justify-between w-[100%] absolute top-[200px]">
            <span className="ticka absolute left-[-400px] top-[150px] z-1">
              <img
                src="https://vayals-restaurant.vercel.app/_next/image?url=%2FHome%2Fkebab.png&w=3840&q=75"
                style={{ width: "400px" }}
                className="ticka-body"
              ></img>
            </span>
            <span className="absolute tandoori right-[-400px] top-[200px]">
              <img
                src="https://vayals-restaurant.vercel.app/_next/image?url=%2FHome%2Ftandoori.png&w=3840&q=75"
                style={{ width: "400px" }}
                className="tandoori-body"
              ></img>
            </span>
            <span className="relative chicken">
              <img
                src="https://vayals-restaurant.vercel.app/_next/image?url=%2FHome%2Frice.png&w=3840&q=75"
                style={{ width: "400px", marginLeft: "-9%" }}
                className="chicken-body"
              ></img>
            </span>
            <img
              src="https://vayals-restaurant.vercel.app/_next/image?url=%2FHome%2Fbiriyani.png&w=3840&q=75"
              style={{ marginRight: "-3%" }}
              className="relative biryani w-[200px] md:w-[400px]"
            ></img>

            <img
              src="https://vayals-restaurant.vercel.app/_next/image?url=%2FHome%2Fnaan.png&w=3840&q=75"
              style={{ width: "400px" }}
              className="absolute naan bottom-[-500px] right-[40px]"
            ></img>

            <div className="w-[100vw] flex justify-center items-center absolute top-[250px]">
              <div className="bg-custorange flex justify-center flex-col items-center text-[18px] rounded-[50%] w-[200px] h-[150px] uppercase flavor ">
                <p
                  style={{
                    color: "#D5EDC4",
                    WebkitTextStroke: "2px #D5EDC4",
                    textStroke: "2px #D5EDC4",
                  }}
                >
                  FlavorFul
                </p>
                <p
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #ffffff",
                    textStroke: "2px #ffffff",
                  }}
                >
                  Fun
                </p>
                <p
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #ffffff",
                    textStroke: "2px #ffffff",
                  }}
                >
                  Feast
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between w-[100%] dish relative">
         
        </div> */}
        </div>
      </div>
    </>
  );
}
