import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/data";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

import "../styles/style.css";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const openAnimation = useSpring({
    from: { maxHeight: "0px" },
    to: { maxHeight: navMobile ? "1000px" : "0px" },
    config: { duration: "200" },
  });

  return (
    <div className={"z-20 sticky top-0 bg-dark"}>
      <div className="flex justify-between items-center   sm:px-8  py-4 md:px-4 lg:px-8">
        <div className="ml-4">
          <a href="#" className="text-[18px]">
            <img src={logo} alt="logoImg" className="w-[10rem]" />
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="relative md:px-3 lg:px-5 nav-link cursor-pointer"
              onClick={() => {
                document.getElementById(navLink.id).scrollIntoView();
              }}
            >
              <a
                href={index === 0 ? "#" : `#${navLink.id}`}
                className="text-[18px]"
              >
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden mr-3 md:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2L-SL3mGSe5uPeQwnD83ihOzE-v3O4GiiTcw-eiGwYWSkzQ/viewform"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-white bg-red rounded-[10px] font-semibold border-2 border-red hover:bg-dark hover:text-red transition"
          >
            Register
          </a>
        </div>

        <div className="block md:hidden relative cursor-pointer ">
          {navMobile ? (
            <FaTimes
              className="text-3xl mr-4"
              onClick={() => setNavMobile(!navMobile)}
            />
          ) : (
            <FaBars
              className="text-3xl mr-4"
              onClick={() => setNavMobile(!navMobile)}
            />
          )}

          <animated.div
            style={openAnimation}
            className={
              "absolute flex flex-col z-20 justify-start items-center gap-4 bg-dark rounded-lg px-8 pt-[4vh]  text-center top-10 right-0 w-screen h-screen overflow-hidden"
            }
          >
            <ul className="flex flex-col  ">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="relative w-screen  focus:bg-zinc-900 hover:bg-zinc-900 p-4 rounded-lg focus:underline"
                  onClick={() => {
                    setNavMobile(false);
                    document.getElementById(navLink.id).scrollIntoView();
                  }}
                >
                  <a
                    href={index === 0 ? "#" : `#${navLink.id}`}
                    className="w-full text-[20px]"
                  >
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <button className="mt-2 px-4 py-2 text-white bg-red rounded-[10px] font-semibold border-2 border-red hover:bg-dark hover:text-red transition ">
                Register
              </button>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
