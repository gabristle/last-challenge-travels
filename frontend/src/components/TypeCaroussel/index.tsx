import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect, useState } from 'react'
import TypeCard from '../TypeCard';
import { Category } from '../../interfaces/Category'
import checkIcon from '../../assets/check.png'
import categoryService from '../../services/category/categoryService'
import styles from './style.module.css'

function TypeCaroussel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'loop',
            perPage: 6,
            autoplay: true,
            interval: 2000,
            pagination: false,
            arrows: false,
        }).mount()

        return () => {
            splide.destroy()
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
    <div className={`splide ${styles.splideContainer}`}>
        <div className='splide__track'>
            <ul className='splide__list'>
                {categories?.map((category: Category, index) => {
                    return (
                        <li key={index} className='splide__slide'><TypeCard icon={checkIcon} category={category.name} tours={category.totalTours} cost={category.cheapestCost}></TypeCard></li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default TypeCaroussel