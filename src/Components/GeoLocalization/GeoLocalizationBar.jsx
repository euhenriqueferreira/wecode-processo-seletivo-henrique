// Styles
import './GeoLocalizationBar.scss'

export function GeoLocalizationBar({ currentLocalization, handleClickShowModal, windowScrolled }) {
    return (
        <div className={`geoLocalizationWrapper ${windowScrolled ? 'scrolled' : ''}`}>
            <p>Você está em: <span>{currentLocalization}</span></p>
            <a href="" onClick={handleClickShowModal}>Alterar</a>
        </div>
    )
}