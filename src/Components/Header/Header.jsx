// Styles
import './Header.scss';
// React
import { useState } from 'react';
// Data
import { productCategories } from '../../utils';
// Components
import { DropdownMenu } from './DropdownMenu';
import { MenuMobile } from './MenuMobile';
import { ShoppingCart } from './ShoppingCart';

export function Header({ windowScrolled, shoppingCartAddedItems, setShoppingCartAddedItems }) {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuWhite, setMenuWhite] = useState(false);

    const [menuMobileOpened, setMenuMobileOpened] = useState(false);
    const [shoppingCartOpened, setShoppingCartOpened] = useState(false);

    function handleMouseEnterHeader() {
        setMenuWhite(true)
    }

    function handleMouseLeaveHeader() {
        setMenuWhite(false)
    }

    function handleMouseEnterNavigationLink(event) {
        setMenuWhite(true)
        setDropdownVisible(true)
    }

    function handleMouseLeaveNavigationLink(event) {
        setDropdownVisible(false)
    }

    function handleMouseEnterDropdownMenu() {
        setDropdownVisible(true)
        setMenuWhite(true)
    }

    function handleMouseLeaveDropdownMenu() {
        setDropdownVisible(false)
        setMenuWhite(false)
    }

    function handleOpenMenuMobile(event) {
        event.preventDefault();

        setMenuMobileOpened(true);
    }

    function handleCloseMenuMobile() {
        setMenuMobileOpened(false);
    }

    function handleOpenShoppingCart(event) {
        event.preventDefault();

        setShoppingCartOpened(true);
    }

    function handleCloseShoppingCart(event) {
        event.preventDefault();
        setShoppingCartOpened(false);
    }

    function countShoppingCartItems() {
        return shoppingCartAddedItems.length || 0;
    }

    return (
        <header className={`header ${menuWhite ? 'hovered' : ''} ${windowScrolled ? 'scrolled' : ''}`}>
            <div className="headerContainer">
                <div className="headerWrapper" onMouseEnter={handleMouseEnterHeader} onMouseLeave={handleMouseLeaveHeader}>
                    <div className='mobileLeftLinks'>
                        <ul>
                            <li>
                                <a href="" aria-label='Abrir muen lateral' onClick={handleOpenMenuMobile}>
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7095_131)">
                                            <path d="M14 6.91663H0V8.08329H14V6.91663Z" fill="currentColor" />
                                            <path d="M14 2.83337H0V4.00004H14V2.83337Z" fill="currentColor" />
                                            <path d="M14 11H0V12.1667H14V11Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7095_131">
                                                <rect width="14" height="14" fill="currentColor" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Pesquisar'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3006_1594)">
                                            <path d="M19.9998 18.8215L14.7815 13.6032C16.137 11.9453 16.8035 9.82989 16.643 7.69445C16.4826 5.55901 15.5075 3.56693 13.9195 2.13025C12.3314 0.693577 10.252 -0.0777715 8.11119 -0.024245C5.97039 0.0292815 3.93207 0.903588 2.41783 2.41783C0.903588 3.93207 0.0292815 5.97039 -0.024245 8.11119C-0.0777715 10.252 0.693577 12.3314 2.13025 13.9195C3.56693 15.5075 5.55901 16.4826 7.69445 16.643C9.82989 16.8035 11.9453 16.137 13.6032 14.7815L18.8215 19.9998L19.9998 18.8215ZM8.33315 14.9998C7.01461 14.9998 5.72568 14.6088 4.62935 13.8763C3.53302 13.1437 2.67854 12.1025 2.17395 10.8844C1.66937 9.6662 1.53735 8.32576 1.79458 7.03255C2.05182 5.73934 2.68676 4.55146 3.61911 3.61911C4.55146 2.68676 5.73934 2.05182 7.03255 1.79458C8.32576 1.53735 9.6662 1.66937 10.8844 2.17395C12.1025 2.67854 13.1437 3.53302 13.8763 4.62935C14.6088 5.72568 14.9998 7.01461 14.9998 8.33315C14.9978 10.1007 14.2948 11.7952 13.045 13.045C11.7952 14.2948 10.1007 14.9978 8.33315 14.9998Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3006_1594">
                                                <rect width="20" height="20" fill="currentColor" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <svg width="136" height="32" viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_7007_385)">
                                <path d="M134.913 27.1075C134.68 26.9515 134.368 27.0295 134.232 27.2828C132.848 29.8163 130.49 30.7127 128.385 30.7127C123.63 30.7127 121.097 25.9967 120.824 20.4231C120.805 20.1308 120.805 19.8384 120.805 19.5462V19.5267H134.447C134.641 19.5267 134.797 19.3708 134.797 19.1759C134.895 15.9799 133.452 9.88025 126.398 9.88025C120.239 9.88025 114.958 14.4599 114.958 20.8714C114.958 27.3998 120.434 31.9988 126.086 31.9988C129.633 31.9988 133.433 30.206 135.167 27.2634L134.913 27.1075ZM125.326 10.4259C128.113 11.0495 129.048 15.824 128.912 19.0006H120.805C120.902 13.9532 122.812 10.4259 125.326 10.4259Z" fill="currentColor" />
                                <path d="M90.5806 27.2828C89.197 29.8163 86.839 30.7127 84.7344 30.7127C79.9793 30.7127 77.446 25.9967 77.173 20.4231C77.1536 20.1308 77.1536 19.8384 77.1536 19.5462V19.5267H90.795C90.99 19.5267 91.1458 19.3708 91.1458 19.1759C91.2433 15.9799 89.8012 9.88025 82.7466 9.88025C76.5885 9.88025 71.3073 14.4599 71.3073 20.8714C71.3073 27.3998 76.7833 31.9988 82.4348 31.9988C85.9816 31.9988 89.7817 30.206 91.5161 27.2634L91.3017 27.1075C91.0484 26.9515 90.717 27.0295 90.5806 27.2828ZM81.6748 10.4259C84.4616 11.0495 85.3969 15.824 85.2605 19.0006H77.1536C77.2705 13.9532 79.1804 10.4259 81.6748 10.4259Z" fill="currentColor" />
                                <path d="M47.5494 0V25.9772C47.5494 29.3096 50.2388 31.9989 53.5712 31.9989V6.02172C53.5712 2.7088 50.8818 0 47.5494 0Z" fill="currentColor" />
                                <path d="M57.2543 9.5293C56.9426 9.5293 56.6892 9.76315 56.6892 10.075C56.6502 10.075 56.6698 10.075 56.6892 10.075C60.3919 10.9909 62.516 16.1747 62.0483 22.6056C61.6975 27.458 60.0995 31.0048 56.6892 31.4531C56.6892 31.7648 56.9426 32.0183 57.2739 31.9987C58.6575 31.9403 60.0216 31.6284 61.2883 31.0828C66.6475 28.7637 69.863 22.3328 67.2126 16.2525C65.3223 11.9263 61.3272 9.66571 57.2543 9.5293Z" fill="currentColor" />
                                <path d="M0 0V25.9772C0 29.3096 2.68932 31.9989 6.02172 31.9989V6.02172C6.02172 2.7088 3.33241 0 0 0Z" fill="currentColor" />
                                <path d="M9.70484 9.5293C9.39302 9.5293 9.13969 9.76315 9.13969 10.075C9.10072 10.075 9.1202 10.075 9.13969 10.075C12.8424 10.9909 14.9665 16.1747 14.4988 22.6056C14.148 27.458 12.5501 31.0048 9.13969 31.4531C9.13969 31.7648 9.39302 32.0183 9.72432 31.9987C11.108 31.9403 12.4721 31.6284 13.7388 31.0828C19.098 28.7637 22.3135 22.3328 19.6631 16.2525C17.7728 11.9263 13.7777 9.66571 9.70484 9.5293Z" fill="currentColor" />
                                <path d="M43.0104 27.2828C41.6268 29.8163 39.2688 30.7127 37.164 30.7127C32.4091 30.7127 29.8756 25.9967 29.6028 20.4231C29.5833 20.1308 29.5833 19.8384 29.5833 19.5462V19.5267H43.2248C43.4196 19.5267 43.5756 19.3708 43.5756 19.1759C43.6729 15.9799 42.2309 9.88025 35.1763 9.88025C29.0181 9.88025 23.7369 14.4599 23.7369 20.8714C23.7369 27.3998 29.2131 31.9988 34.8645 31.9988C38.4113 31.9988 42.2113 30.206 43.9459 27.2634L43.7315 27.1075C43.4587 26.9515 43.1468 27.0295 43.0104 27.2828ZM34.1045 10.4259C36.8912 11.0495 37.8267 15.824 37.6903 19.0006H29.5833C29.6808 13.9532 31.5905 10.4259 34.1045 10.4259Z" fill="currentColor" />
                                <path d="M112.854 27.3416C111.471 29.8556 109.113 30.7326 106.988 30.7326C101.999 30.7326 99.4271 25.5099 99.4271 19.1958C99.4271 15.2398 100.44 12.1023 102.604 10.933C102.604 10.5432 102.233 10.2509 101.844 10.3484C97.108 11.6151 93.5807 15.649 93.5807 20.8912C93.5807 27.3416 98.9983 31.9992 104.708 31.9992C108.255 31.9992 112.055 30.2064 113.79 27.2638L113.634 27.1468C113.361 26.9714 113.01 27.0494 112.854 27.3416Z" fill="currentColor" />
                                <path d="M104.804 10.6403C106.617 11.8095 109.267 14.4404 110.943 16.2723L112.56 11.6341C110.767 10.6987 107.805 9.88025 105.175 9.88025H105.019C104.785 9.88025 104.609 10.0751 104.609 10.2895C104.609 10.4454 104.687 10.5623 104.804 10.6403Z" fill="currentColor" />
                                <path d="M125.035 3.07924L130.667 6.87936L130.901 6.70397L125.152 0.078125H124.918L119.169 6.70397L119.403 6.87936L125.035 3.07924Z" fill="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7007_385">
                                    <rect width="136" height="32" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>
                                <a onMouseEnter={handleMouseEnterNavigationLink} onMouseLeave={handleMouseLeaveNavigationLink} href="#">Produtos</a>
                            </li>
                            <li>
                                <a href="#">Lançamentos</a>
                            </li>
                            <li>
                                <a href="#">Outlet</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="quickLinks">
                        <ul>
                            <li>
                                <a href="" aria-label='Pesquisar'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3006_1594)">
                                            <path d="M19.9998 18.8215L14.7815 13.6032C16.137 11.9453 16.8035 9.82989 16.643 7.69445C16.4826 5.55901 15.5075 3.56693 13.9195 2.13025C12.3314 0.693577 10.252 -0.0777715 8.11119 -0.024245C5.97039 0.0292815 3.93207 0.903588 2.41783 2.41783C0.903588 3.93207 0.0292815 5.97039 -0.024245 8.11119C-0.0777715 10.252 0.693577 12.3314 2.13025 13.9195C3.56693 15.5075 5.55901 16.4826 7.69445 16.643C9.82989 16.8035 11.9453 16.137 13.6032 14.7815L18.8215 19.9998L19.9998 18.8215ZM8.33315 14.9998C7.01461 14.9998 5.72568 14.6088 4.62935 13.8763C3.53302 13.1437 2.67854 12.1025 2.17395 10.8844C1.66937 9.6662 1.53735 8.32576 1.79458 7.03255C2.05182 5.73934 2.68676 4.55146 3.61911 3.61911C4.55146 2.68676 5.73934 2.05182 7.03255 1.79458C8.32576 1.53735 9.6662 1.66937 10.8844 2.17395C12.1025 2.67854 13.1437 3.53302 13.8763 4.62935C14.6088 5.72568 14.9998 7.01461 14.9998 8.33315C14.9978 10.1007 14.2948 11.7952 13.045 13.045C11.7952 14.2948 10.1007 14.9978 8.33315 14.9998Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3006_1594">
                                                <rect width="20" height="20" fill="currentColor" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Ir para minha conta'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3006_1597)">
                                            <path d="M17.5 19.9998H15.8333V15.7973C15.8327 15.144 15.5728 14.5176 15.1109 14.0556C14.6489 13.5937 14.0225 13.3338 13.3692 13.3332H6.63083C5.9775 13.3338 5.35111 13.5937 4.88914 14.0556C4.42716 14.5176 4.16733 15.144 4.16667 15.7973V19.9998H2.5V15.7973C2.50132 14.7022 2.93696 13.6523 3.71135 12.8779C4.48575 12.1035 5.53567 11.6678 6.63083 11.6665H13.3692C14.4643 11.6678 15.5143 12.1035 16.2886 12.8779C17.063 13.6523 17.4987 14.7022 17.5 15.7973V19.9998Z" fill="currentColor" />
                                            <path d="M10 9.99988C9.0111 9.99988 8.0444 9.70664 7.22215 9.15723C6.39991 8.60782 5.75904 7.82693 5.3806 6.9133C5.00217 5.99967 4.90315 4.99433 5.09608 4.02443C5.289 3.05452 5.76521 2.16361 6.46447 1.46435C7.16373 0.765084 8.05465 0.28888 9.02455 0.0959538C9.99446 -0.0969723 10.9998 0.00204436 11.9134 0.380483C12.827 0.758921 13.6079 1.39978 14.1573 2.22203C14.7068 3.04427 15 4.01097 15 4.99988C14.9987 6.32556 14.4715 7.59656 13.5341 8.53395C12.5967 9.47135 11.3257 9.99856 10 9.99988ZM10 1.66655C9.34073 1.66655 8.69627 1.86204 8.1481 2.22831C7.59994 2.59459 7.1727 3.11518 6.9204 3.72427C6.66811 4.33336 6.6021 5.00358 6.73072 5.65018C6.85934 6.29678 7.1768 6.89073 7.64298 7.3569C8.10915 7.82308 8.7031 8.14055 9.3497 8.26917C9.9963 8.39778 10.6665 8.33177 11.2756 8.07948C11.8847 7.82719 12.4053 7.39994 12.7716 6.85178C13.1378 6.30362 13.3333 5.65915 13.3333 4.99988C13.3333 4.11583 12.9821 3.26798 12.357 2.64286C11.7319 2.01774 10.8841 1.66655 10 1.66655Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3006_1597">
                                                <rect width="20" height="20" fill="currentColor" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Abrir carrinho de compras' onClick={handleOpenShoppingCart}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_7007_375)">
                                            <path d="M15 5C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5H0V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V5H15ZM10 1.66667C10.8841 1.66667 11.7319 2.01786 12.357 2.64298C12.9821 3.2681 13.3333 4.11594 13.3333 5H6.66667C6.66667 4.11594 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667ZM18.3333 17.5C18.3333 17.721 18.2455 17.933 18.0893 18.0893C17.933 18.2455 17.721 18.3333 17.5 18.3333H2.5C2.27899 18.3333 2.06702 18.2455 1.91074 18.0893C1.75446 17.933 1.66667 17.721 1.66667 17.5V6.66667H5V8.33333H6.66667V6.66667H13.3333V8.33333H15V6.66667H18.3333V17.5Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7007_375">
                                                <rect width="20" height="20" fill="currentColor" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{countShoppingCartItems()}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <DropdownMenu
                    dropdownVisible={dropdownVisible}
                    handleMouseEnterDropdownMenu={handleMouseEnterDropdownMenu}
                    handleMouseLeaveDropdownMenu={handleMouseLeaveDropdownMenu}
                    productCategories={productCategories}
                />
            </div>
            <MenuMobile menuMobileOpened={menuMobileOpened} handleCloseMenuMobile={handleCloseMenuMobile} setMenuMobileOpened={setMenuMobileOpened} />
            <ShoppingCart setShoppingCartOpened={setShoppingCartOpened} shoppingCartOpened={shoppingCartOpened} handleCloseShoppingCart={handleCloseShoppingCart} shoppingCartAddedItems={shoppingCartAddedItems} setShoppingCartAddedItems={setShoppingCartAddedItems} />
        </header>
    )
}