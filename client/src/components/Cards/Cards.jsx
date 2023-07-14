
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import loadingGif from '../../images/loading.gif'
import style from './cards.module.css'


export default function Cards() {

    const [videogames, setVideogames] = useState([]);
    const [loading, setLoading] = useState(true)

    const displayVideogames = async () => {

        try {
            const response = await axios('http://localhost:3001/videogames')
            setVideogames(response.data)
            setLoading(false)
            
        } catch (error) {
            alert(error.message)            
        }
    }

    const videogamesPerPage = 15
    const [currentPage, setCurrentPage] = useState(1)

    const pagesHandler = (direction) => {

        console.log(currentPage)

        try {

            if((currentPage > 1 && direction === -1) || (videogamesPerPage * currentPage) < videogames.length){
                
                if(currentPage + direction > 0){
                    const newPage = currentPage + direction;
                    setCurrentPage(newPage)
                    return;
                }
            }
            throw new Error(`Page ${currentPage + direction} have no videogames`)
            
        } catch (error) {
            alert(error.message)
        }


    }

    const firstIndexVideogame = (currentPage - 1) * videogamesPerPage;
    const lastIndexVideogame = firstIndexVideogame + videogamesPerPage;
    const displayedVideogames = videogames.slice(firstIndexVideogame, lastIndexVideogame)

    useEffect(() => {
        displayVideogames()
        // eslint-disable-next-line
    }, [])

    return (
        <div className={style.cardsSection}>
            {loading
            ? (
                <img className={style.loadingGif} src={loadingGif} alt="" />

            ) : (
                <>
                    {displayedVideogames.map(game => {
                        return(
                            <Card
                                id={game.id}
                                key={game.id}
                                name={game.name}
                                image={game.image}
                                genres={game.genres}
                            />                        
                        )
                    })}
                <div className={style.pagesHandler}>
                    <button onClick={() => pagesHandler(-1)} className={style.previousButton}>⇜</button>
                    <h4>Page: {currentPage}</h4>
                    <button onClick={() => pagesHandler(1)} className={style.nextButton}>⇝</button>
                </div>
                </>

            )}
        </div>
    )
}