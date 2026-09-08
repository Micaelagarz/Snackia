import styles from './Nav.module.css';
import FavoritesSection from '../FavoritesSection/FavoritesSection';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';


const Nav = () => {
    return (
        <nav className={`container ${styles.headerBottom}`}>
        <FavoritesSection />
            {/*central navigation menu*/}
            {/*<button className={styles.menuOpenButton}>
                <FontAwesomeIcon icon={faBars} />
            </button>*/}
            <ul className={styles.navHeader}>
                <CategoriesMenu />
                <li>
                    <a href="#home" >Home</a>
                </li>
                <li>
                    <a href="#products" >Offers</a>
                </li>
                <li>
                    <a href="#reviews" >Reviews</a>
                </li>
                <li>
                    <a href="#contact" >Contact us</a>
                </li>
                <li>
                    <a href="#about" >About us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;