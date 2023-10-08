import { VscTriangleDown } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { TfiWorld, TfiMenu, TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center h-24 w-full px-2 sm:px-8 text-black bg-[#fff] border-b border-gray-300 fixed z-30">
      <div className="group relative">
        <div className="flex justify-center items-center text-base hover:cursor-pointer border-b">
          <TfiWorld className="mr-2" size={15} />
          &nbsp;Language&nbsp;
          <SlArrowDown
            className="ml-2 group-hover:rotate-180 group-hover:transition duration-100"
            size={15}
          />
        </div>
        <ul className="hidden group-hover:block bg-yellow-light absolute w-full text-[#fff] text-sm">
          <li className="p-2 hover:bg-yellow-dark hover:cursor-pointer">
            <a className="m-4">Polski</a>
          </li>
          <li className="p-2 hover:bg-yellow-dark hover:cursor-pointer">
            <a className="m-4">English</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-52">
        <ul className="hidden lg:flex">
          <li>
            <div className="group relative">
              <div className="border-b hover:cursor-pointer">
                <Link
                  to="/"
                  className="cursor-pointer flex justify-center items-center"
                >
                  Strona główna&nbsp;
                  <SlArrowDown
                    className="ml-14 group-hover:rotate-180 group-hover:transition duration-100"
                    size={15}
                  />
                </Link>
              </div>
              <ul className="hidden group-hover:block bg-yellow-light absolute w-full text-[#fff] text-sm z-10">
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/add_offer">
                    <div className="px-2 py-4">Dodaj ofertę pomocy</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Aktualne potrzeby</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Przyjęte potrzeby</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Moje oferty pomocy</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Poproś o pomoc</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Oferty pomocy</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Przyjęte oferty pomocy</div>
                  </Link>
                </li>
                <li className="hover:bg-yellow-dark hover:cursor-pointer">
                  <Link to="/">
                    <div className="px-2 py-4">Moje potrzeby</div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/about" className="mx-8 hover:cursor-pointer">
              O nas
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mx-8 hover:cursor-pointer">
              Kontakt
            </Link>
          </li>
        </ul>
        <div className="flex">
          <div className="text-[#fff] hidden justify-center items-center mr-4 sm:flex">
            <Link to="add_offer">
              <a className="px-4 py-1 rounded-lg bg-yellow-default hover:bg-yellow-light">
                Wspomóż
              </a>
            </Link>
          </div>
          <div className="group relative">
            <div className="flex hover:cursor-pointer">
              Moje Konto&nbsp;
              <VscTriangleDown
                className="group-hover:rotate-180 group-hover:transition duration-100"
                size={15}
              />
            </div>
            <ul className="hidden group-hover:block bg-yellow-light absolute w-full text-[#fff] text-sm z-20">
              <li className="hover:bg-yellow-dark hover:cursor-pointer">
                <Link to="/login">
                  <div className="px-2 py-4">Logowanie</div>
                </Link>
              </li>
              <li className="hover:bg-yellow-dark hover:cursor-pointer">
                <Link to="/register">
                  <div className="px-2 py-4">Rejestracja</div>
                </Link>
              </li>
              <li className="hover:bg-yellow-dark hover:cursor-pointer">
                <Link to="/settings">
                  <div className="px-2 py-4">Ustawienia</div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex lg:hidden ml-6 ${toggleMenu && "switch"}`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <TfiClose className="hover:cursor-pointer" size={25} />
            ) : (
              <TfiMenu className="hover:cursor-pointer" size={25} />
            )}
          </div>
          <ul
            className={
              toggleMenu
                ? "lg:hidden block fixed right-0 top-24 w-[60%] sm:w-[40%] h-full bg-[#fff] ease-out duration-500 z-10 border-l border-gray-200 shadow-xl"
                : "ease-in duration-500 fixed right-[-100%] w-[40%] h-full top-24"
            }
          >
            <li>
              <div className="group relative">
                <div className="py-4 hover:cursor-pointer">
                  <Link
                    to="/"
                    className="cursor-pointer flex items-center pl-2"
                  >
                    Strona główna&nbsp;
                    <SlArrowDown
                      className="ml-14 group-hover:rotate-180 group-hover:transition duration-100"
                      size={15}
                    />
                  </Link>
                </div>
                <ul className="hidden group-hover:block bg-yellow-light relative w-full text-[#fff] text-sm">
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/add_offer">
                      <div className="px-2 py-4">Dodaj ofertę pomocy</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Aktualne potrzeby</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Przyjęte potrzeby</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Moje oferty pomocy</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Poproś o pomoc</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Oferty pomocy</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Przyjęte oferty pomocy</div>
                    </Link>
                  </li>
                  <li className="hover:bg-yellow-dark hover:cursor-pointer">
                    <Link to="/">
                      <div className="px-2 py-4">Moje potrzeby</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="py-4">
              <Link to="/about" className="pl-2 y-2 hover:cursor-pointer">
                O nas
              </Link>
            </li>
            <li className="py-4">
              <Link to="/contact" className="pl-2 hover:cursor-pointer">
                Kontakt
              </Link>
            </li>
            <div className="text-[#fff] flex items-center mt-6 ml-2">
              <Link to="add_offer">
                <a className="px-4 py-1 rounded-lg bg-yellow-default hover:bg-yellow-light">
                  Wspomóż
                </a>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
