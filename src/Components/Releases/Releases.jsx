// Styles
import "./Releases.scss";
// React
import { useEffect, useState } from "react";
// React Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Data
import { productReleases } from "../../utils";
// Components
import { ProductCard } from "../ProductCard/ProductCard";
import { AddToCartModal } from "./AddToCartModal";

export function Releases({ setProductsInCart }) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true,
        initialSlide: 0,
        arrows: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    }

    const [productLiked, setProductLiked] = useState(false);
    const [releases, setReleases] = useState(productReleases);
    const [productToAddToCart, setProductToAddToCart] = useState({})

    // Calculate the product percentage promotions
    useEffect(() => {
        const updatedReleasesPromotion = productReleases.map((release) => {
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
                            <ProductCard key={release.id} product={release} productToAddToCart={productToAddToCart} setProductToAddToCart={setProductToAddToCart} />
                        )
                    })}
                </Slider>
            </div>
            {Object.keys(productToAddToCart).length > 0 && <AddToCartModal productToAddToCart={productToAddToCart} setProductToAddToCart={setProductToAddToCart} setProductsInCart={setProductsInCart} />}

        </div>
    )
}