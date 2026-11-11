import menuItems from '../data/menu.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { ThemeContext } from '../context/ThemeContext.jsx'

function Menu(){
    const { addToCart } = useContext(CartContext);
    const categories = [...new Set(menuItems.map(item => item.category))];

    return (
        <section>
            <h2> Menu</h2>
                {categories.map(category => (
                    <div className="menu-category" key={category}>
                        <h3>{category}</h3>
                        {menuItems
                            .filter(item => item.category === category)
                            .map(item => (
                                <div className="menu-item" key={item.id}>
                                    <h4>{item.name}</h4>
                                    <p className="description">{item.description}</p>
                                    <p className="price">${item.price.toFixed(2)}</p>
                                    <button onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                    </div>
                ))}
        </section>
    )

}

export default Menu;
