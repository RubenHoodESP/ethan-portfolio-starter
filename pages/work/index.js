// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";


const Work = () => {
  return (
    <div className="h-full bg-primary/60 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2
              className="h2 xl:mt-8">
              My work <span className="text-accent">.</span>
            </h2>
            <p
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Soluta at minima expedita, molestiae quae, ut culpa ad
                aliquid quo nisi modi harum accusamus temporibus placeat
                quas numquam eaque! Possimus, laudantium.
            </p>
          </div>
          {/* slider */}
          <div
            className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default
    }
  };
}

export default Work;
