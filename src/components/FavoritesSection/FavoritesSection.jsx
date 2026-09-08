import styles from './FavoritesSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FavoritesSection = () => {

    return (
        <div className={styles.favMenu}>
            <span>Favorites</span>
            <FontAwesomeIcon icon={faAngleDown} className="iconAngle"/>
        </div>

    );
}

export default FavoritesSection;