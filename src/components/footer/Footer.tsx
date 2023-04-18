import React from "react";
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2>Andrey Prohorov</h2>
                <div className={styles.footerIcons}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <h3>2023 Все права защищены</h3>
            </div>
        </div>
    );
};

