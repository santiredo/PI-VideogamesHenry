import { NavLink } from 'react-router-dom'
import style from './nav.module.css'


export default function Nav () {

    return (

        <nav className={style.navBar}>
            <div className={style.navItems}>
                <h1 className={style.title}>Videogames</h1>
                <div className={style.viewsContainer}>
                    <div className={style.linksDiv}>
                        <NavLink to='/home' className={style.navLink}>
                            HOME
                        </NavLink>
                        <NavLink to='/form' className={style.navLink}>
                            CREATE
                        </NavLink>
                    </div>

                </div>

            </div>
        </nav>

    )
}