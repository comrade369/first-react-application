import { useState } from "react";

export const UseStatePractice = () => {
    const program1 = {
        name: "Javascript",
        extension: ".js",
        created: 1995
    };

    const program2 = {
        name: "Python",
        extension: ".py",
        created: 1991
    };

    const objArray = [program1, program2];
    const [ObjArray, setObjArray] = useState(objArray);

    const deleteFunc = (givenIndex) => {
        const filterArray = ObjArray.filter((eachObj, index) => {
            return index != givenIndex;
        })
        console.log(filterArray);
        setObjArray(filterArray);
    }
    return <ol>
        {
            ObjArray.map((eachObj, index) => {
                const {name, extension, created} = eachObj;
                return <li key={index}>
                    <h1>{name}</h1>
                    <h2>{extension}</h2>
                    <h3>{created}</h3>
                    <button onClick={() => deleteFunc(index)}>Delete</button>
                </li>;
            })
        }
    </ol>;
}