import '../styles/globals.css';

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//components
import Layout from '../components/Layout';
import Transition from "../components/Transition";

// router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </Layout>
  );
}

export default MyApp;
