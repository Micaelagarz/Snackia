import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './CartBox.module.css'

const CartBox = () => {
     //defino el estado del carrito (false=cerrado/Oculto, true = abierto/visible)
    const [isCartOpen, setIsCartOpen] = useState(false);

     // 3. Función para alternar el estado al hacer clic en el carrito
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    
    return (
        <>
            <a href="#" className={styles.navIconBasket} onClick={toggleCart}>
                <FontAwesomeIcon icon={faBasketShopping} />
            </a>

            {/* <div id={styles.cartCounter}>0</div>*/}
         

            <div className={`${styles.cartBox} ${!isCartOpen ? styles.hidden : ''}`}>
                {/*<h3>My cart</h3>*/}
                <ul id="cart-items"></ul>

                <div className={styles.cartTotal}>
                    {/*<p>Total: $<span id="cart-total">0</span></p>*/}
                </div>

                <div className={styles.cartButtons}>
                    {/*<button id="vaciar-carrito" className={styles.clearCartBtn}>Clear cart</button>
                            <button className={styles.continueCartBtn} onClick={toggleCart}>Continue shopping</button>*/}
                </div>
            </div>
        </>
    );
}

export default CartBox;