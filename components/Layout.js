// fonts
import { Sora } from "@next/font/google";

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
    font-sora relative`}>
      <link rel="manifest" href="/manifest.json" />
      <TopLeftImg/>
      <Nav />
      <Header/>
      { children }
      <Analytics />
    </div>
  )
};

export default Layout;
