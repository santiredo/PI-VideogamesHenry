
import {useDispatch, /* useSelector */} from 'react-redux'
import style from './searchBar.module.css'
import { searchByName } from '../../redux/action';
import { useState } from 'react';


export default function SearchBar (){

    /* const videogames = useSelector(state => state.listedByName) */
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSearchByName = (event) => {
        setName(event.target.value.toLowerCase())
    }

    const handleDisplayByName = (event) => {
        event.preventDefault()

        console.log(name)
        dispatch(searchByName(name))
    }


    return (
        <form onSubmit={handleDisplayByName} className={style.searchBar}>
            <input id='gameName' type="text" name='gameName' value={name} onChange={handleSearchByName} className={style.input} />
            <button type='submit' className={style.button}>Search</button>
        </form>
    )
}