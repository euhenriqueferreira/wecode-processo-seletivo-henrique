// Styles
import './Footer.scss';

export function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerWrapper">
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
                    <div className="footerNavigation">
                        <ul className="socialIcons">
                            <li>
                                <a href="" aria-label='Visitar Instagram Bebecê'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3009_2429)">
                                            <path d="M12 2.49794C15.204 2.49794 15.584 2.50994 16.849 2.56794C18.157 2.62794 19.504 2.92594 20.457 3.87894C21.419 4.84094 21.708 6.17494 21.768 7.48694C21.826 8.75194 21.838 9.13194 21.838 12.3359C21.838 15.5399 21.826 15.9199 21.768 17.1849C21.709 18.4859 21.404 19.8459 20.457 20.7929C19.495 21.7549 18.162 22.0439 16.849 22.1039C15.584 22.1619 15.204 22.1739 12 22.1739C8.796 22.1739 8.416 22.1619 7.151 22.1039C5.86 22.0449 4.482 21.7329 3.543 20.7929C2.586 19.8359 2.292 18.4889 2.232 17.1849C2.174 15.9199 2.162 15.5399 2.162 12.3359C2.162 9.13194 2.174 8.75194 2.232 7.48694C2.291 6.19094 2.599 4.82294 3.543 3.87894C4.503 2.91894 5.842 2.62794 7.151 2.56794C8.416 2.50994 8.796 2.49794 12 2.49794ZM12 0.335938C8.741 0.335938 8.332 0.349937 7.052 0.407937C5.197 0.492938 3.355 1.00894 2.014 2.34994C0.668 3.69594 0.157 5.53394 0.072 7.38794C0.014 8.66794 0 9.07694 0 12.3359C0 15.5949 0.014 16.0039 0.072 17.2839C0.157 19.1369 0.675 20.9839 2.014 22.3219C3.359 23.6669 5.2 24.1789 7.052 24.2639C8.332 24.3219 8.741 24.3359 12 24.3359C15.259 24.3359 15.668 24.3219 16.948 24.2639C18.802 24.1789 20.646 23.6619 21.986 22.3219C23.333 20.9749 23.843 19.1379 23.928 17.2839C23.986 16.0039 24 15.5949 24 12.3359C24 9.07694 23.986 8.66794 23.928 7.38794C23.843 5.53294 23.326 3.68994 21.986 2.34994C20.643 1.00694 18.797 0.491937 16.948 0.407937C15.668 0.349937 15.259 0.335938 12 0.335938Z" fill="currentColor" />
                                            <path d="M12 6.17383C8.597 6.17383 5.838 8.93283 5.838 12.3358C5.838 15.7388 8.597 18.4978 12 18.4978C15.403 18.4978 18.162 15.7388 18.162 12.3358C18.162 8.93283 15.403 6.17383 12 6.17383ZM12 16.3358C9.791 16.3358 8 14.5448 8 12.3358C8 10.1268 9.791 8.33583 12 8.33583C14.209 8.33583 16 10.1268 16 12.3358C16 14.5448 14.209 16.3358 12 16.3358Z" fill="currentColor" />
                                            <path d="M18.406 7.36999C19.2013 7.36999 19.846 6.72528 19.846 5.92999C19.846 5.1347 19.2013 4.48999 18.406 4.48999C17.6107 4.48999 16.966 5.1347 16.966 5.92999C16.966 6.72528 17.6107 7.36999 18.406 7.36999Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3009_2429">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.335938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Visitar Facebook Bebecê'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3009_2434)">
                                            <path d="M24 12.4089C24 18.3979 19.606 23.3629 13.87 24.2639V15.9009H16.659L17.19 12.4409H13.87V10.1959C13.87 9.24894 14.334 8.32694 15.82 8.32694H17.329V5.38094C17.329 5.38094 15.959 5.14694 14.65 5.14694C11.916 5.14694 10.13 6.80394 10.13 9.80294V12.4399H7.091V15.8999H10.13V24.2629C4.395 23.3609 0 18.3969 0 12.4089C0 5.78194 5.373 0.408936 12 0.408936C18.627 0.408936 24 5.78094 24 12.4089Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3009_2434">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.335938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Visitar Pinterest Bebecê'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3009_2437)">
                                            <path d="M12.01 0.335938C5.388 0.335938 0.0200005 5.70394 0.0200005 12.3259C0.0200005 17.4079 3.178 21.7499 7.638 23.4969C7.529 22.5499 7.441 21.0889 7.677 20.0529C7.894 19.1149 9.078 14.0919 9.078 14.0919C9.078 14.0919 8.723 13.3719 8.723 12.3159C8.723 10.6479 9.69 9.40494 10.894 9.40494C11.92 9.40494 12.414 10.1749 12.414 11.0929C12.414 12.1189 11.763 13.6589 11.417 15.0899C11.131 16.2839 12.019 17.2609 13.193 17.2609C15.325 17.2609 16.963 15.0109 16.963 11.7739C16.963 8.90194 14.901 6.89894 11.95 6.89894C8.536 6.89894 6.532 9.45494 6.532 12.0999C6.532 13.1259 6.927 14.2319 7.42 14.8339C7.52 14.9509 7.53 15.0599 7.5 15.1779C7.411 15.5529 7.204 16.3719 7.164 16.5399C7.115 16.7569 6.986 16.8059 6.759 16.6979C5.259 15.9969 4.321 13.8159 4.321 12.0499C4.321 8.26994 7.064 4.79694 12.245 4.79694C16.4 4.79694 19.636 7.75794 19.636 11.7249C19.636 15.8599 17.031 19.1859 13.419 19.1859C12.205 19.1859 11.06 18.5539 10.676 17.8039C10.676 17.8039 10.074 20.0929 9.926 20.6559C9.66 21.7019 8.929 23.0049 8.436 23.8039C9.562 24.1479 10.747 24.3359 11.99 24.3359C18.612 24.3359 23.98 18.9679 23.98 12.3459C24 5.70394 18.632 0.335938 12.01 0.335938Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3009_2437">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.335938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Visitar Twitter Bebecê'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3009_2440)">
                                            <path d="M21.543 7.44003C21.557 7.65103 21.557 7.86303 21.557 8.07603C21.557 14.583 16.603 22.086 7.547 22.086V22.082C4.872 22.086 2.252 21.32 -3.57628e-07 19.875C0.389 19.922 0.78 19.945 1.172 19.946C3.39 19.948 5.544 19.204 7.287 17.834C5.18 17.794 3.332 16.42 2.687 14.414C3.425 14.556 4.185 14.527 4.91 14.33C2.612 13.866 0.96 11.847 0.96 9.50303C0.96 9.48203 0.96 9.46103 0.96 9.44103C1.645 9.82303 2.411 10.034 3.195 10.057C1.031 8.61203 0.363 5.73403 1.67 3.48403C4.17 6.56003 7.859 8.43003 11.818 8.62903C11.421 6.91903 11.964 5.12703 13.242 3.92403C15.225 2.05903 18.344 2.15503 20.209 4.13803C21.312 3.92103 22.369 3.51603 23.336 2.94303C22.968 4.08303 22.199 5.05103 21.171 5.66703C22.148 5.55003 23.101 5.28903 24 4.89103C23.339 5.88003 22.507 6.74303 21.543 7.44003Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3009_2440">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.335938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" aria-label='Visitar TikTok Bebecê'>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3009_2442)">
                                            <path d="M22.465 10.2019C20.326 10.2019 18.343 9.51794 16.725 8.35594V16.7409C16.725 20.9289 13.318 24.3349 9.131 24.3349C7.513 24.3349 6.012 23.8249 4.779 22.9589C2.821 21.5839 1.537 19.3099 1.537 16.7409C1.537 12.5529 4.944 9.14594 9.132 9.14594C9.48 9.14594 9.82 9.17494 10.155 9.21994V10.1969V13.4319C9.831 13.3309 9.489 13.2719 9.132 13.2719C7.22 13.2719 5.664 14.8279 5.664 16.7409C5.664 18.0729 6.42 19.2299 7.524 19.8109C8.005 20.0639 8.552 20.2089 9.133 20.2089C11.001 20.2089 12.525 18.7229 12.595 16.8709L12.598 0.335938H16.724C16.724 0.693938 16.759 1.04294 16.821 1.38294C17.112 2.95494 18.045 4.30394 19.338 5.14694C20.238 5.73394 21.312 6.07694 22.464 6.07694L22.465 10.2019Z" fill="currentColor" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3009_2442">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.335938)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <h3>Sobre a empresa</h3>
                            <li>
                                <a href="">Quem somos</a>
                            </li>
                            <li>
                                <a href="">Fale conosco</a>
                            </li>
                        </ul>
                        <ul>
                            <h3>Políticas</h3>
                            <li>
                                <a href="">Política de Privacidade</a>
                            </li>
                            <li>
                                <a href="">Termos de Uso</a>
                            </li>
                            <li>
                                <a href="">Política de Entrega</a>
                            </li>
                            <li>
                                <a href="">Política de Cupom e Descontos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
