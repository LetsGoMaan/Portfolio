import React from "react";
import "./App.module.css";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
