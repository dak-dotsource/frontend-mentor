import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import hero from "./assets/images/image-web-3-desktop.jpg";
import heroMobile from "./assets/images/image-web-3-mobile.jpg";
import retro from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";
import iconMenu from "./assets/images/icon-menu.svg";
import iconMenuClose from "./assets/images/icon-menu-close.svg";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-gray-100 container lg:max-w-[1440px] lg:mx-auto p-6">
      {/* Header mit Logo und Navigation */}
      <header className="p-2 flex items-center justify-between mb-12 ">
        <img src={logo} alt="logo" />
        <nav>
          <img
            src={!isMenuOpen ? iconMenu : iconMenuClose}
            alt="Menü"
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="hidden md:flex gap-x-6 text-gray-600 ">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">New</li>
            <li className="hover:text-black cursor-pointer">Popular</li>
            <li className="hover:text-black cursor-pointer">Trending</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
          </ul>
        </nav>
      </header>
      {/* Main content als Grid; Hero-Image, Sidebar, Heading und Content */}
      <main className="grid grid-cols-1 md:grid-cols-[1fr_1fr_400px] grid-rows-[1fr_200px] gap-10 ">
        {/* Hero-Image */}
        <picture className="col-span-1 md:col-span-2 row-span-1">
          <source srcSet={heroMobile} media="(max-width: 768px)" />
          <img src={hero} alt="colorful image with geometric figures" />
        </picture>
        {/* Sidebar */}
        <aside className="flex flex-col justify-between row-span-2 bg-darkBlue px-6 pt-10">
          <article>
            <h2 className="text-softOrange text-5xl font-bold">New</h2>
            <section className="text-white my-8">
              <h3 className="text-2xl py-1 font-bold hover:text-softOrange transition duration-300 cursor-pointer">
                Hydrogen VS Electric Cars
              </h3>
              <p className="my-6 text-lg mb- text-gray-400">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
              <hr />
            </section>
            <section className="text-white my-8">
              <h3 className="text-2xl py-1 font-bold hover:text-softOrange transition duration-300 cursor-pointer">
                The Downsides of AI Artistry
              </h3>
              <p className="my-6 text-lg mb- text-gray-400">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
              <hr />
            </section>
            <section className="text-white mb-10">
              <h3 className="text-2xl py-1 font-bold hover:text-softOrange transition duration-300 cursor-pointer">
                Is VC Funding Drying Up?
              </h3>
              <p className="my-6 text-lg mb- text-gray-400">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </section>
          </article>
        </aside>

        {/* Heading und Content */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row ">
          <h2 className="text-6xl font-bold pb-6 ">
            The Bright Future of Web 3.0?
          </h2>
          <div className="flex flex-col justify-between items-end gap-10 ">
            <p className="text-lg text-gray-600 ">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-softRed text-darkBlue hover:bg-black hover:text-white px-12 py-4 font-bold uppercase tracking-widest self-start transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}

      <footer className="flex flex-col items-center justify-between gap-7 mt-14 md:flex-row py-10">
        <article className="flex items-start justify-center gap-3 h-[174px]">
          <div className="h-[174px] w-[137px] flex-shrink-0">
            <img
              src={retro}
              alt="Retro-PC"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start h-full justify-between">
            <h3 className="text-softRed mb-3 text-4xl font-bold">01</h3>
            <h4 className="text-darkBlue font-bold text-xl cursor-pointer hover:text-softRed transition duration-300">
              Reviving Retro PCs
            </h4>
            <p className="text-gray-500 ">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>
        <article className="flex items-start justify-center gap-3 h-[174px]">
          <div className="h-[174px] w-[137px] flex-shrink-0">
            <img
              src={laptop}
              alt="Laptop"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start h-full justify-between">
            <h3 className="text-softRed mb-3 text-4xl font-bold">02</h3>
            <h4 className="text-darkBlue font-bold text-xl cursor-pointer hover:text-softRed transition duration-300">
              Reviving Retro PCs
            </h4>
            <p className="text-gray-500 ">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>
        <article className="flex items-start justify-center gap-3 h-[174px]">
          <div className="h-[174px] w-[137px] flex-shrink-0">
            <img
              src={gaming}
              alt="Gaming Controller"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start h-full justify-between">
            <h3 className="text-softRed mb-3 text-4xl font-bold">03</h3>
            <h4 className="text-darkBlue font-bold text-xl cursor-pointer hover:text-softRed transition duration-300">
              Reviving Retro PCs
            </h4>
            <p className="text-gray-500 ">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </footer>
    </div>
  );
}

export default App;
