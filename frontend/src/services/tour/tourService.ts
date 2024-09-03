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
    categoriesId?: number[]
    maxCost?: number
    destinationsId?: number[]
    grades?: number[]
}) => {
    try {
        const queryParams = new URLSearchParams()
        if(params.name){
            queryParams.append('name', params.name)
        }

        if(params.categoriesId) {
            params.categoriesId.map((id) => {
                queryParams.append('categoriesId', id.toString())
            })
        }

        if(params.maxCost){
            queryParams.append('maxCost', params.maxCost.toString())
        }

        if(params.destinationsId){
            params.destinationsId.map((id) => {
                queryParams.append('destinationsId', id.toString())
            })
        }

        if(params.grades){
            params.grades.map((grade) => {
                queryParams.append('grades', grade.toString())
            })
        }
        const response = await api.get(`/tour/?${queryParams.toString()}`)
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