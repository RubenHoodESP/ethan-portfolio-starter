// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// translation
import { useTranslations } from "next-intl";

const Home = () => {

  const t = useTranslations();

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1
            className="h1"
          >
            { t('home.title') } <br />
            <span className="text-accent">{t('home.title_accent')}</span>
          </h1>
          {/* subtitle */}
          <p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            { t('home.description') }
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
        {/* <div
          className="w-full h-full max-w-[500px] max-h-[500px]
          absolute -bottom-32 lg:bottom-0 lg:right-[17%]"
        >
          <Avatar />
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}

export default Home;
