import { useState } from "react";

export const UseStateExampleAdvanced = () => {
    /*
    // Different Types of Data Passing in useState() HOOk.
    // First Type 
    const [firstName, setFirstName] = useState("C");
    const [lastName, setLastName] = useState("++");
    const[age, setAge] = useState(38);

    const dataObj = {
        firstName: "java",
        lastName: "script",
        age: 28,
    };

    // Second Type
    const [DataObj, setDataObj] = useState(dataObj);

    const dataFunc = () => {
        return {
            firstName: "C",
            lastName: "python",
            age: 32,
        };
    }

    // Third  Type
    const [DataFunc, setDataFunc] = useState(dataFunc);

    // Fouth Type
    const [Data, setData] = useState({
        firstName: "Type",
        lastName: "script",
        age: 12
    });

    const changeFirstNameFunc = () => {
        setData({
            ...Data,
            firstName: "ecma",
        });
    }

    const changeLastNameFunc = () => {
        setData({
            ...Data,
            lastName: "6",
        });
    }

    const changeAgeFunc = () => {
        setData({
            ...Data,
            age: 9,
        });
    }

    return <div>
        <h1>My FirstName is: {Data.firstName}</h1>
        <button onClick={changeFirstNameFunc}>Change FirstName</button>
        <h1>My LastName is: {Data.lastName}</h1>
        <button onClick={changeLastNameFunc}>Change LastName</button>
        <h1>My Age is: {Data.age}</h1>
        <button onClick={changeAgeFunc}>Change Age</button>
    </div>; */

    // Fifth Type
    const objArray = [
        {
            id: 1,
            firstName: "Java",
            lastName: "None",
            age: 28
        },
        {
            id: 2,
            firstName: "C",
            lastName: "Program",
            age: 52
        },
        {
            id: 3,
            firstName: "C",
            lastName: "#",
            age: 20
        },
    ];

    const [ObjArray, setObjArray] = useState(objArray);

    const deleteItemFunc = (id) => {
        console.log(id);
        const filterData = ObjArray.filter((eachObj) => {
            return id !== eachObj.id;
        });
        setObjArray(filterData);
    }

    return <ul>
        {
            ObjArray.map((eachObj) => {
                const {id, firstName, lastName, age} = eachObj;
                return <li key={id}>
                    <h1>My FirstName is: {firstName}</h1>
                    <h1>My LastName is: {lastName}</h1>
                    <h1>My Age is: {age}</h1>
                    <button onClick={() => {
                        return deleteItemFunc(id);
                    }}>Delete Item</button>
                </li>;
            })
        }
    </ul>;
}