
import { useEffect, useState } from 'react';
import background from '../../images/formBackground.jpg'
import style from './form.module.css';
import './form.css'
import { useDispatch } from 'react-redux';
import { changeRouteDetails, changeRouteHome } from '../../redux/action';


export default function Form () {

    const [genres, setGenres] = useState(false)
    const [platform, setPlatform] = useState(false)
    const platforms = [ "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]
    const [form, setForm] = useState({
        name: "",
        image:"",
        genres: [],
        platforms: [],
        description: "",
        released: "",
        rating: "",
    })

    const createHandler = (event) => {
        event.preventDefault()
    }

    const handleSelectGender = (event) => {
        const genderOptions = document.querySelector('#genderOptionsForm');

        if(!genres) {
            setGenres(true)
            genderOptions.classList.remove('hiddenOptionsForm');            
            genderOptions.classList.add('genderActiveForm');            
            
        } else{
            setGenres(false)

            setTimeout(() => {
                genderOptions.classList.remove('hideGenderForm');
                genderOptions.classList.add('hiddenOptionsForm')
                
            }, 500);
            
            genderOptions.classList.remove('genderActiveForm')
            genderOptions.classList.add('hideGenderForm')
        }
        event.currentTarget.classList.toggle('selectGenderActiveForm');
    }

    const handleSelectPlatform = (event) => {
        const platformOptions = document.querySelector('#platformOptions');

        if(!platform) {
            setPlatform(true)
            platformOptions.classList.remove('hiddenOptionsForm');            
            platformOptions.classList.add('platformActive');            
            
        } else{
            setPlatform(false)

            setTimeout(() => {
                platformOptions.classList.remove('hidePlatform');
                platformOptions.classList.add('hiddenOptionsForm')
                
            }, 500);
            
            platformOptions.classList.remove('platformActive')
            platformOptions.classList.add('hidePlatform')
        }
        event.currentTarget.classList.toggle('selectPlatformActive');
    }

    const handleGenderOption = (event) => {
        const genre = event.target.innerText;
        const genderOptions = document.querySelector('#genderOptionsForm');

        setForm({...form, genres: [...form.genres, genre]});

        setGenres(false)

        setTimeout(() => {
            genderOptions.classList.remove('hideGenderForm');
            genderOptions.classList.add('hiddenOptionsForm')
            
        }, 500);
        
        genderOptions.classList.remove('genderActiveForm')
        genderOptions.classList.add('hideGenderForm')
    }

    const handlePlatformOption = (event) => {
        const platform = event.target.innerText;
        const platformOptions = document.querySelector('#platformOptions');

        setForm({...form, platforms: [...form.platforms, platform]});

        setPlatform(false)

        setTimeout(() => {
            platformOptions.classList.remove('hidePlatform');
            platformOptions.classList.add('hiddenOptionsForm')
            
        }, 500);
        
        platformOptions.classList.remove('platformActive')
        platformOptions.classList.add('hidePlatform')
    }

    // RESETEO DEL LOADING
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeRouteHome())
        dispatch(changeRouteDetails())
    },[dispatch])

    return (
        <div className={style.createVideogame}>
            <img className={style.background} src={background} alt="" />
            <h1>Now is your turn to create your own videogame!</h1>
            <div className={style.formDiv}>
                <form onSubmit={createHandler} className={style.form}>
                    <div className={style.formDivs}>
                        <label>Name*</label>
                        <input type="text" />
                    </div>
                    <div className={style.formDivs}>
                        <label>Image</label>
                        <input type="text" />
                    </div>
                    <div className={style.formDivs}>
                        <div className={style.genderPlatformDiv}>
                            <div className='selectBoxForm'>
                                <label onClick={handleSelectGender} className='selectGenderForm'>
                                    Genres*
                                </label>
                                <div className='hiddenOptionsForm' id="genderOptionsForm">
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Action</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Adventure</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>RPG</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Indie</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Strategy</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Shooter</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Casual</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Simulation</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Puzzle</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Arcade</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Platformer</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Multiplayer</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Racing</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Sports</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Fighting</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Family</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Board games</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Educational</p>
                                    </div>
                                    <div className="optionForm">
                                        <p onClick={handleGenderOption}>Card</p>
                                    </div>
                                </div>
                            </div>
                            <div className='selectBoxForm'>
                                <label onClick={handleSelectPlatform} className='selectplatform'>
                                    Platforms*
                                </label>
                                <div className='hiddenOptionsForm' id="platformOptions">
                                    {
                                        platforms.map(platform => {
                                            return (
                                                <div key={platform} className='optionForm'>
                                                    <p onClick={handlePlatformOption}>{platform}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>                            
                        </div>
                        <ul><li>{form.genres.map(genre => `${genre}, `)}</li></ul>
                        <ul><li>{form.platforms.map(platform => `${platform}, `)}</li></ul>
                    </div>
                    <div className={style.formDivs}>
                        <label>Description*</label>
                        <input type="text" />
                    </div>
                    <div className={style.formDivs}>
                        <label>Released*</label>
                        <input type="text" />
                    </div>
                    <div className={style.formDivs}>
                        <label>Rating</label>
                        <input type="text" />
                    </div>
                    <div className={style.formDivs}>
                        <button className={style.button}>Create</button>
                    </div>
                </form>
                <div className={style.videogame}>
                </div>
            </div>
        </div>
    )
}