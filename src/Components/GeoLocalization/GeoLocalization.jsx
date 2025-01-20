// React
import { useState } from "react";
// Components
import { useEffect } from "react";
import { GeoLocalizationBar } from "./GeoLocalizationBar";
import { GeoLocalizationModal } from "./GeoLocalizationModal";

export function GeoLocalization({ windowScrolled }) {
    const storedLocalization = JSON.parse(localStorage.getItem('currentLocalization')) || null;

    const [modalVisible, setModalVisible] = useState(storedLocalization ? false : true);
    const [currentLocalization, setCurrentLocalization] = useState(storedLocalization?.localidade || 'Indefinido');

    useEffect(() => {
        if (currentLocalization !== 'Indefinido') {
            localStorage.setItem('currentLocalization', JSON.stringify({ localidade: currentLocalization }));
        }
    }, [currentLocalization]);


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