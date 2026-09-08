import styles from './CategoriesMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CategoriesMenu = () => {

    return (
        <div className={styles.CategoriesMenu}>
        <span>Categories</span>
        <FontAwesomeIcon icon={faAngleDown} className="iconAngle"/>
        </div>
    )
}

export default CategoriesMenu;