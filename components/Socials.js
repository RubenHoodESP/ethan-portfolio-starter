// links
import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/rubengarciakaizen/"} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={"https://www.instagram.com/rubengarcia_kaizen/"} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={"https://github.com/RubenHoodESP"} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
    </div>
  )
};

export default Socials;
