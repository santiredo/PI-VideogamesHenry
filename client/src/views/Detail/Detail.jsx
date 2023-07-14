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
                console.log(data)
                setVideogame(data);
                setLoading(false)
            } else{
                window.alert('No hay personajes con ese ID')
            }
        });

        return () =>{
            setVideogame({});
        };
    },[id])

    return (
        <div className={style.detailPage}>
            <video autoPlay loop className={style.background} src={background}></video>

                {loading
                ? (
                    <>
                        <img className={style.loadingGif} src={loadingGif} alt="" />
                    </>

                ) : (
                    <div className={style.videogameDiv}>
                        <h1>{videogame.name}</h1>
                        <div className={style.detailsDiv}>
                            <img src={videogame.image} alt="" />

                        </div>
                    </div>
                )
                }


        </div>
    )
}