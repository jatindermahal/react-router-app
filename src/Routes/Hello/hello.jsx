
const myName = name => name.fName+" "+name.lName;

function Hello(){
    const name = {
        fName:"React",
        lName: "User"
    };
    return(<h1 style={{fontWeight:"bolder",fontSize:"40px"}}>Hello {myName(name)}</h1>)
}

export default Hello;