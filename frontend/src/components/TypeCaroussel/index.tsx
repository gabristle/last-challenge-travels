import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect, useState } from 'react'
import TypeCard from '../TypeCard';
import { Category } from '../../interfaces/Category'
import categoryService from '../../services/category/categoryService'
import styles from './style.module.css'

function TypeCaroussel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const splideType = new Splide('#typeSplide', {
            type: 'loop',
            perPage: 6,
            autoplay: true,
            interval: 2000,
            pagination: false,
            arrows: false,
        }).mount()

        return () => {
            splideType.destroy()
        };
    }, [categories])

    useEffect(() => {
        const getCategories = async () => {
            try{
                const data = await categoryService.categoryDetails()
                setCategories(data)
            }catch(error){
                console.error(error)
            }
        }

        getCategories()
    }, [])

  return (
    <div className={`splide ${styles.splideCategory}`} id='typeSplide'>
        <div className='splide__track'>
            <ul className='splide__list'>
                {categories?.map((category: Category, index) => {
                    return (
                        <li key={index} className='splide__slide'><TypeCard icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/check.png?alt=media&token=2f017aef-ec94-4a9f-9ad4-f4bf33f80a73'} category={category.name} tours={category.totalTours} cost={category.cheapestCost}></TypeCard></li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default TypeCaroussel