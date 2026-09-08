import styles from './UserMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserMenu = () => {

    return (
        <a href="#" className={styles.navIconUser}>
            <FontAwesomeIcon icon={faUser} />
        </a>
    )

}

export default UserMenu;


