import api from '../../http-common'

const categoryDetails = async () => {
    try{
        const response = await api.get('/category/details')
        return response.data
    }catch(error){
        console.error(error);
    }
}

const categoryService = {
    categoryDetails
}

export default categoryService