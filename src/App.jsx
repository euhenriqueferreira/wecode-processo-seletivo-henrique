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
  const storedProductsInCart = JSON.parse(sessionStorage.getItem('productsInShoppingCart')) || null;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 575)
  const [hasWindowScrolled, setHasWindowScrolled] = useState(false);
  const [productsInCart, setProductsInCart] = useState(storedProductsInCart || null)

  useEffect(() => {
    sessionStorage.setItem('productsInShoppingCart', JSON.stringify(productsInCart));
  }, [productsInCart])

  useEffect(() => {
    function handleScreenResize() {
      setIsMobile(window.innerWidth < 575);
    }

    window.addEventListener('resize', handleScreenResize);

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [])

  useEffect(() => {
    function handleWindowScroll() {
      setHasWindowScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <div>
      <GeoLocalization hasWindowScrolled={hasWindowScrolled} />
      <Header hasWindowScrolled={hasWindowScrolled} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
      <MainSlideshow isMobile={isMobile} />
      <CategoriesList />
      <Banners isMobile={isMobile} />
      <Releases setProductsInCart={setProductsInCart} />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
