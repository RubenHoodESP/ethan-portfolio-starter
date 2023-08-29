// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// translations
import { useTranslations } from "next-intl";


const Services = () => {

  const t = useTranslations();

  return (
    <div className="h-full bg-primary/60 py-40 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2
              className="h2 xl:mt-8"
            >
              { t('services.title') } <span className="text-accent">.</span>
            </h2>
            <p
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">{ t('services.description') }
            </p>
          </div>
          {/* slider */}
          <div
            className="w-full xl:max-w-[65%]">
            <ServiceSlider />
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

export default Services;
