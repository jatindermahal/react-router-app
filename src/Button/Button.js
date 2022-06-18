//week-4-1 content
import React,{useState} from "react";


function Button(){
    const [click, setClick] = useState(0);

    const handleClick = ()=>{setClick(click+1)};
    const handleResetClick = ()=>{setClick(0)};
    return(
        <div>
            <p>You clicked this button {click} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
            <button onClick={handleResetClick}>
                Reset
            </button>
        </div>
    );
}

export default Button;