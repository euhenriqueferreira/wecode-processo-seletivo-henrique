import './MainSlideshow.scss';

import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export function MainSlideshow() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    const slideshowItems = [
        {
            id: 1,
            imageUrl: "static/images/slideshow/banner-principal-1.png",
            imageAlt: 'Simple and Beauty',
            imageTitle: 'Simple and Beauty'
        },
        {
            id: 2,
            imageUrl: "static/images/slideshow/banner-principal-2.png",
            imageAlt: 'Classics',
            imageTitle: 'Classics'
        },
    ]

    return (
        <section className="mainSlideshow">
            <Slider {...settings}>
                {slideshowItems.map((slideshowItem) => {
                    return (
                        <div className='slideItem' key={slideshowItem.id}>
                            <img src={slideshowItem.imageUrl} alt={slideshowItem.imageAlt} title={slideshowItem.imageTitle} />
                            <button>Conheça agora</button>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}