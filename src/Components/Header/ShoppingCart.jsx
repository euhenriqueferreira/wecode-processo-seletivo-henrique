import { useEffect, useState } from 'react';
import './ShoppingCart.scss';
import { ShoppingCartItem } from './ShoppingCartItem';

export function ShoppingCart({ handleCloseShoppingCart, isShoppingCartOpened, productsInCart, handleUpdateCartProducts }) {

    const [subTotal, setSubTotal] = useState('R$ 00,00');
    const [discount, setDiscount] = useState('R$ 00,00');
    const [total, setTotal] = useState('R$ 00,00');
    const [shouldRecalculate, setShouldRecalculate] = useState(false);

    const calculateSubTotal = (items) =>
        items.reduce((acc, item) => acc + ((item.productPrice || 0) * (item.qty || 0)), 0);

    const calculateTotalWithDiscount = (items) =>
        items.reduce((acc, item) => acc + ((item.productPromotion || item.productPrice || 0) * (item.qty || 0)), 0);

    const calculateDiscount = (items) =>
        items.reduce((acc, item) => acc + ((item.productPromotion ? (item.productPrice || 0) - (item.productPromotion || 0) : 0) * (item.qty || 0)), 0);

    useEffect(() => {
        const subTotalValue = calculateSubTotal(productsInCart);
        const totalValue = calculateTotalWithDiscount(productsInCart);
        const discountValue = calculateDiscount(productsInCart);

        setSubTotal(subTotalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        setTotal(totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        setDiscount(discountValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

        setShouldRecalculate(false);
    }, [productsInCart, shouldRecalculate])

    function handleShoppingCartClick(event) {
        if (event.target.classList.contains('shoppingCart')) {
            handleCloseShoppingCart()
        }
    }

    function handleRemoveItemFromCart(id) {
        const newShoppingCartList = productsInCart.filter((item) => item.id !== id)
        handleUpdateCartProducts(newShoppingCartList)
    }

    return (
        <div className={`shoppingCart ${isShoppingCartOpened ? 'opened' : ''}`} onClick={handleShoppingCartClick}>
            <div className="shoppingCartWrapper">
                <header>
                    <h2>Carrinho</h2>
                    <button className="closeShoppingCart" onClick={handleCloseShoppingCart}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="currentColor" />
                        </svg>
                    </button>
                </header>
                <ul className="itemsList">
                    {productsInCart.map((productItem) => {
                        return (
                            <ShoppingCartItem key={productItem.id} product={productItem} setShouldRecalculate={setShouldRecalculate} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                        )
                    })}
                </ul>
                <footer>
                    <ul>
                        <li>
                            <p>Subtotal</p>
                            <span>{subTotal}</span>
                        </li>
                        <li>
                            <p>Descontos</p>
                            <span className='discount'>- {discount}</span>
                        </li>
                        <li>
                            <p>Total</p>
                            <span>
                                {total}
                            </span>
                        </li>
                    </ul>
                    <a href="#" className='proceed'>Finalizar pedido</a>
                    <a href="" className='back' onClick={handleCloseShoppingCart}>Continuar comprando</a>
                </footer>
            </div>
        </div>
    )
}