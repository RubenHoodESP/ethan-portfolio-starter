// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
// import { motion } from "framer-motion";

// variants
// import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1
            className="h1"
          >
            Transforming Ideas <br /> Into{' '}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores distinctio nisi eos beatae
            blanditiis praesentium aliquam optio ullam, autem odit fugit ut maiores error quia necessitatibus
            fugiat nostrum molestias nulla.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <div
          className="w-full h-full max-w-[737px] max-h-[678px]
          absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
