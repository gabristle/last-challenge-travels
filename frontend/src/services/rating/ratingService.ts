import api from '../../http-common'

const ratingData = async (id: number) => {
    try{
        const response = await api.get(`/rating/${id}`)
        return response.data
    }catch(error){
        console.error(error);
    }
}

const ratingService = {
    ratingData
}

export default ratingService