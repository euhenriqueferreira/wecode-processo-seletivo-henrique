import './ShoppingCartItem.scss'

export function ShoppingCartItem() {
    return (
        <div className="shoppingCartItem">
            <div className="itemContent">
                <div className="itemPhoto">
                    <img src="static/images/produtos/produto-1.png" alt="" />
                </div>
                <div className="itemInfos">
                    <div>
                        <h3>Scarpin Sligback Bebecê Salto Médio Taça Detalh...</h3>
                        <p className="number">Tamanho: 34</p>
                    </div>
                    <p className="price">R$ 179,90</p>
                </div>
            </div>
            <footer>
                <div className="counter">
                    <button>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.152 8.26H10.608V9.268H5.152V8.26Z" fill="currentColor" />
                        </svg>
                    </button>
                    <span>1</span>
                    <button>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.164 7.78V5.028H8.172V7.78H10.94V8.788H8.172V11.556H7.164V8.788H4.412V7.78H7.164Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <button className="removeItem">
                    Remover
                </button>
            </footer>
        </div>
    )
}