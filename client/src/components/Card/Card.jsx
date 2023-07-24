
import {NavLink} from 'react-router-dom';
import style from './card.module.css'


export default function Card({id, name, image, Genres}){

    const click = () => {
        console.log(Genres)
    }

    return(
        <div onClick={click} className={style.cardDiv}>
            <div className={style.imageDiv}>
                <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            <div className={style.data}>
                
                {Genres?.map((genre) => {
                    return <h4 key={`${id}-${genre}`}>{genre}</h4>;
                })}
                <NavLink className={style.moreDetails} to={`/detail/${id}`}>More details</NavLink>
            </div>
        </div>
    )
}