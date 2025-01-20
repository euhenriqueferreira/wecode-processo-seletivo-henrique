// Styles
import './ProductCard.scss';
// React
import { useState } from "react";

export function ProductCard({ product }) {

    const [productLiked, setProductLiked] = useState(false);

    function handleClickOnLike(event) {
        event.preventDefault();
        setProductLiked(!productLiked)
    }

    return (
        <a key={product.id} href="" className="productCard">
            <header>
                <img src={product.imageUrl} alt={product.imageAlt} title={product.imageTitle} loading='lazy' />

                <div className="topLine">
                    <div className="iconHeart" onClick={handleClickOnLike}>
                        {productLiked ?
                            <div className="blackHeart">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.207 0.4375C9.55044 0.447767 8.90816 0.632023 8.34507 0.971663C7.78197 1.3113 7.318 1.7943 7 2.37187C6.682 1.7943 6.21803 1.3113 5.65493 0.971663C5.09184 0.632023 4.44956 0.447767 3.79296 0.4375C2.74627 0.483216 1.76011 0.943516 1.04994 1.71784C0.339772 2.49216 -0.0366824 3.51756 0.00282284 4.57002C0.00282284 8.54134 6.39125 13.1281 6.66297 13.3228L7 13.5625L7.33703 13.3228C7.60875 13.1293 13.9972 8.54134 13.9972 4.57002C14.0367 3.51756 13.6602 2.49216 12.9501 1.71784C12.2399 0.943516 11.2537 0.483216 10.207 0.4375ZM7 12.1193C5.10318 10.6949 1.16902 7.19549 1.16902 4.57002C1.12916 3.82834 1.38265 3.10091 1.8742 2.54637C2.36575 1.99184 3.05548 1.65519 3.79296 1.60985C4.53044 1.65519 5.22017 1.99184 5.71172 2.54637C6.20327 3.10091 6.45676 3.82834 6.4169 4.57002H7.5831C7.54324 3.82834 7.79673 3.10091 8.28827 2.54637C8.77983 1.99184 9.46956 1.65519 10.207 1.60985C10.9445 1.65519 11.6343 1.99184 12.1258 2.54637C12.6174 3.10091 12.8708 3.82834 12.831 4.57002C12.831 7.19666 8.89682 10.6949 7 12.1193Z" fill="currentColor" />
                                    <path d="M7 12.1193C5.10318 10.6949 1.16902 7.19549 1.16902 4.57002C1.12916 3.82834 1.38265 3.10091 1.8742 2.54637C2.36575 1.99184 3.05548 1.65519 3.79296 1.60985C4.53044 1.65519 5.22017 1.99184 5.71172 2.54637C6.20327 3.10091 6.45676 3.82834 6.4169 4.57002H7.5831C7.54324 3.82834 7.79673 3.10091 8.28827 2.54637C8.77983 1.99184 9.46956 1.65519 10.207 1.60985C10.9445 1.65519 11.6343 1.99184 12.1258 2.54637C12.6174 3.10091 12.8708 3.82834 12.831 4.57002C12.831 7.19666 8.89682 10.6949 7 12.1193Z" fill="currentColor" />
                                </svg>
                            </div>
                            :
                            <div className="transparentHeart">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.207 0.4375C9.55044 0.447767 8.90816 0.632023 8.34507 0.971663C7.78197 1.3113 7.318 1.7943 7 2.37187C6.682 1.7943 6.21803 1.3113 5.65493 0.971663C5.09184 0.632023 4.44956 0.447767 3.79296 0.4375C2.74626 0.483216 1.76011 0.943516 1.04994 1.71784C0.339772 2.49216 -0.0366824 3.51756 0.00282284 4.57002C0.00282284 8.54134 6.39125 13.1281 6.66297 13.3228L7 13.5625L7.33703 13.3228C7.60875 13.1293 13.9972 8.54134 13.9972 4.57002C14.0367 3.51756 13.6602 2.49216 12.9501 1.71784C12.2399 0.943516 11.2537 0.483216 10.207 0.4375ZM7 12.1193C5.10318 10.6949 1.16902 7.19549 1.16902 4.57002C1.12916 3.82834 1.38265 3.10091 1.8742 2.54637C2.36575 1.99184 3.05548 1.65519 3.79296 1.60985C4.53044 1.65519 5.22017 1.99184 5.71172 2.54637C6.20327 3.10091 6.45676 3.82834 6.4169 4.57002H7.5831C7.54324 3.82834 7.79673 3.10091 8.28828 2.54637C8.77983 1.99184 9.46956 1.65519 10.207 1.60985C10.9445 1.65519 11.6343 1.99184 12.1258 2.54637C12.6174 3.10091 12.8708 3.82834 12.831 4.57002C12.831 7.19666 8.89682 10.6949 7 12.1193Z" fill="currentColor" />
                                </svg>
                            </div>
                        }
                    </div>
                </div>

                <div className="actions">
                    <div className="iconAddToCart">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7056 3.89441C11.7056 2.91163 11.3152 1.96911 10.6202 1.27418C9.9253 0.57925 8.98278 0.188843 8 0.188843C7.01722 0.188843 6.0747 0.57925 5.37977 1.27418C4.68484 1.96911 4.29443 2.91163 4.29443 3.89441H0.588867V13.1583C0.588867 13.6497 0.784071 14.121 1.13153 14.4684C1.479 14.8159 1.95026 15.0111 2.44165 15.0111H9.23519V13.7759H2.44165C2.27785 13.7759 2.12077 13.7109 2.00495 13.595C1.88912 13.4792 1.82406 13.3221 1.82406 13.1583V5.1296H4.29443V6.36479H5.52962V5.1296H10.4704V6.36479H11.7056V5.1296H14.1759V8.83517H15.4111V3.89441H11.7056ZM5.52962 3.89441C5.52962 3.23922 5.78989 2.61087 6.25318 2.14759C6.71646 1.6843 7.34482 1.42403 8 1.42403C8.65518 1.42403 9.28354 1.6843 9.74682 2.14759C10.2101 2.61087 10.4704 3.23922 10.4704 3.89441H5.52962Z" fill="currentColor" />
                            <path d="M13.5584 10.0703H12.3232V11.9231H10.4705V13.1583H12.3232V15.0111H13.5584V13.1583H15.4112V11.9231H13.5584V10.0703Z" fill="currentColor" />
                        </svg>
                    </div>

                    {product.promotionPerCent !== null &&
                        <div className="promotionPerCent">
                            <p>{product.promotionPerCent}% OFF</p>
                        </div>
                    }
                </div>
            </header>
            <div className="productInfos">
                <h3>{product.productName}</h3>
                <div className="priceLine">
                    <p>{product.productPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    {product.productPromotion && <p className="promotion">{product.productPromotion.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>}
                </div>
            </div>
        </a>
    )
}