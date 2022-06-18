import { useState, useEffect } from 'react';
import Hello from '../Routes/Hello/hello';

function Clock(props){

    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        let timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return ()=>{ // clean up step (runs before the component is "unmounted")
            clearInterval(timerID); 
        };
       
    }, []); // having an empty array ensures that this effect only runs after the component is first rendered

    return (
        <div>
            <Hello />
            <h2  style={{fontWeight:"bolder"}}>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;