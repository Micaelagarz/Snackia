import styles from './Home.module.css';
import ProductCard from '../ProductCard/ProductCard';
import Hero from '../Hero/Hero';
const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <Hero/>
            <section className={styles.offersSection}>
                <div className={styles.offersGrid}>
                    <ProductCard
                        img='../public/productos/almendras.jpg'
                        name="Almendras 100g"
                        price="$13.50" />
                    <ProductCard
                        img='../public/productos/galletitas.jpg'
                        name="Galletitas"
                        price="$13.50" />
                    <ProductCard
                        img='../public/productos/pasta_mani.jpg'
                        name="Pasta de maní"
                        price="$13.50" />
                </div>
            </section>
        </div>
    );
}

export default Home;