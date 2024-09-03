import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect, useState } from 'react'
import { Tour } from '../../interfaces/Tour'
import tourService from '../../services/tour/tourService'
import TourCard from '../TourCard'
import styles from './styles.module.css'

function PopularToursCaroussel() {
    const [tours, setTours] = useState([])

    useEffect(() => {
        const splideTour = new Splide('#tourSplide', {
            type: 'loop',
            perPage: 4,
            autoplay: true,
            interval: 2000,
            pagination: false,
            arrows: false,
        }).mount()

        return () => {
            splideTour.destroy()
        }

    }, [tours])

    useEffect(() => {
        const getTours = async () => {
            try{
                const data = await tourService.popularTours()
                setTours(data)
            }catch(error){
                console.error(error)
            }
        }

        getTours()
    }, [])

  return (
    <div className={`splide ${styles.splideTour}`} id='tourSplide'>
        <div className='splide__track'>
            <ul className='splide__list'>
                {tours?.map((tour: Tour, index) => {
                    return (
                        <li key={index} className='splide__slide'>
                            <TourCard id={tour.id} image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/cologne.png?alt=media&token=1d870e93-15de-4cce-a476-d513693572e6'} city={tour.city} destination={tour.Destination} tour={tour.name} grade={tour.averageGrade} reviews={tour.reviewCount} duration={tour.duration} cost={tour.costPerPerson}></TourCard>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default PopularToursCaroussel