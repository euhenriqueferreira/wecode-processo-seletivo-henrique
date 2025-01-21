// Styles
import './GeoLocalizationBar.scss'

export function GeoLocalizationBar({ currentLocalization, handleClickShowModal, hasWindowScrolled }) {
    return (
        <div className={`geoLocalizationWrapper ${hasWindowScrolled ? 'scrolled' : ''}`}>
            <p>Você está em: <span>{currentLocalization}</span></p>
            <a href="" onClick={handleClickShowModal}>Alterar</a>
        </div>
    )
}