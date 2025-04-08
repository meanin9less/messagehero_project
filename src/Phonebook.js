import { Outlet } from "react-router-dom";
import PhonebookList from "./PhonebookList";
import './assets/css/phonebook.css';

export default function Phonebook() {
    return (
        <>
            <div className="page-title-wrapper">
                <h3 className="page-title">연락처</h3>
            </div>

            <div className="phonebook-container">
                <PhonebookList></PhonebookList>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

