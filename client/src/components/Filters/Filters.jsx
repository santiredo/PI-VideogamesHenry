
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByGenre, orderPostFilter, orderVideogames, showAll, showDataBase } from '../../redux/action';
import './filters.css'


export default function Filters(){

    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)

    const handleOrder = (event) => {
        dispatch(orderVideogames(event.target.getAttribute('value')))
        console.log(videogames)
    }

    const handleGender = (event) => {
        dispatch(orderByGenre(event.target.getAttribute('value')))
        dispatch(orderPostFilter(1))
    }

    const handleOrigin = (event) => {
        dispatch(showDataBase(event.target.getAttribute('value')))
        dispatch(orderPostFilter(1))
    }

    const handleRefresh = () => {
        dispatch(showAll())
    }

    // CSS DE LOS SELECTS

    const [order, setOrder] = useState(false)
    const [genres, setGenres] = useState(false)
    const [origin, setOrigin] = useState(false)

    const handleSelectOrder = (event) => {
        const orderOptions = document.querySelector("#orderOptions")

        if(!order) {
            setOrder(true)
            orderOptions.classList.remove('hiddenOptions');            
            orderOptions.classList.add('orderActive');            
            
        } else{
            setOrder(false)

            setTimeout(() => {
                orderOptions.classList.remove('hideOrder');
                orderOptions.classList.add('hiddenOptions')
                
            }, 500);
            
            orderOptions.classList.remove('orderActive')
            orderOptions.classList.add('hideOrder')
        }
        event.currentTarget.classList.toggle('selectIdActive')
    }

    const handleSelectGender = (event) => {
        const genderOptions = document.querySelector('#genderOptions');

        if(!genres) {
            setGenres(true)
            genderOptions.classList.remove('hiddenOptions');            
            genderOptions.classList.add('genderActive');            
            
        } else{
            setGenres(false)

            setTimeout(() => {
                genderOptions.classList.remove('hideGender');
                genderOptions.classList.add('hiddenOptions')
                
            }, 500);
            
            genderOptions.classList.remove('genderActive')
            genderOptions.classList.add('hideGender')
        }
        event.currentTarget.classList.toggle('selectGenderActive');
    }

    const handleSelectOrigin = (event) => {
        const originOptions = document.querySelector('#originOptions')

        if(!origin){
            setOrigin(true)

            originOptions.classList.remove('hiddenOptions');
            originOptions.classList.add('originActive');
        } else {
            setOrigin(false)

            setTimeout(() => {
                originOptions.classList.remove('hideOrigin');
                originOptions.classList.add('hiddenOptions');

            }, 500);

            originOptions.classList.remove('originActive')
            originOptions.classList.add('hideOrigin');
        }
        event.currentTarget.classList.toggle('selectOriginActive')

    }

    return(
        <div className='favFilters'>
            <div className='selectBox'>
                <div onClick={handleSelectOrder} className='selectId'>
                    <div className='selectedContent'>
                        <p className='title'>Order</p>
                    </div>
                </div>
                <div className='hiddenOptions' id="orderOptions">
                    <div className="option">
                        <p onClick={handleOrder} value="AZ">A-Z</p>
                    </div>
                    <div className="option">
                        <p onClick={handleOrder} value="ZA">Z-A</p>
                    </div>
                    <div className="option">
                        <p onClick={handleOrder} value="+">+Rating</p>
                    </div>
                    <div className="option">
                        <p onClick={handleOrder} value="-">-Rating</p>
                    </div>
                </div>
            </div>

            <div className='selectBox'>
                <div onClick={handleSelectGender} className='selectGender'>
                    <div>
                        <p className='title'>Genres</p>
                    </div>
                </div>
                <div className='hiddenOptions' id="genderOptions">
                    <div className="option">
                        <p onClick={handleGender} value="Action">Action</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Adventure">Adventure</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="RPG">RPG</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Indie">Indie</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Strategy">Strategy</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Shooter">Shooter</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Casual">Casual</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Simulation">Simulation</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Puzzle">Puzzle</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Arcade">Arcade</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Platformer">Platformer</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Multiplayer">Multiplayer</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Racing">Racing</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Sports">Sports</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Fighting">Fighting</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Family">Family</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Board games">Board games</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Educational">Educational</p>
                    </div>
                    <div className="option">
                        <p onClick={handleGender} value="Card">Card</p>
                    </div>
                </div>
            </div>

            <div className='selectBox'>
                <div onClick={handleSelectOrigin} className='selectOrigin'>
                    <div className='selectedContent'>
                        <p className='title'>Origin</p>
                    </div>
                </div>
                <div className='hiddenOptions' id="originOptions">
                    <div className="option">
                        <p onClick={handleOrigin} value="Api">Api</p>
                    </div>
                    <div className="option">
                        <p onClick={handleOrigin} value="DataBase">Data base</p>
                    </div>
                </div>
            </div>
            <div onClick={handleRefresh} className='refresh'>
                <p>↺</p>
            </div>
        </div>
    )
}