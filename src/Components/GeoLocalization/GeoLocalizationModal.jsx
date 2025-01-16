import './GeoLocalizationModal.scss';

export function GeoLocalizationModal({ setCurrentLocalization, storedLocalization, modalVisible, handleClickHideModal }) {
    console.log('Stored fodase', storedLocalization)
    function handleClickModalBackground(event) {
        if (event.target.classList.contains('modalBackground')) {
            handleClickHideModal();
        }
    }

    async function handleFormSubmit(event) {
        event.preventDefault();
        const ZipCodeField = document.getElementById('zipCode');
        const insertedZipCode = ZipCodeField.value.trim();
        const regexZipCode = /^[0-9]{5}-?[0-9]{3}$/;

        if (insertedZipCode && regexZipCode.test(insertedZipCode)) {
            const zipCodeToSend = insertedZipCode.replace("-", "");
            const currentLocal = await fetchCurrentLocalFromAPI(zipCodeToSend);

            document.getElementById('city').value = currentLocal.localidade;
            document.getElementById('uf').value = currentLocal.estado;

            setCurrentLocalization(currentLocal.localidade);
            localStorage.setItem('currentLocalization', JSON.stringify(currentLocal));

            handleClickHideModal();
        } else {
            const errorElement = ZipCodeField.nextElementSibling
            errorElement.innerText = "Formato de CEP inválido! Insira no formato '00000-000' ou '00000000'";
            errorElement.style.display = "block";
        }
    }

    async function fetchCurrentLocalFromAPI(zipCodeToSend) {

        const url = `https://viacep.com.br/ws/${zipCodeToSend}/json/`;

        try {
            const response = await fetch(url);
            const responseData = await response.json();

            return responseData;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    return (
        <div className={`modalBackground ${modalVisible ? 'visible' : ''}`} onClick={handleClickModalBackground}>
            <div className="modalWrapper">
                <button className="closeButton" onClick={handleClickHideModal}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="currentColor" />
                    </svg>
                </button>

                <h2>Personalize sua experiência e encontre produtos perto de você!</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='inputLine'>
                        <label htmlFor="zipCode">Código Postal*</label>
                        <input type="text" name="zipCode" id="zipCode" placeholder='00000-000' value={storedLocalization ? storedLocalization.cep : ''} required />
                        <div className='errorSpan'>Formato inválido!</div>
                    </div>
                    <div className='inputLine'>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" name="city" id="city" placeholder='Cidade' value={storedLocalization ? storedLocalization.localidade : ''} disabled />
                    </div>
                    <div className='inputLine'>
                        <label htmlFor="uf">Estado</label>
                        <input type="text" name="uf" id="uf" placeholder='Estado' value={storedLocalization ? storedLocalization.estado : ''} disabled />
                    </div>
                    {/* <div className='inputLine'>
                        <label htmlFor="uf">Estado</label>
                        <select name="uf" id="uf">
                            <option value="Opcional" disabled selected>Opcional</option>
                        </select>
                    </div> */}

                    <button type="submit">Salvar endereço</button>
                </form>
            </div>
        </div >
    )
}