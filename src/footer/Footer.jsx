import {Card} from 'react-bootstrap'
import './footer.css'
function Footer(){
    return (
        <>
        <div className="footer-ul">
                <Card body className='footer-li-1'>Click <a href="/" id="footer-link-1">here</a> to go to top of the home page</Card>
        </div>
        </>
    )
}
export default Footer;