// import { Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Error(){

    const nav = useNavigate();

    return (
        // <Navigate to="/" />
        <>
            <h1>This route is incorrect</h1>
            
            <br />
            <h3>Use <button type="button" onClick={()=>nav("/")}>
                this
            </button> 
            button to Navigate back to our home page</h3>
        </>

    )
}

export default Error;