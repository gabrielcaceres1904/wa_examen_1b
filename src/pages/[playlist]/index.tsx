import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import * as React from "react";
import {useRouter} from "next/router";



function Index() {

    const router = useRouter()

    const indice = parseInt(router.query.playlist as string)

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