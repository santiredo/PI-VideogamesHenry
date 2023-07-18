import { useEffect } from "react";
import { useParams } from "react-router-dom";
import background from '../../videos/background.mp4';
import loadingGif from '../../images/loading.gif'
import style from './detail.module.css'
import { useDispatch, useSelector } from "react-redux";
import { showDetails } from "../../redux/action";


export default function Detail() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videogameDetails);
    const loading = useSelector(state => state.loadingDetails)

    useEffect(() => {
        const displayDetails = () => {
            dispatch(showDetails(id))
            
        };
        displayDetails();

        let video = document.getElementById('backgroundVideo')
        video.playbackRate = 0.5;

    }, [dispatch, id])


    return (
        <div className={style.detailPage}>
            <video id="backgroundVideo" autoPlay loop className={style.background} src={background}></video>

                {loading
                ? (
                    <>
                        <img className={style.loadingGif} src={loadingGif} alt="" />
                    </>

                ) : (
                    <div className={style.videogameDiv}>
                        <h1>{videogame.name}</h1>
                        <div className={style.detailsContainer}>
                            <div className={style.detailImage}>
                                <img src={videogame.image} alt="" />
                            </div>
                            <div className={style.detailsDiv}>
                                <div className={style.detailsInfo}>
                                    <div>
                                        <h5>Id: {videogame.id}</h5>
                                        <h5>Released: {videogame.released}</h5>
                                        <h5>Rating: {videogame.rating}</h5>
                                        <h4>Genres: </h4>
                                        <div className={style.platforms} dangerouslySetInnerHTML={{ __html: videogame.Genres}}></div>
                                    </div>
                                    <div>
                                        <h4>Platforms: </h4>
                                        <div className={style.platforms} dangerouslySetInnerHTML={{ __html: videogame.platforms}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={style.containerDescription}
                            dangerouslySetInnerHTML={{ __html: videogame.description }}
                        ></div>
                    </div>
                )
                }


        </div>
    )
}