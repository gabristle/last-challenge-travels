import api from '../../http-common'

const popularTours = async () => {
    try{
        const response = await api.get('/tour/popular')
        return response.data
    }catch(error){
        console.error(error);
    }
}

const allTours = async (page: number, limit: number) => {
    try {
        const response = await api.get(`/tour/${page}/${limit}`)
        return response.data
    }catch(error){
        console.error(error)
    }
}

const tourService = {
    popularTours,
    allTours
}

export default tourService