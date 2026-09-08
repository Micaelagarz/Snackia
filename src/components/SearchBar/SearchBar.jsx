import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    return (
        <div className={styles.searchSection}>
            <input type="text"
                placeholder="Search for products..." />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magnifyingGlass} />
            </button>

        </div>
    );
}

export default SearchBar; 