import logo from "./assets/images/logo.svg";
import hero from "./assets/images/image-web-3-desktop.jpg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 container p-6">
      {/* Header mit Logo und Navigation */}
      <header className="p-2 flex items-center justify-between mb-12 ">
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex gap-x-6 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">New</li>
            <li className="hover:text-black cursor-pointer">Popular</li>
            <li className="hover:text-black cursor-pointer">Trending</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
          </ul>
        </nav>
      </header>
      {/* Main content als Grid; Hero-Image, Sidebar, Heading und Content */}
      <main className="grid grid-cols-[1fr_1fr_400px] grid-rows-[1fr_200px] gap-10">
        {/* Hero-Image */}
        <img
          src={hero}
          alt="colorful image with geometric figures"
          className="col-span-2 row-span-1"
        />
        {/* Sidebar */}
        <aside className="flex flex-col justify-between row-span-2 bg-darkBlue px-6 pt-10">
          <article>
            <h2 className="text-softOrange text-5xl font-bold">New</h2>
            <section className="text-white my-8">
              <h3 className="text-2xl py-1 font-bold">
                Hydrogen VS Electric Cars
              </h3>
              <p className="my-6 text-lg mb- text-gray-400">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
              <hr />
            </section>
            <section className="text-white my-8">
              <h3 className="text-2xl py-1 font-bold">
                The Downsides of AI Artistry
              </h3>
              <p className="my-6 text-lg mb- text-gray-400">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
              <hr />
            </section>
            <section className="text-white mb-10">
              <h3 className="text-2xl py-1 font-bold">
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

        <h2 className="text-7xl font-bold pb-6 w-4/5">
          The Bright Future of Web 3.0?
        </h2>
        <div>
          <p className="text-lg text-gray-600 w-4/5">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-softRed text-black px-12 py-4 font-bold  mt-10 uppercase tracking-widest">
            Read More
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
