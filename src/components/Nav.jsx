import { navLinks } from "../constansts";
import square2 from "/icons/squares-2.svg";
import square from "/icons/squares-1.svg";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-0 h-16 py-10 bg-[#f9f9f9] border-b-2 border-custom-black flex items-center justify-between z-50 ${
        isScrolled
          ? "mx-0 px-12 transition-all duration-300"
          : "mx-12 px-0 transition-all duration-300"
      }`}
    >
      <div className="flex items-center gap-12">
        <img src={square2} alt="square" className="" />
        {navLinks.map((link) => {
          return (
            <a
              href={link.path}
              key={link.id}
              className="font-bitx text-custom-black uppercase text-lg hover:text-custom-blue transition-colors"
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-custom-blue font-satoshi-black text-xl">
          JAKUB KRAWIEC
        </p>
        <p className="text-custom-black font-bitx text-lg">
          BASED IN POLAND [WROCŁAW]
        </p>
      </div>
      <img src={square} alt="square" className="absolute right-0 top-[100%]" />
    </header>
  );
};

export default Nav;
