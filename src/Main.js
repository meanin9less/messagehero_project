import "./assets/css/wrap.css"
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Main(){
    return(
        <>
            
            <Header></Header>
            <div className="wrap">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </>
    )
}