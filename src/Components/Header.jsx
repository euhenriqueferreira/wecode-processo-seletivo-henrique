import './Header.scss'

export function Header(){
    return (
        <header className='header'>
            <div className="headerWrapper">
                <div className="logo">
                    <img src="static/images/logo.png" alt="" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Produtos</a>
                        </li>
                        <li>
                            <a href="#">Lançamentos</a>
                        </li>
                        <li>
                            <a href="#">Outlet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}