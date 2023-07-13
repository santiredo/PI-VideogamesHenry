
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import style from './cards.module.css'


export default function Cards() {

    const [videogames, setVideogames] = useState([])

    const displayVideogames = async () => {

        try {
            const response = await axios('http://localhost:3001/videogames')
            setVideogames(response.data)
            
        } catch (error) {
            alert(error.message)            
        }
    }

    useEffect(() => {
        displayVideogames()
        // eslint-disable-next-line
    }, [])

    return (
        <div className={style.cardsSection}>
            {
                videogames.map(game => {
                    return(
                        <Card
                            key={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres}
                        />                        
                    )
                })
            }
            
        </div>
    )
}