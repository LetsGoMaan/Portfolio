import React from "react";
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greetings}>
                    <span>Hi There</span>
                    <h1>I am Andrey Prohorov</h1>
                    <p>Frontend-Developer.</p>
                </div>

                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

