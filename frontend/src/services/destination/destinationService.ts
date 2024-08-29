import api from '../../http-common'

const destinationDetails = async (id: number) => {
    try{
        const response = await api.get(`/destination/${id}`)
        return response.data
    }catch(error){
        console.error(error);
    }
}

const destinationService = {
    destinationDetails
}

export default destinationService