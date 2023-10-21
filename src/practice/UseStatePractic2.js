import {useState} from "react";
import { photosData } from "../data/photosData";

export const UseStatePractic2 = () => {
    const [PhotosData, setPhotosData] = useState(photosData);

    const deleteDataFunc = (givenId) => {
        const filterData = PhotosData.filter((eachData) => {
            return eachData.id !== givenId;
        })

        window.alert(`ID: ${givenId} data deleted!!!`);
        console.log(givenId);
        setPhotosData(filterData);
    }

    return <ol>
        {
            PhotosData.map((eachData) => {
                const {id, title, url, thumbnailUrl} = eachData;
                return <li key={id}>
                    <h1>{title}</h1>
                    <img src={thumbnailUrl} alt={title} />
                    <p>Full Image: <a href={url}>click here</a></p>
                    <button onClick={() => {deleteDataFunc(id)}}>Delete Data</button>
                </li>;
            })
        }
    </ol>;
}