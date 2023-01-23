import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SettingsProvider from '../context/SettingsContext';
import Header from '../layout/Header';
import Settings from '../presentation/Settings';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const handleRouteChangeStart = () => {
      setIsLoading(true);
      localStorage.setItem("scrollPositon", window.scrollY);
    }
    const handleRouteChangeComplete = () => {
      setIsLoading(false);
      const scrollPosition = localStorage.getItem("scrollPositon");

      if(scrollPosition) {
        window.scrollTo({top: +scrollPosition});
      }
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    }

  }, []);
  
  return (
    <SettingsProvider>
      <Header />
      <Settings>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Component {...pageProps} />
        )}
      </Settings>
    </SettingsProvider>
  );
}

export default MyApp
