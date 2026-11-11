import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { ThemeContext } from '../context/ThemeContext.jsx'

function Header() {
    const { itemCount } = useContext(CartContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <  header className={`header ${theme}`}>
            <h1>Monon Grind</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
            <div className="cart-info">
                <span>Cart Items: {itemCount}</span>
            </div>
        </header>
    );
}

export default Header;