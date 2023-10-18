import {useState} from "react";


export const SetCountExample = () => {
    // useState Hook | Function is used to store values and modity using function.
    
    const [count, setCount] = useState(0); // destructure items in useState function array
    // Use any name we want.


    const incrementFunction = () => {
        setCount(count + 1);
        setCount(count + 1); // Does not increase 2 because of count value.
    }

    const decrementFunction = () => {
        setCount((count) => {
            return count - 1;
        })
        setCount((count) => { // This Does decrease 2 because of anynomous function.
            return count - 1;
        })
    }

    const messageFunction = () => {
        setCount((name) => {
            name = window.prompt("Enter your name:");
            return window.alert("Hello, " + name + " This is message!");
        })
    }

    return <div>
        <button onClick={decrementFunction}>Decrement</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>Increment</button>
        <div>
            <button onClick={messageFunction}>pop up!</button>
        </div>
    </div>;
}