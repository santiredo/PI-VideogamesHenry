

import style from './searchBar.module.css'


export default function SearchBar (){

    return (
        <div className={style.searchBar}>
            <input type="text" className={style.input} />
            <button className={style.button}>Search</button>
        </div>
    )
}