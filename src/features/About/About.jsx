import './about.style.css'
import AboutImg from '../../assets/todoAbout.png'
import SocialLinks from './components/SocialLinks'

const About = () => {

    return(
        <div className='about_holder'>
            <img src={AboutImg}/>
            <div className='text_socials'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <SocialLinks/>
            </div>
        </div>
    )
}

export default About;