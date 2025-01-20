import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import './Blog.scss';
import { PostCard } from './PostCard';

export function Blog() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // draggable: false,
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

    const posts = [
        {
            id: 1,
            imageUrl: 'static/images/blog/post-1.png',
            imageAlt: 'Seja simples, seja verdadeiro.',
            imageTitle: 'Seja simples, seja verdadeiro.',
            postTitle: 'É amanhã',
            postSummary: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
        },
        {
            id: 2,
            imageUrl: 'static/images/blog/post-2.png',
            imageAlt: 'Novo logo, mesma essência',
            imageTitle: 'Novo logo, mesma essência',
            postTitle: 'Novo logo, mesma essência.',
            postSummary: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
        },
        {
            id: 3,
            imageUrl: 'static/images/blog/post-3.png',
            imageAlt: 'Simples e verdadeiro',
            imageTitle: 'Simples e verdadeiro',
            postTitle: 'Descubra o glamour em cada passo.',
            postSummary: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
        },
        {
            id: 1,
            imageUrl: 'static/images/blog/post-1.png',
            imageAlt: 'Seja simples, seja verdadeiro.',
            imageTitle: 'Seja simples, seja verdadeiro.',
            postTitle: 'É amanhã',
            postSummary: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
        },
        {
            id: 2,
            imageUrl: 'static/images/blog/post-2.png',
            imageAlt: 'Novo logo, mesma essência',
            imageTitle: 'Novo logo, mesma essência',
            postTitle: 'Novo logo, mesma essência.',
            postSummary: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
        },
        {
            id: 3,
            imageUrl: 'static/images/blog/post-3.png',
            imageAlt: 'Simples e verdadeiro',
            imageTitle: 'Simples e verdadeiro',
            postTitle: 'Descubra o glamour em cada passo.',
            postSummary: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
        },
        {
            id: 1,
            imageUrl: 'static/images/blog/post-1.png',
            imageAlt: 'Seja simples, seja verdadeiro.',
            imageTitle: 'Seja simples, seja verdadeiro.',
            postTitle: 'É amanhã',
            postSummary: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
        },
        {
            id: 2,
            imageUrl: 'static/images/blog/post-2.png',
            imageAlt: 'Novo logo, mesma essência',
            imageTitle: 'Novo logo, mesma essência',
            postTitle: 'Novo logo, mesma essência.',
            postSummary: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
        },
        {
            id: 3,
            imageUrl: 'static/images/blog/post-3.png',
            imageAlt: 'Simples e verdadeiro',
            imageTitle: 'Simples e verdadeiro',
            postTitle: 'Descubra o glamour em cada passo.',
            postSummary: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
        },
    ]

    return (
        <div className="blogContainer">
            <div className="blogWrapper">
                <h2>Conheça mais</h2>
                <p>Fique por dentro de tudo que acontece na Bebecê.</p>
                <div className="blogSlider">
                    <Slider {...settings}>
                        {posts.map((post) => {
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