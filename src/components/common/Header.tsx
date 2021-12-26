
// Importing libraries
import {FC} from 'react'
import {Link} from 'react-router-dom'

// Importing components
import Logo from '../../images/logo.svg'

// Importing css
import '../../css/common/header.css'

interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {

    const navItems = [
        {label: 'Home', path: '/'},
        {label: 'Privacy policy', path: '/privacy-policy'}
    ];

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="logo">
                    <img width={40} height={50} src={Logo} alt="logo" />
                </Link>
                <ul className="nav__menu">
                    {navItems.map(({label, path}) => (
                        <li className="menu__item">
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;