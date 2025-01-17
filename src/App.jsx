import React, { useEffect, useState } from 'react';
import './App.scss';
import { Banners } from './Components/Banners/Banners';
import { Blog } from './Components/Blog/Blog';
import { CategoriesList } from './Components/CategoriesList/CategoriesList';
import { GeoLocalization } from './Components/GeoLocalization/GeoLocalization';
import { Header } from './Components/Header/Header';
import { MainSlideshow } from './Components/MainSlideshow/MainSlideshow';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Releases } from './Components/Releases/Releases';

export function App() {

  const categories = [
    {
      id: 1,
      name: 'Sapatos',
      url: '#',
      imageUrl: 'static/images/categorias/sapatos.png',
      imageAlt: 'Sapatos',
      imageTitle: 'Sapatos'
    },
    {
      id: 2,
      name: 'Scarpins',
      url: '#',
      imageUrl: 'static/images/categorias/scarpins.png',
      imageAlt: 'Scarpins',
      imageTitle: 'Scarpins'
    },
    {
      id: 3,
      name: 'Sandálias',
      url: '#',
      imageUrl: 'static/images/categorias/sandalias.png',
      imageAlt: 'Sandálias',
      imageTitle: 'Sandálias'
    },
    {
      id: 4,
      name: 'Botas',
      url: '#',
      imageUrl: 'static/images/categorias/botas.png',
      imageAlt: 'Botas',
      imageTitle: 'Botas'
    }
  ]


  const [windowScrolled, setWindowScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = function () {
      if (window.scrollY > 0) {
        setWindowScrolled(true);
      } else {
        setWindowScrolled(false);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <div>
      <GeoLocalization windowScrolled={windowScrolled} />
      <Header categories={categories} windowScrolled={windowScrolled} />
      <MainSlideshow />
      <CategoriesList categories={categories} />
      <Banners />
      <Releases />
      <Blog />
      <Newsletter />
    </div>
  );
}
