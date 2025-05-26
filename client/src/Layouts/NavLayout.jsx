import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

function NavLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.02) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <nav
        className={`sticky top-[2%] p-4 my-4 bg-slate-200 text-slate-800 rounded-2xl transition duration-300 ease-in-out ${
          isScrolled
            ? "shadow-lg rounded-full bg-white/30 backdrop-blur-sm border border-slate-200"
            : ""
        }`}
      >
        <Navbar />
      </nav>

      <Outlet />
    </>
  );
}

export default NavLayout;
