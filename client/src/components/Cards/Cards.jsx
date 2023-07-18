import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import loadingGif from '../../images/loading.gif';
import style from './cards.module.css';
import { setPage, showVideogames } from '../../redux/action';


export default function Cards() {

    const videogames = useSelector(state => state.renderedVideogames);
    const loading = useSelector(state => state.loadingHome);

    const dispatch = useDispatch();

    const videogamesPerPage = 15;
    const currentPage = useSelector(state => state.currentPage);
    const firstIndexVideogame = (currentPage - 1) * videogamesPerPage;
    const lastIndexVideogame = firstIndexVideogame + videogamesPerPage;
    const displayedVideogames = videogames.slice(firstIndexVideogame, lastIndexVideogame);

    const pagesHandler = (direction) => {
        dispatch(setPage(direction, currentPage, videogamesPerPage, videogames));
    }

    useEffect(() => {
        const displayVideogames = () => {
            dispatch(showVideogames());
        };
        displayVideogames();
    
    }, [dispatch]);

    return (
        <>
        
        <div className={style.cardsSection}>
            {loading ? (
                <img className={style.loadingGif} src={loadingGif} alt="" />
            ) : (
                <>
                    <div className={style.cardsDisplay}>
                        {displayedVideogames.map(game => (
                            <Card
                                id={game.id}
                                key={game.id}
                                name={game.name}
                                image={game.image}
                                Genres={game.Genres}
                            />
                        ))}
                    </div>
                    <div className={style.pagesHandler}>
                        <button onClick={() => pagesHandler(-1)} className={style.previousButton}>⇜</button>
                        <h4>Page: {currentPage}</h4>
                        <button onClick={() => pagesHandler(1)} className={style.nextButton}>⇝</button>
                    </div>
                </>
            )}
        </div>
        </>
    )
}
