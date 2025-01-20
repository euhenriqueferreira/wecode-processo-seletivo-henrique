import './Banners.scss'

export function Banners() {

    const banners = [
        {
            imageUrl: "static/images/banners/banner-grande.png",
            imageAlt: "Seja simples, seja verdadeiro",
            imageTitle: "Seja simples, seja verdadeiro",
        },
        {
            imageUrl: "static/images/banners/banner-pequeno.png",
            imageAlt: "Surpreendente a cada passo",
            imageTitle: "Surpreendente a cada passo",
        },
    ]

    return (
        <section className="bannersSection">
            <img src={banners[0].imageUrl} alt={banners[0].imageAlt} title={banners[0].imageTitle} loading='lazy' />
            <img src={banners[1].imageUrl} alt={banners[1].imageAlt} title={banners[1].imageTitle} loading='lazy' />
        </section>
    )
}