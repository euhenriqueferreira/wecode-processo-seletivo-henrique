import React from 'react';
import './App.scss';
import { GeoLocalization } from './Components/GeoLocalization/GeoLocalization';
import { Header } from './Components/Header/Header';
import { MainSlideshow } from './Components/MainSlideshow/MainSlideshow';

export function App() {
  return (
    <div>
      <GeoLocalization />
      <Header />
      <MainSlideshow />
    </div>
  );
}

