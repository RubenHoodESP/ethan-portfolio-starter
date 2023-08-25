// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

// translations
import Translations from "../components/Translations";

const Header = () => {
  return (
    <header className="absolute w-full flex flex-wrap items-center xl:px-0 xl:h-[90px] z-10 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center md:justify-between items-center gap-x-16 py-8">
          {/* logo */}
          <div className="order-1 md:order-1">
            <Link href={'/'}>
              <span className="text-2xl md:h2">Ruben <span className="text-2xl text-accent md:h2">Kaizen</span></span>
            </Link>
          </div>
          {/* socials */}
          <div className="order-3 md:order-2" >
            <Socials />
          </div>
          {/* translations */}
          <div className="relative top-0 right-0 m-6 order-2 md:order-3">
            <Translations />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
