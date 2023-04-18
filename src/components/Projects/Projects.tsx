import React from "react";
import styles from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={"TODOLIST"} description={"some descr"}/>
                    <Project title={"Social network"} description={"some descr"}/>
                    <Project title={"Counter"} description={"some descr"}/>
                </div>
            </div>
        </div>
    );
};

