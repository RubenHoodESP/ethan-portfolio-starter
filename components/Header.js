// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

// 
import Translations from "../components/Translations";

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px] z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            <span className="text-2xl md:h2">Ruben <span className="text-2xl text-accent md:h2">Kaizen</span></span>
          </Link>
          {/* socials */}
          <Socials />
          {/* translations */}
          <div className="relative top-0 right-0 m-6">
            <Translations />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
