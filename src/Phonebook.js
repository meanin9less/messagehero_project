
import { Outlet } from "react-router-dom";
import PhonebookList from "./PhonebookList";

export default function Phonebook() {

    return (
        <>
                <div>
                    <h3>연락처</h3>
                </div>
                <PhonebookList></PhonebookList>
                <Outlet></Outlet>
        </>
    )
}