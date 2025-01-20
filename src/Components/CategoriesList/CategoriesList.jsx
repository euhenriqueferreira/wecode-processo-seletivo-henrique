import './CategoriesList.scss';

import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function CategoriesList({ categories }) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: false,
        initialSlide: 0,
        arrows: false,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    draggable: false,
                    initialSlide: 0,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    }


    return (
        <div className='categoriesListWrapper'>
            <h2>Categorias</h2>

            <div className='categoriesList'>
                <Slider {...settings}>
                    {categories.map((category) => {
                        return (
                            <a href='' key={category.id}>
                                <div className='imageWrapper'>
                                    <img src={category.imageUrl} alt={category.imageAlt} title={category.imageTitle} />
                                </div>
                                <p>{category.name}</p>
                            </a>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}