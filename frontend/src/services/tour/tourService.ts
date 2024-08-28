import api from '../../http-common'

const popularTours = async () => {
    try{
        const response = await api.get('/tours/popular')
        return response.data
    }catch(error){
        console.error(error);
    }
}

const tourService = {
    popularTours
}

export default tourService