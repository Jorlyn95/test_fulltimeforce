import { useState } from "react";
import { ContextApp } from "../contexts/app";
import App from "../view/App";

export default function ControllerApp(){

    const [showOptionsFilter, set_showOptionsFilter]=useState<boolean>(false)

    let provider={
        showOptionsFilter,
        set_showOptionsFilter
    }

    return(
        <ContextApp.Provider value={provider}>
            <App />
        </ContextApp.Provider>
    )

}