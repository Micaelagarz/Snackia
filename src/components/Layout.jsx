import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

export function Layout({children}){
    return (
        <div>
            <Header />
            <main className={styles.mainContent}>
                {children} {/* Aquí es donde aparecerán tus páginas o secciones */}
            </main>
            <Footer />
        </div>
    );
}