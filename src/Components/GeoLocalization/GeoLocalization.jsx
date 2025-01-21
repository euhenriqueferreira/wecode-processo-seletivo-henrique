// React
import { useState } from "react";
// Components
import { useEffect } from "react";
import { GeoLocalizationBar } from "./GeoLocalizationBar";
import { GeoLocalizationModal } from "./GeoLocalizationModal";

export function GeoLocalization(props) {
    const storedLocalization = JSON.parse(localStorage.getItem('currentLocalization')) || null;

    const [isModalVisible, setIsModalVisible] = useState(storedLocalization ? false : true);
    const [currentLocalization, setCurrentLocalization] = useState(storedLocalization?.localidade || 'Indefinido');

    useEffect(() => {
        if (currentLocalization !== 'Indefinido') {
            localStorage.setItem('currentLocalization', JSON.stringify({ localidade: currentLocalization }));
        }
    }, [currentLocalization]);


    function handleClickShowModal(event) {
        event.preventDefault();
        setIsModalVisible(true);
    }

    function handleClickHideModal() {
        setIsModalVisible(false);
    }

    return (
        <>
            <GeoLocalizationBar currentLocalization={currentLocalization} handleClickShowModal={handleClickShowModal} hasWindowScrolled={props.hasWindowScrolled} />
            <GeoLocalizationModal setCurrentLocalization={setCurrentLocalization} storedLocalization={storedLocalization} isModalVisible={isModalVisible} handleClickHideModal={handleClickHideModal} />
        </>
    )
}