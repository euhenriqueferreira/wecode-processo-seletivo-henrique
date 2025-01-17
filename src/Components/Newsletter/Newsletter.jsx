import { useEffect, useState } from 'react';
import './Newsletter.scss';

export function Newsletter() {

    const coupons = [
        {
            id: 1,
            couponName: "BEMVINDO"
        },
        {
            id: 2,
            couponName: "CUPOM10"
        },
        {
            id: 3,
            couponName: "ECONOMIZA10"
        },
    ]

    const [registeredOnNewsletter, setRegisteredOnNewsletter] = useState(localStorage.getItem('registeredOnNewsletter') ? localStorage.getItem('registeredOnNewsletter') : '');
    const [selectedCoupon, setSelectedCoupon] = useState(localStorage.getItem('selectedCoupon') ? localStorage.getItem('selectedCoupon') : '');
    const [couponCopied, setCouponCopied] = useState(false);

    useEffect(() => {
        // Pega um cupom aleatório da lista
        const selectedCoupon = localStorage.getItem('selectedCoupon') ? localStorage.getItem('selectedCoupon') : coupons[Math.floor(Math.random() * coupons.length)].couponName;
        document.querySelector('.couponName span').innerText = selectedCoupon;

        localStorage.setItem('selectedCoupon', selectedCoupon);

        setSelectedCoupon(selectedCoupon)
    }, [])

    function handleCouponFormSubmit(event) {
        event.preventDefault();
        const emailField = event.target.querySelector('#email')
        const insertedEmail = emailField.value
        const regexEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

        const errorSpan = emailField.nextElementSibling;

        // Email Required
        if (!insertedEmail) {
            errorSpan.innerText = "O campo e-mail é obrigatório.";
            errorSpan.style.display = 'block';

            return false
        }

        // Email should be an email
        if (!(new RegExp(regexEmail).test(insertedEmail))) {
            errorSpan.innerText = "O e-mail é inválido.";
            errorSpan.style.display = 'block';

            return false
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

        return false;
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
                            <span></span>
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