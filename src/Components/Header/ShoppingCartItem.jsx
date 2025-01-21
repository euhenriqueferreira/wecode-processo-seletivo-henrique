import { useState } from 'react';
import './ShoppingCartItem.scss';

export function ShoppingCartItem({ product, setShouldRecalculate, handleRemoveItemFromCart }) {

    const [productQty, setProductQty] = useState(product.qty)

    function getProductPrice() {
        const price = product.productPromotion || product.productPrice;
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    function handleAddItemCount() {
        updateQuantity(productQty + 1)
    }

    function handleSubItemCount() {
        productQty > 1 && updateQuantity(productQty - 1)
    }

    function updateQuantity(newQty) {
        setProductQty(newQty);
        product.qty = newQty;
        setShouldRecalculate(true);
    }

    return (
        <div className="shoppingCartItem">
            <div className="itemContent">
                <div className="itemPhoto">
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className="itemInfos">
                    <div>
                        <h3>{product.productName}</h3>
                        <p className="number">Tamanho: {product.selectedNumber}</p>
                    </div>
                    <p className="price">{getProductPrice()}</p>
                </div>
            </div>
            <footer>
                <div className="counter">
                    <button onClick={handleSubItemCount}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.152 8.26H10.608V9.268H5.152V8.26Z" fill="currentColor" />
                        </svg>
                    </button>
                    <span>{productQty}</span>
                    <button onClick={handleAddItemCount}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.164 7.78V5.028H8.172V7.78H10.94V8.788H8.172V11.556H7.164V8.788H4.412V7.78H7.164Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <button className="removeItem" onClick={() => handleRemoveItemFromCart(product.id)}>
                    Remover
                </button>
            </footer>
        </div>
    )
}