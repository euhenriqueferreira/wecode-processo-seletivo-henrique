import { useState } from 'react';
import './MainSlideshow.scss';

import { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export function MainSlideshow() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            console.log(`Largura da tela mudou para: ${window.innerWidth}px`);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            imageAlt: 'Classics',
            imageTitle: 'Classics'
        },
        {
            id: 2,
            imageUrl: "static/images/slideshow/banner-principal-2.png",
            imageAlt: 'Simple and Beauty',
            imageTitle: 'Simple and Beauty'
        },
    ]

    const slideshowMobileItems = [
        {
            id: 1,
            imageUrl: "static/images/slideshow/banner-mobile-1.png",
            imageAlt: 'Classics',
            imageTitle: 'Classics'
        },
        {
            id: 2,
            imageUrl: "static/images/slideshow/banner-mobile-2.png",
            imageAlt: 'Simple and Beauty',
            imageTitle: 'Simple and Beauty'
        },
        {
            id: 3,
            imageUrl: "static/images/slideshow/banner-mobile-3.png",
            imageAlt: 'Simple and Beauty',
            imageTitle: 'Simple and Beauty'
        },
    ]

    return (
        <section className="mainSlideshow">
            <Slider {...settings}>
                {window.innerWidth > 575 ?
                    slideshowItems.map((slideshowItem) => {
                        return (
                            <div className='slideItem' key={slideshowItem.id}>
                                <img src={slideshowItem.imageUrl} alt={slideshowItem.imageAlt} title={slideshowItem.imageTitle} />

                            </div>
                        )
                    })
                    :
                    slideshowMobileItems.map((slideshowItem) => {
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