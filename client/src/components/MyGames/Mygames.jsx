import bin from '../../images/delete.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVideogame, showAll } from '../../redux/action';
import style from './mygames.module.css'


export default function Mygames() {

    const [gamesHandler, setGameHandler] = useState(false)
    const dbVideogames = useSelector(state => state.dbVideogames)
    const dispatch = useDispatch()


    const showMyGamesHandler = () => {
        gamesHandler ? setGameHandler(false) : setGameHandler(true)
        console.log(dbVideogames)
    }

    const deleteVideogameHandler = (id) => {
        dispatch(deleteVideogame(id))
        
        setTimeout(() => {
            dispatch(showAll())
        }, 100);

        console.log(dbVideogames)
    }

    return (
        <>
        <div onClick={showMyGamesHandler} className={style.myCreationsButton}>
                <p>MY GAMES</p>
            </div>
            {gamesHandler && (
                <>
                    <div className={style.gamesHandler}>
                            {dbVideogames?.map(videogame => {
                                return (
                                    <div key={videogame.id} className={style.eachGame}>
                                        <div><img className={style.image} src={videogame.image} alt="" /></div>
                                        <p className={style.myGameName}>{videogame.name}</p>
                                        <img onClick={() => deleteVideogameHandler(videogame.id)} className={style.bin} src={bin} alt="" />
                                    </div>
                                )
                                
                            })}
                    </div>
                    <button onClick={showMyGamesHandler} className={style.quitDbGamesHandler}></button>
                </>
            )}
        </>
    )
}