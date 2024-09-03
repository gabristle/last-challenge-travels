import api from '../../http-common'

const destinationDetails = async (id: number) => {
    try{
        const response = await api.get(`/destination/${id}`)
        return response.data
    }catch(error){
        console.error(error);
    }
}

const allDestinations = async () => {
    try{
        const response = await api.get(`/destination/`)
        return response.data
    }catch(error){
        console.error(error);
    }
}


const destinationService = {
    destinationDetails,
    allDestinations
}

export default destinationService