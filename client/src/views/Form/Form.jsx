import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import background from '../../images/formBackground.jpg';
import validateForm, { validateSubmit } from '../Validation/validation';
import { createVideogame } from '../../redux/action';
import style from './form.module.css';
import './form.css'


export default function Form () {

    const [genres, setGenres] = useState(false)
    const [platform, setPlatform] = useState(false)
    const platforms = [ "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]
    const [form, setForm] = useState({
        name: "",
        image:"",
        Genres: [],
        platforms: [],
        description: "",
        released: "",
        rating: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if(name === 'platforms' || name === 'Genres'){
            value = value.split(', ').filter(Boolean)
        }

        if(name === 'released'){
            value = value.replace(/-/g, '');

            if(value.length > 4){
                value = value.slice(0, 4)+'-'+value.slice(4)
            }
            if(value.length > 7){
                value = value.slice(0, 7)+'-'+value.slice(7)
            }
        }

        setForm({
            ...form,
            [name]: value,
        });

    }

    
    useEffect(() => {
        setErrors(validateForm(form))
    },[form])


    const dispatch = useDispatch()

    const createHandler = (event) => {
        event.preventDefault()
        
        if(form.rating === '') {
            form.rating = 0
        }
        
        if(validateSubmit(form)){
            alert('You must fill the inputs correctly')
        } else{
            dispatch(createVideogame(form))
            alert('Videogame created successfully')

            setForm({
                name: "",
                image:"",
                Genres: [],
                platforms: [],
                description: "",
                released: "",
                rating: "",
            })
        }

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
                
            }, 400);
            
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

        console.log(genre)

        console.log(form)
        if(form.Genres.length < 3 && !form.Genres.includes(genre)){
            setForm({...form, Genres: [...form.Genres, genre]});
        } else if(form.Genres.includes(genre)){
            alert('This genre is already added')
        } else{
            alert('You can only choose 3 different genres for the videogame')
        }


        console.log(form)

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

        if(form.platforms.length < 5 && !form.platforms.includes(platform)){
            setForm({...form, platforms: [...form.platforms, platform]});
        } else if(form.platforms.includes(platform)){
            alert('This platform is already added')
        } else{
            alert('You can only choose 5 different platforms for the videogame')
        }
        setPlatform(false)

        setTimeout(() => {
            platformOptions.classList.remove('hidePlatform');
            platformOptions.classList.add('hiddenOptionsForm')
            
        }, 500);
        
        platformOptions.classList.remove('platformActive')
        platformOptions.classList.add('hidePlatform')
    }

    const deleteGenre = () => {

        const updatedGenres = [...form.Genres];

        updatedGenres.pop();

        setForm({ ...form, Genres: updatedGenres });
    }

    const deletePlataform = () => {
        const updatedPlatforms = [...form.platforms];

        updatedPlatforms.pop();

        setForm({ ...form, platforms: updatedPlatforms });
    }

    return (
        <div className={style.createVideogame}>
            <img className={style.background} src={background} alt="" />
            <h1>Now is your turn to create your own videogame!</h1>
            <div className={style.formDiv}>
                <form onSubmit={createHandler} className={style.form}>
                    <div className={style.formDivs}>
                        <label>Name*</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Videogame's name"
                        />
                        {errors?.name && <span>{errors.name}</span>}
                    </div>
                    <div className={style.formDivs}>
                        <label>Image</label>
                        <input
                            id="image"
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            placeholder="http://example.com/videogame's-image.jpg"
                        />
                        {errors?.image && <span>{errors.image}</span>}
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
                        <ul>
                            <li id="Genres" name="Genres" value={form.Genres} onChange={handleChange}>
                                {form.Genres.map(genre => `${genre}, `)}
                            </li>
                            <p onClick={deleteGenre}>⇠</p>
                        </ul>
                        <ul>
                            <li id="platforms" name="platforms" value={form.platforms} onChange={handleChange}>
                                {form.platforms.map(platform => `${platform}, `)}
                            </li>
                            <p onClick={deletePlataform}>⇠</p>
                        </ul>
                    </div>
                    <div className={style.formDivs}>
                        <label>Description*</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="What is it about? (min 50 words)"
                        />
                        {errors?.description && <span>{errors.description}</span>}
                    </div>
                    <div className={style.formDivs}>
                        <label>Released*</label>
                        <input
                            id="released"
                            type="text"
                            maxLength="10"
                            name="released"
                            value={form.released}
                            onChange={handleChange}
                            placeholder="YYYY-MM-DD"
                        />
                        {errors?.released && <span>{errors.released}</span>}
                    </div>
                    <div className={style.formDivs}>
                        <label>Rating</label>
                        <input
                            id="rating"
                            type="text"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            placeholder="7.5"
                        />
                        {errors?.rating && <span>{errors.rating}</span>}
                    </div>
                    <div className={style.formDivs}>
                        <button className={style.button}>Create</button>
                    </div>
                </form>
                <div className={style.videogame}>
                    <h2>VIDEOGAME RENDER</h2>
                    <div className={style.cardDiv}>
                        <div className={style.imageDiv}>
                            {form.image && <img src={form.image} alt="" />}
                        </div>
                        {form.name && <h3>{form.name}</h3>}
                        {form.image && form.name && form.Genres && <div className={style.data}>
                            {form.Genres?.map((genre) => {
                                return <h4 key={`${genre}`}>{genre}</h4>;
                            })}
                            <p className={style.moreDetails}>More details</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}