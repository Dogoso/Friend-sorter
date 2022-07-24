import styles from "./main.module.css"

type Props = {
    children: JSX.Element,
};

const Main =  ({ children }: Props) => {
    return (
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default Main