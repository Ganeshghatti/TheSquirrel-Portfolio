import { useLayoutEffect, useRef } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Hero() {
  const scroll = useScroll();
  const imageRef = useRef();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      imageRef.current,
      {
        scale: 2,
        duration: 2,
      },
      0
    );

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <Scroll html>
      <div className="w-screen">
        <div className="wrapper">
          <div className="content">
            <section className="h-screen flex items-center justify-center bg-blue-200 h-[100vh] ">
              <h1 className="text-4xl font-bold">Section 2</h1>
            </section>
            <section className="h-screen flex items-center justify-center bg-green-200 h-[100vh]">
              <h1 className="text-4xl font-bold">Section 3</h1>
            </section>
            <section className="h-screen flex items-center justify-center bg-yellow-200 h-[100vh]">
              <h1 className="text-4xl font-bold">Section 4</h1>
            </section>
          </div>
          <div className="image-container">
            <img
              src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
              alt="main home"
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </Scroll>
  );
}
