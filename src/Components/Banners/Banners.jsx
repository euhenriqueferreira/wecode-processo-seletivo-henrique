// Styles
import './Banners.scss';
// Data
import { bannersDesktop, bannersMobile } from '../../utils';

export function Banners({ isMobile }) {
    return (
        <section className="bannersSection">
            {isMobile ?
                bannersMobile.map((bannerMobile) => {
                    return (
                        <img key={bannerMobile.imageUrl} src={bannerMobile.imageUrl} alt={bannerMobile.imageAlt} title={bannerMobile.imageTitle} loading='lazy' />
                    )
                })
                :
                bannersDesktop.map((banner) => {
                    return (
                        <img key={banner.imageUrl} src={banner.imageUrl} alt={banner.imageAlt} title={banner.imageTitle} loading='lazy' />
                    )
                })
            }
        </section>
    )
}