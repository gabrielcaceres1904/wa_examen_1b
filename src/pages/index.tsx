import * as React from 'react';
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import {createContext} from "react";

export const AppContext = createContext(null);


function Index() {

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer/>
        </div>
    );
}

export default Index