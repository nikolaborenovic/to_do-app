import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './home.style.css'

const Home = () => {
    const router = useNavigate()
    const handleRedirect = () => {
        router('/task')
    }

    return(
        <div className='home_main'>
            <h1>Sta planiras danas?</h1>
            <h2>Kreiraj svoj novi task!</h2>
            <Button label='Kreiraj' clickHandler={handleRedirect}/>
            
        </div>
    )
}

export default Home;