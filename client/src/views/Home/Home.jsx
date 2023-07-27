

import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters';
import Cards from '../../components/Cards/Cards';
import background from '../../images/homeBackground.jpg';
import bin from '../../images/delete.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataBase } from '../../redux/action';
import style from './home.module.css';


export default function Home () {

    const [gamesHandler, setGameHandler] = useState(false)
    const dbVideogames = useSelector(state => state.dbVideogames)
    const dispatch = useDispatch()

    const showMyGamesHandler = () => {
        dispatch(loadDataBase())
        gamesHandler ? setGameHandler(false) : setGameHandler(true)
    }

    return (
        <div className={style.homePage}>
            <img className={style.background} src={background} alt="" />
            <div className={style.filterAndSearchbar}>
                <Filters/>
                <SearchBar/>
            </div>
            <Cards/>
            <div onClick={showMyGamesHandler} className={style.myCreationsButton}>
                <p>MY GAMES</p>
            </div>
            {gamesHandler && 
            <>
                <div className={style.gamesHandler}>
                        {dbVideogames?.map(videogame => {
                            return (
                                <div key={videogame.id} className={style.eachGame}>
                                    <p>{videogame.name}</p>
                                    <img src={bin} alt="" />
                                </div>
                            )
                            
                        })}
                </div>
                <button onClick={showMyGamesHandler} className={style.quitDbGamesHandler}></button>
            </>
            }
        </div>
    )
}