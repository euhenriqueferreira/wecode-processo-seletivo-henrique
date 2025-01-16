import './GeoLocalizationBar.scss'

export function GeoLocalizationBar({ currentLocalization, handleClickShowModal }) {
    return (
        <div className="geoLocalizationWrapper">
            <p>Você está em: <span>{currentLocalization}</span></p>
            <a href="" onClick={handleClickShowModal}>Alterar</a>
        </div>
    )
}