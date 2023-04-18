import React from "react";
import styles from './Project.module.css'


export const Project = (props: any) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <a className={styles.linkToProject}>Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};

