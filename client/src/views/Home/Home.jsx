

import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters';
import Cards from '../../components/Cards/Cards'

import style from './home.module.css';


export default function Home () {

    return (
        <div className={style.homePage}>
            <div className={style.filterAndSearchbar}>
                <SearchBar/>
                <Filters/>
            </div>
            
            <Cards/>
        </div>
    )
}