import api from '../../http-common'
import { Review } from '../../interfaces/Review';

const addReview = async (id:number, review: Review) => {
    try{
        const response = await api.post(`/review/${id}`, review)
        return response.data
    }catch(error){
        console.error(error);
    }
}

const reviewService = {
    addReview
}

export default reviewService