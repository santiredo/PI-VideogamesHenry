

import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters';
import Cards from '../../components/Cards/Cards';
import background from '../../images/homeBackground.jpg';

import style from './home.module.css';


export default function Home () {

    return (
        <div className={style.homePage}>
            <img className={style.background} src={background} alt="" />
            <div className={style.filterAndSearchbar}>
                <Filters/>
                <SearchBar/>
            </div>
            <Cards/>
        </div>
    )
}