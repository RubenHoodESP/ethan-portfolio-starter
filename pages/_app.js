import '../styles/globals.css';

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// flag icons
import "flag-icons";

//components
import Layout from '../components/Layout';
import Transition from "../components/Transition";

// router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

// translation
import { NextIntlClientProvider } from 'next-intl';
// import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </NextIntlClientProvider>
  );
}

export default MyApp;
