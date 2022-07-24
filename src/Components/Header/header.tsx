import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.margin}>
                <img 
                    src="src/imgs/logo.png" 
                    alt="Logo escrito sorteador de amigo secreto" 
                    className={styles.img}
                />
            </div>
            <div className={styles.participante}>
                <img 
                    src="src/imgs/participante.png" 
                    alt="Person playing shits"
                    className={styles.img}
                />
            </div>
        </header>
    )
}

export default Header