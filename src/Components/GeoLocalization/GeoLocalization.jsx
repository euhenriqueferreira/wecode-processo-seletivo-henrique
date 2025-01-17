import { useState } from "react";
import { GeoLocalizationBar } from "./GeoLocalizationBar";
import { GeoLocalizationModal } from "./GeoLocalizationModal";

export function GeoLocalization({ windowScrolled }) {
    const storedLocalization = localStorage.getItem('currentLocalization') ? JSON.parse(localStorage.getItem('currentLocalization')) : null;

    const [modalVisible, setModalVisible] = useState(storedLocalization ? false : true);
    const [currentLocalization, setCurrentLocalization] = useState(storedLocalization ? storedLocalization.localidade : 'Indefinido');

    function handleClickShowModal(event) {
        event.preventDefault();
        setModalVisible(true);
    }

    function handleClickHideModal() {
        setModalVisible(false);
    }

    return (
        <>
            <GeoLocalizationBar currentLocalization={currentLocalization} handleClickShowModal={handleClickShowModal} windowScrolled={windowScrolled} />
            <GeoLocalizationModal setCurrentLocalization={setCurrentLocalization} storedLocalization={storedLocalization} modalVisible={modalVisible} handleClickHideModal={handleClickHideModal} />
        </>
    )
}