import style from './landing.module.css'


export default function Landing () {

    return (
        <div className={style.landingPage}>
            <h1 className={style.welcome}>Videogames PI</h1>
            <p className={style.button}>Let's see the project</p>
        </div>
    )
}