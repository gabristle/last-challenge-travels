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

const tourById = async (id: number) => {
    try {
        const response = await api.get(`/tour/${id}`)
        return response.data
    }catch(error){
        console.error(error)
    }
}

const filtredTours = async (params: {
    name?: string
    categoriesId?: string
    maxCost?: number
    destinationsId?: string
    grades?: string
    sort?: string
}) => {
    try {
        const queryParams = new URLSearchParams()

        if(params.name){
            queryParams.append('name', params.name)
        }

        if(params.categoriesId) {
            queryParams.append('categoriesId', params.categoriesId)
        }

        if(params.maxCost){
            queryParams.append('maxCost', params.maxCost.toString())
        }

        if(params.destinationsId){
            queryParams.append('destinationsId', params.destinationsId)
        }

        if(params.grades){
            queryParams.append('grades', params.grades)
        }

        if(params.sort) {
            queryParams.append('sort', params.sort)
        }

        const response = await api.get(`/tour/search?${queryParams.toString()}`)
        return response.data                                                                                                                       
    }catch(error){
        console.error(error)
    }
}

const tourService = {
    popularTours,
    allTours,
    tourById,
    filtredTours
}

export default tourService