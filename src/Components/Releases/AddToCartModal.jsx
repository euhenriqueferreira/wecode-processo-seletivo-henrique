import { useState } from 'react';
import './AddToCartModal.scss';

export function AddToCartModal({ setProductToAddToCart, productToAddToCart, setProductsInCart }) {

    const [selectedNumber, setSelectedNumber] = useState(null)

    function handleNumberClick(number) {
        setSelectedNumber(number)
    }

    function handleAddProductToCart(selectedNumber) {
        const productWithNumberSelected = { ...productToAddToCart, selectedNumber: selectedNumber, qty: 1 }

        setProductsInCart(prevItems => [
            ...prevItems,
            productWithNumberSelected
        ])

        setProductToAddToCart(0)
    }

    function handleCloseModal() {
        setProductToAddToCart(0)
    }

    function handleClickOnBackground(event) {
        if (event.target.classList.contains('addToCartModal')) {
            setProductToAddToCart(0)
        }
    }

    return (
        <div className={`addToCartModal ${Object.keys(productToAddToCart).length > 0 ? 'visible' : ''}`} onClick={handleClickOnBackground}>
            <div className="addToCartModalWrapper">
                <div className="productImage">
                    <img src={productToAddToCart.imageUrl} alt={productToAddToCart.imageAlt} title={productToAddToCart.imageTitle} />
                </div>
                <div className="productInfos">
                    <button className="closeModalAddToCart" onClick={handleCloseModal}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="currentColor" />
                        </svg>
                    </button>

                    <h2>{productToAddToCart.productName}</h2>

                    <div className="numbers">
                        <p>Tamanho: <span>{selectedNumber}</span></p>
                        <ul>
                            {productToAddToCart.numbers.map((number) => {
                                return (
                                    <li key={number.number} className={`${selectedNumber === number.number ? 'active' : ''}`} onClick={() => handleNumberClick(number.number)}>
                                        <span>{number.number}</span>
                                        {!number.qty > 0 ? <div className="bar"></div> : ''}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <button className="addToCartButton" onClick={() => handleAddProductToCart(selectedNumber)}>
                        <span>
                            Adicionar ao carrinho
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7056 3.89441C11.7056 2.91163 11.3152 1.96911 10.6202 1.27418C9.9253 0.57925 8.98278 0.188843 8 0.188843C7.01722 0.188843 6.0747 0.57925 5.37977 1.27418C4.68484 1.96911 4.29443 2.91163 4.29443 3.89441H0.588867V13.1583C0.588867 13.6497 0.784071 14.121 1.13153 14.4684C1.479 14.8159 1.95026 15.0111 2.44165 15.0111H9.23519V13.7759H2.44165C2.27785 13.7759 2.12077 13.7109 2.00495 13.595C1.88912 13.4792 1.82406 13.3221 1.82406 13.1583V5.1296H4.29443V6.36479H5.52962V5.1296H10.4704V6.36479H11.7056V5.1296H14.1759V8.83517H15.4111V3.89441H11.7056ZM5.52962 3.89441C5.52962 3.23922 5.78989 2.61087 6.25318 2.14759C6.71646 1.6843 7.34482 1.42403 8 1.42403C8.65518 1.42403 9.28354 1.6843 9.74682 2.14759C10.2101 2.61087 10.4704 3.23922 10.4704 3.89441H5.52962Z" fill="currentColor" />
                            <path d="M13.5584 10.0703H12.3232V11.9231H10.4705V13.1583H12.3232V15.0111H13.5584V13.1583H15.4112V11.9231H13.5584V10.0703Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}