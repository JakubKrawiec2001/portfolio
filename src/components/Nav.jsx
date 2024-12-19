import { navLinks } from "../constansts";
import square2 from "/icons/squares-2.svg";

const Nav = () => {
  return (
    <header className="fixed inset-0 h-16 py-10 bg-[#f9f9f9] border-b-2 border-custom-black flex items-center justify-between z-50 mx-12">
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
    </header>
  );
};

export default Nav;
