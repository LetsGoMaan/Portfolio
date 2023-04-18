import React from "react";
import styles from './Contatcs.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button className={styles.contactsSendBtn}>Send</button>
            </div>
        </div>
    );
};

