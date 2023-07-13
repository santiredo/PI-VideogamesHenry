

import style from './card.module.css'


export default function Card({id, name, image, genres}){

    return(
        <div className={style.cardDiv}>
            <div className={style.imageDiv}>
                <img src={image} alt="" />
            </div>
            <div className={style.data}>
                <h2>{name}</h2>
                {genres?.map((genre) => {
                    return <h4 key={`${id}-${genre}`}>{genre}</h4>;
                })}
                <span>More details</span>
            </div>
        </div>
    )
}