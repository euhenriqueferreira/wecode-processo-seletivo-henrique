// Styles
import './MainSlideshow.scss';
// React Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Data
import { slideshowDesktopImages, slideshowMobileImages } from '../../utils';

export function MainSlideshow({ isMobile }) {
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    return (
        <section className="mainSlideshow">
            <Slider {...sliderSettings}>
                {isMobile ?
                    slideshowMobileImages.map((slideshowItem) => {
                        return (
                            <div className='slideItem' key={slideshowItem.id}>
                                <img src={slideshowItem.imageUrl} alt={slideshowItem.imageAlt} title={slideshowItem.imageTitle} />
                            </div>
                        )
                    })
                    :
                    slideshowDesktopImages.map((slideshowItem) => {
                        return (
                            <div className='slideItem' key={slideshowItem.id}>
                                <img src={slideshowItem.imageUrl} alt={slideshowItem.imageAlt} title={slideshowItem.imageTitle} />
                            </div>
                        )
                    })
                }
            </Slider>
            <button className='showMore'>Conheça agora</button>
        </section>
    )
}