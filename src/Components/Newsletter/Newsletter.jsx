// Styles
import './Newsletter.scss';
// React
import { useEffect, useState } from 'react';
// Data
import { discountCoupons } from '../../utils';

export function Newsletter() {

    const [registeredOnNewsletter, setRegisteredOnNewsletter] = useState(
        localStorage.getItem('registeredOnNewsletter') || ''
    );

    const [selectedCoupon, setSelectedCoupon] = useState(
        localStorage.getItem('selectedCoupon') || ''
    );

    const [couponCopied, setCouponCopied] = useState(false);

    const regexEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

    useEffect(() => {
        // Get a random coupon from the list
        const couponStored = localStorage.getItem('selectedCoupon');
        const selectedCoupon = couponStored || getRandomCoupon();

        // Stores on the state and local storage
        setSelectedCoupon(selectedCoupon)
        localStorage.setItem('selectedCoupon', selectedCoupon);
    }, [])

    function getRandomCoupon() {
        return discountCoupons[Math.floor(Math.random() * discountCoupons.length)].couponName
    }

    function handleCouponFormSubmit(event) {
        event.preventDefault();
        const emailField = event.target.querySelector('#email')
        const insertedEmail = emailField.value
        const errorSpan = emailField.nextElementSibling;

        // Email Required
        if (!insertedEmail) {
            return showError(errorSpan, "O campo e-mail é obrigatório.")
        }

        // Email should be an email
        if (!isValidEmail(insertedEmail)) {
            return showError(errorSpan, "O e-mail é inválido.")
        }

        localStorage.setItem('registeredOnNewsletter', true);
        setRegisteredOnNewsletter(true);
    }

    function handleCouponCopyClick() {
        // Copy to clipboard
        if (!couponCopied) {
            navigator.clipboard.writeText(selectedCoupon)
            setCouponCopied(true)
        }
    }

    function isValidEmail(email) {
        return new RegExp(regexEmail).test(email)
    }

    function showError(errorElement, errorMessage) {
        errorElement.innerText = errorMessage;
        errorElement.style.display = 'block';
    }

    return (
        <div className="newsletterContainer">
            <div className="newsletterWrapper">
                <div className={`newsletterForm ${!registeredOnNewsletter ? 'visible' : ''}`}>
                    <p>Cadastre-se e receba <span>10% OFF</span> na sua primeira compra!</p>
                    <form onSubmit={handleCouponFormSubmit}>
                        <div className='inputLine'>
                            <input type="text" name='email' id='email' placeholder='Digite seu e-mail' />
                            <div className="errorSpan"></div>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className={`newsletterCoupon ${registeredOnNewsletter ? 'visible' : ''}`}>
                    <p>Utilize o cupom abaixo e garanta seu desconto!</p>
                    <div className="couponRedeem">
                        <div className="couponName">
                            <span>{selectedCoupon}</span>
                        </div>
                        <button className="couponCopy" onClick={handleCouponCopyClick}>
                            {!couponCopied ? (<span>Copiar</span>) : (<span>Copiado</span>)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}