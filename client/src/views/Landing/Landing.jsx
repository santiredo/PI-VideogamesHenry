import { useNavigate } from 'react-router-dom'
import style from './landing.module.css'


export default function Landing () {

    const navigate = useNavigate()

    const handleHome = (event) => {
        event.preventDefault()

        navigate('/home')

    }

    return (
        <div className={style.landingPage}>
            <h1 className={style.welcome}>Videogames PI</h1>
            <p className={style.p}>By Santiago Redondo</p>
            <button onClick={handleHome} className={style.button}>Let's see the project</button>
        </div>
    )
}