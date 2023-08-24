import React, { useState } from 'react';

// translation
import { useTranslations } from "next-intl";

// icons 
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
 } from "react-icons/fa";

 import { 
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
 } from "react-icons/si";

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslations();

  //  about data
const aboutData = [
  {
    title: t('about.skills.title'),
    info: [
      {
        title: t('about.skills.developer'),
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <SiFramer key="SiFramer" />,
          <FaWordpress key="FaWordpress" />,
        ],
      },
      {
        title: t('about.skills.design'),
        icons: [
          <FaFigma key="FaFigma" />,
          <SiAdobexd key="SiAdobexd" />,
          <SiAdobephotoshop key="SiAdobephotoshop" />,
        ],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: t('about.experience.title'),
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <div
        // variants={fadeIn('right', 0.2)}
        // initial="hidden"
        // animate="show"
        // exit='hidden'
        className='hidden xl-flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent designs.</h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>10 years ago, I began freelancing as a developer. Since then, I have done remote
            work for agencies, consulted for startups, and collaborated on digital products
            for business and consumer use.
          </p>
          {/* counters */}
          <div>
            <div>
              {/* experience */}
              
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
              after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-'>Years of experience</div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
              after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className={`${index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white
                  after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                  >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return (
                      <div key={itemIndex} className='text-2xl'>{icon}</div>
                    )
                  })}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  )
};

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../messages/${context.locale}.json`)).default
    }
  };
}

export default About;
