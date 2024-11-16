import FBimage from "../../../assets/fb.png"
import TWimage from "../../../assets/tw.png"
import GITimage from "../../../assets/gith.jpg"
import IGimage from "../../../assets/ig.jpg"
import Linkedimage from "../../../assets/linkedin.jpg"
import '../about.style.css'


const SocialLinks = () => {
    
    return (
        <div className="social_network_links">
            <a href="https://www.facebook.com/" target="blank"><img src={FBimage}/></a>
            <a href="https://x.com/" target="blank"><img src={TWimage}/></a>
            <a href="https://www.instagram.com/" target="blank"><img src={IGimage}/></a>
            <a href="https://ba.linkedin.com/" target="blank"><img src={Linkedimage}/></a>
            <a href="https://github.com/" target="blank"><img src={GITimage}/></a>
        </div>
    )
}

export default SocialLinks;