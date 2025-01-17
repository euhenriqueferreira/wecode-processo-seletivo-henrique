import React from 'react';
import './App.scss';
import { GeoLocalization } from './Components/GeoLocalization/GeoLocalization';
import { Header } from './Components/Header/Header';
import { MainSlideshow } from './Components/MainSlideshow/MainSlideshow';
import { CategoriesList } from './Components/CategoriesList/CategoriesList';
import { Banners } from './Components/Banners/Banners';
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

  return (
    <div>
      <GeoLocalization />
      <Header categories={categories} />
      <MainSlideshow />
      <CategoriesList categories={categories} />
      <Banners />
      <Releases />
    </div>
  );
}
