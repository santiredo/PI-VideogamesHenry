

export default function validateForm({name, image, genres, platforms, description, released, rating}){

    let errors = {}
    let urlRegex = /\.(jpeg|jpg|gif|png)$/i;
    let dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if(!name){
        errors.name = 'This field is required'
    }
    if(image && !urlRegex.test(image)){
        errors.image = 'This field must be empty or be an URL'
    }
    if(!genres){
        errors.generes = 'This field is required'
    }
    if(!platforms){
        errors.platforms = 'This field is required'
    }
    if(!description || description.length < 50){
        errors.description = 'Min. 50 words required'
    }
    if(!dateRegex.test(released)){
        errors.released = 'This date format is required: YYYY-MM-DD'
    }
    if(rating && (Number(rating) > 10 || Number(rating) < 0)){
        errors.rating = 'Rating must be empty or be between 0 and 10'
    }
}