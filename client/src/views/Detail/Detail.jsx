import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import background from '../../videos/background.mp4';
import loadingGif from '../../images/loading.gif'
import style from './detail.module.css'


export default function Detail() {

    const {id} = useParams();
    const [videogame, setVideogame] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`http://localhost:3001/videogames/${id}`)
        .then(({data}) => {
            if(data.name){
                console.log(data);
                data.platforms = data.platforms.map(platform => {
                    return `<p>${platform}</p>`
                }).join('\n')
                data.genres = data.genres.map(genre => {
                    return `<p>${genre}</p>`
                }).join('\n')
                setVideogame(data);
                setLoading(false)
            } else{
                window.alert('No hay personajes con ese ID')
            }
        });

        let video = document.getElementById('backgroundVideo')
        video.playbackRate = 0.5
        console.log(video)

        return () =>{
            setVideogame({});
        };
    },[id])


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
                                        <div className={style.platforms} dangerouslySetInnerHTML={{ __html: videogame.genres}}></div>
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