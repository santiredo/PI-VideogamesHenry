
import { useState } from 'react'
import './filters.css'


export default function Filters(){



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
                        <p value="A">A-Z</p>
                    </div>
                    <div className="option">
                        <p value="D">Z-A</p>
                    </div>
                    <div className="option">
                        <p value="D">+Rating</p>
                    </div>
                    <div className="option">
                        <p value="D">-Rating</p>
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
                        <p value="ShowAll">Show all</p>
                    </div>
                    <div className="option">
                        <p value="Male">Action</p>
                    </div>
                    <div className="option">
                        <p value="Female">Adventure</p>
                    </div>
                    <div className="option">
                        <p value="Genderless">RPG</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Indie</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Strategy</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Shooter</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Casual</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Simulation</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Puzzle</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Arcade</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Platformer</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Multiplayer</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Racing</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Sports</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Fighting</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Family</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Board games</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Educational</p>
                    </div>
                    <div className="option">
                        <p value="unknown">Card</p>
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
                        <p value="ShowAll">Show all</p>
                    </div>
                    <div className="option">
                        <p value="Male">Api</p>
                    </div>
                    <div className="option">
                        <p value="Female">Data base</p>
                    </div>
                </div>
            </div>
        </div>
    )
}