import { GeoLocalization } from './GeoLocalization/GeoLocalization';
import { Header } from './Header/Header';
import './HeroSection.scss';
import { MainSlideshow } from './MainSlideshow/MainSlideshow';

export function HeroSection() {
    return (
        <div className='heroSection'>
            <GeoLocalization />
            <Header />
            <MainSlideshow />
        </div>
    )
}