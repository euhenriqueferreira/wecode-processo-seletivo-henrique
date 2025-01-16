import React from 'react';
import './App.scss';
import { CategoriesList } from './Components/CategoriesList/CategoriesList';
import { GeoLocalization } from './Components/GeoLocalization/GeoLocalization';
import { Header } from './Components/Header/Header';
import { MainSlideshow } from './Components/MainSlideshow/MainSlideshow';

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
    </div>
  );
}

