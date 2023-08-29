// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// icons 
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket, RxArrowTopRight }
from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useTranslations } from "next-intl";


const ServiceSlider = () => {

  const t = useTranslations();

  // service data
  const serviceData = [
    {
      icon: <RxPencil2 />,
      title: t('services.list.design.title'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <RxDesktop />,
      title: t('services.list.development.title'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <RxReader />,
      title: t('services.list.optimization.title'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <RxRocket />,
      title: t('services.list.SEO.title'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true
    }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(47,67,123,0.64)] h-max rounded-lg
              px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
              hover:bg-[rgba(65,93,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent
                  transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
