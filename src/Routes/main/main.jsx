import Button  from '../../Button/Button';
import './main.css'
function Main(){
    return (
        <>
        <ul id="ul-sources-id1"> <h3 className='head-sources'>Sources:</h3>
            <li><a href="https://reactjs.org">React</a></li>
            <li><a href="https://react-bootstrap.github.io/">React Bootstrap</a></li>
        </ul>
        <Button />
        </>
    )
}
export default Main;