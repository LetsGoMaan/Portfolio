import React from "react";
import styles from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"HTML"} description={"some text"}/>
                    <Skill title={"CSS"} description={"some text"}/>
                    <Skill title={"JS"} description={"some text"}/>
                </div>
            </div>
        </div>
    );
};

