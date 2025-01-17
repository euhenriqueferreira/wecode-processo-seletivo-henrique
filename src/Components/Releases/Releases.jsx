import { useEffect, useState } from "react";
import "./Releases.scss";

import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductCard } from "../ProductCard/ProductCard";

export function Releases() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        initialSlide: 0,
        arrows: true,

        responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     infinite: true,
            //     dots: true
            //   }
            // },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     initialSlide: 2
            //   }
            // },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
        ]
    }

    const releasesData = [
        {
            id: 1,
            imageUrl: 'static/images/products/product-1.png',
            imageAlt: 'Scarpin Sligback',
            imageTitle: 'Scarpin Sligback',
            productName: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
            productPrice: '179,90',
            productPromotion: null,
            promotionPerCent: null
        },
        {
            id: 2,
            imageUrl: 'static/images/products/product-2.png',
            imageAlt: 'Sandália Braco Blanc',
            imageTitle: 'Sandália Braco Blanc',
            productName: 'Sandália Braco Blanc Tratorada...',
            productPrice: 459.90,
            productPromotion: 319.89,
            promotionPerCent: null
        },
        {
            id: 3,
            imageUrl: 'static/images/products/product-3.png',
            imageAlt: 'Coturno Feminino Bebecê',
            imageTitle: 'Coturno Feminino Bebecê',
            productName: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
            productPrice: 349.90,
            productPromotion: 315,
            promotionPerCent: null
        },
        {
            id: 4,
            imageUrl: 'static/images/products/product-4.png',
            imageAlt: 'Scarpin Bebecê Salto Alto',
            imageTitle: 'Scarpin Bebecê Salto Alto',
            productName: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
            productPrice: 159.90,
            productPromotion: null,
            promotionPerCent: null
        },
        {
            id: 5,
            imageUrl: 'static/images/products/product-5.png',
            imageAlt: 'Slingback Branco',
            imageTitle: 'Slingback Branco',
            productName: 'Slingback Branco Tiras Bico Fino Couro',
            productPrice: 379.90,
            productPromotion: null,
            promotionPerCent: null
        },
        {
            id: 1,
            imageUrl: 'static/images/products/product-1.png',
            imageAlt: 'Scarpin Sligback',
            imageTitle: 'Scarpin Sligback',
            productName: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
            productPrice: '179,90',
            productPromotion: null,
            promotionPerCent: null
        },
        {
            id: 2,
            imageUrl: 'static/images/products/product-2.png',
            imageAlt: 'Sandália Braco Blanc',
            imageTitle: 'Sandália Braco Blanc',
            productName: 'Sandália Braco Blanc Tratorada...',
            productPrice: 459.90,
            productPromotion: 319.89,
            promotionPerCent: null
        },
        {
            id: 3,
            imageUrl: 'static/images/products/product-3.png',
            imageAlt: 'Coturno Feminino Bebecê',
            imageTitle: 'Coturno Feminino Bebecê',
            productName: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
            productPrice: 349.90,
            productPromotion: 315,
            promotionPerCent: null
        },
        {
            id: 4,
            imageUrl: 'static/images/products/product-4.png',
            imageAlt: 'Scarpin Bebecê Salto Alto',
            imageTitle: 'Scarpin Bebecê Salto Alto',
            productName: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
            productPrice: 159.90,
            productPromotion: null,
            promotionPerCent: null
        },
        {
            id: 5,
            imageUrl: 'static/images/products/product-5.png',
            imageAlt: 'Slingback Branco',
            imageTitle: 'Slingback Branco',
            productName: 'Slingback Branco Tiras Bico Fino Couro',
            productPrice: 379.90,
            productPromotion: null,
            promotionPerCent: null
        },
    ]

    const [productLiked, setProductLiked] = useState(false);
    const [releases, setReleases] = useState(releasesData);

    useEffect(() => {
        const updatedReleasesPromotion = releasesData.map((release) => {
            if (release.productPromotion !== null) {
                const promotionPerCent = ((release.productPrice - release.productPromotion) / release.productPrice * 100).toFixed()
                return { ...release, promotionPerCent: promotionPerCent };
            }
            return { ...release, promotionPerCent: null };
        })

        setReleases(updatedReleasesPromotion)
    }, [])

    return (
        <div className="releasesWrapper">
            <h2>Lançamentos</h2>

            <div className="releasesSlider">
                <Slider {...settings}>
                    {releases.map((release) => {
                        return (
                            <ProductCard product={release} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}