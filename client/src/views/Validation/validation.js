

export default function validateForm({name, image, Genres, platforms, description, released, rating}){

    let errors = {}
    let urlRegex = /\.(jpeg|jpg|gif|png)$/i;

    if(name && name.length < 5){
        errors.name = 'This field is required, must be min 6 characters'
    }
    if(image && !urlRegex.test(image)){
        errors.image = 'This field must be empty or be an URL'
    }
    if(!Genres){
        errors.Genres = 'This field is required'
    }
    if(!platforms){
        errors.platforms = 'This field is required'
    }
    if(description && description.split(' ').length < 35){
        errors.description = 'Min. 35 words required'
    }
    if(released.length === 10){
        released = released.split('-')
        let year = released[0]
        let month = released[1]
        let day = released[2]
        if(year.length !== 4 || month.length !== 2 || day.length !== 2 || Number(year) > 2023 || Number(month) > 12 || Number(day) > 31){
            errors.released = 'This date format is required: YYYY-MM-DD'
        }
    }else if(released && released.length < 10){
        errors.released = 'This date format is required: YYYY-MM-DD'
    }
    if(rating && (Number(rating) > 10 || Number(rating) < 0 || isNaN(rating))){
        errors.rating = 'Rating must be empty or be between 0 and 10'
    }

    return errors
}

export const validateSubmit = ({name, image, description, released, rating}) => {
    let errors = false
    let urlRegex = /\.(jpeg|jpg|gif|png)$/i;
    
    if(name.length < 5){
        errors = true
    }
    if(image && !urlRegex.test(image)){
        errors = true
    }
    if(description && description.split(' ').length < 35){
        console.log('Description')
        errors = true
    }
    if(released.length < 10){
        errors = true
    } else if(released.length === 10){
        released = released.split('-')
        let year = released[0]
        let month = released[1]
        let day = released[2]
        if(year.length !== 4 || month.length !== 2 || day.length !== 2 || Number(year) > 2023 || Number(month) > 12 || Number(day) > 31){
            errors = true
        }
    }
    if(rating && (Number(rating) > 10 || Number(rating) < 0 || isNaN(rating))){
        errors = true
    }

    return errors
}