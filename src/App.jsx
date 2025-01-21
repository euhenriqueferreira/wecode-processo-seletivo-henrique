// Styles
import './App.scss';
// React
import React, { useEffect, useState } from 'react';
// Components
import { Banners } from './Components/Banners/Banners';
import { Blog } from './Components/Blog/Blog';
import { CategoriesList } from './Components/CategoriesList/CategoriesList';
import { Footer } from './Components/Footer/Footer';
import { GeoLocalization } from './Components/GeoLocalization/GeoLocalization';
import { Header } from './Components/Header/Header';
import { MainSlideshow } from './Components/MainSlideshow/MainSlideshow';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Releases } from './Components/Releases/Releases';

export function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 575)
  const [windowScrolled, setWindowScrolled] = useState(false);
  const [shoppingCartAddedItems, setShoppingCartAddedItems] = useState([])


  useEffect(() => {
    function handleScreenResize() {
      setIsMobile(window.innerWidth < 575);
    }

    window.addEventListener('resize', handleScreenResize);

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [])

  useEffect(() => {
    const handleWindowScroll = function () {
      setWindowScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  useEffect(() => {
    console.log(shoppingCartAddedItems)
  }, [shoppingCartAddedItems])

  return (
    <div>
      <GeoLocalization windowScrolled={windowScrolled} />
      <Header windowScrolled={windowScrolled} shoppingCartAddedItems={shoppingCartAddedItems} setShoppingCartAddedItems={setShoppingCartAddedItems} />
      <MainSlideshow isMobile={isMobile} />
      <CategoriesList />
      <Banners isMobile={isMobile} />
      <Releases setShoppingCartAddedItems={setShoppingCartAddedItems} />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
