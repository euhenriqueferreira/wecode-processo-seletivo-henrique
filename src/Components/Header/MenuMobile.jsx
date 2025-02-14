// Styles
import './MenuMobile.scss';
// React
import { useState } from 'react';
// Data
import { menuMobileLinks } from '../../utils';

export function MenuMobile({ isMenuMobileOpened, handleCloseMenuMobile }) {

    const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null)

    function handleDropdownOpen(index) {
        setDropdownOpenIndex(index)
    }

    function handleMenuMobileClick(event) {
        if (event.target.classList.contains('menuMobile')) {
            handleCloseMenuMobile()
        }
    }

    function renderDropdown(dropdownItem, index) {
        return (
            <a key={index} href={dropdownItem.dropdownItemLink}>
                {dropdownItem.dropdownItemName}
            </a>
        )
    }

    function renderMenuMobileItem(menuMobileItem, index) {
        return (
            <div key={index}>
                {menuMobileItem.dropdownItems ? (
                    <>
                        <button data-index={index} onClick={() => handleDropdownOpen(index)}>
                            {menuMobileItem.mainLinkName}
                        </button>

                        <div className={`dropdown ${dropdownOpenIndex === index ? 'opened' : ''}`}>
                            {menuMobileItem.dropdownItems.map(renderDropdown)}
                        </div>
                    </>
                ) : (
                    <a href={menuMobileItem.mainLinkUrl || ''}>
                        {menuMobileItem.mainLinkName}
                    </a>
                )}
            </div>
        )

    }

    return (
        <div className={`menuMobile ${isMenuMobileOpened ? 'opened' : ''}`} onClick={handleMenuMobileClick}>
            <div className="menuMobileWrapper">
                <header>
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
                    <button className="closeMenuMobile" onClick={handleCloseMenuMobile}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="currentColor" />
                        </svg>
                    </button>
                </header>
                <div className="banner">
                    <img src="static/images/banners/banner-menu-mobile.png" alt="" />
                    <p>Celebration - 20 Anos</p>
                    <a href="">Conheça</a>
                </div>
                <nav>
                    {menuMobileLinks.map(renderMenuMobileItem)}
                </nav>
            </div>
        </div>
    )
}