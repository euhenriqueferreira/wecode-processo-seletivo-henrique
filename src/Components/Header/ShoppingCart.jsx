import './ShoppingCart.scss';
import { ShoppingCartItem } from './ShoppingCartItem';

export function ShoppingCart({ handleCloseShoppingCart, shoppingCartOpened, setShoppingCartOpened, shoppingCartAddedItems }) {

    function handleShoppingCartClick(event) {
        if (event.target.classList.contains('shoppingCart')) {
            setShoppingCartOpened(false)
        }
    }

    return (
        <div className={`shoppingCart ${shoppingCartOpened ? 'opened' : ''}`} onClick={handleShoppingCartClick}>
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
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    {/* itemCart */}
                </ul>
                <footer>
                    <ul>
                        <li>
                            <p>Subtotal</p>
                            <span>R$ 1055,89</span>
                        </li>
                        <li>
                            <p>Descontos</p>
                            <span className='discount'>- R$ 191,62</span>
                        </li>
                        <li>
                            <p>Total</p>
                            <span>
                                R$ 864,27
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