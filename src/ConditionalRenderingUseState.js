import { useState } from "react";
import {photosData} from "./data/photosData";
import {UseStatePractice2} from "./practice/UseStatePractice2";

export const ConditionalRenderingUseState = () => {
    const [ShowData, setShowData] = useState(true);

    const visibleChange = () => {
        setShowData(!ShowData);
    }
    return <div>
        <button onClick={visibleChange}>{ShowData ? "Hide" : "Show"}</button>
        {/*
            // one Way jsx
            ShowData && (
                <div>Data showing</div>
            )*/
        }

        {
            // second way jsx
            ShowData ? <div><UseStatePractice2 /></div> : <div>Data is Hiding</div>
        }


    </div>;
}