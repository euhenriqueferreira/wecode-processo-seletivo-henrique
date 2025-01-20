// Styles
import './Blog.scss';
// React Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Data
import { blogPosts } from '../../utils';
// Child Components
import { PostCard } from './PostCard';

export function Blog() {
    var sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    return (
        <div className="blogContainer">
            <div className="blogWrapper">
                <h2>Conheça mais</h2>
                <p>Fique por dentro de tudo que acontece na Bebecê.</p>
                <div className="blogSlider">
                    <Slider {...sliderSettings}>
                        {blogPosts.map((post) => {
                            return (
                                <PostCard key={post.id} post={post} />
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}