import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import Details from '../../components/Details'
import styles from './style.module.css'
import ReviewCard from '../../components/ReviewCard'
import ReviewForm from '../../components/ReviewForm'
import PopularToursCaroussel from '../../components/PopularToursCaroussel'
import Footer from '../../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import TourImage from '../../components/TourImage'
import { useEffect, useState } from 'react'
import tourService from '../../services/tour/tourService'
import { Tour } from '../../interfaces/Tour'
import { Review } from '../../interfaces/Review'
import AverageReviews from '../../components/AverageReviews'
import ratingService from '../../services/rating/ratingService'
import { Rating } from '../../interfaces/Rating'
import Calculator from '../../components/Calculator'
import reviewService from '../../services/review/reviewServices'
import MapComponent from '../../components/Map'
import { APIProvider } from '@vis.gl/react-google-maps'

function TourDetails() {
  const { id } = useParams<string>()
  const tourId = Number(id)
  const [tour, setTour] = useState<Tour>()
  const [averageGrades, setAverageGrades] = useState<Rating>()
  const navigate = useNavigate()
  const [seed, setSeed] = useState(1)

  function handleNavigate(){
    navigate('/tours')
  }

  useEffect(() => {
    const getTour = async (id: number) => {
      try{
        const data = await tourService.tourById(id)
        const gradesData = await ratingService.ratingData(id)
        setTour(data)
        setAverageGrades(gradesData)
      }catch(error){
        handleNavigate()
        console.error(error)
      }
    }

    getTour(tourId)
  }, [tourId])

  const handleSubmit = async (newReview: Review) => {
    try{
      await reviewService.addReview(tourId, newReview)
      const data = await tourService.tourById(tourId)
      setTour(data)
      setSeed(Math.random());
    }catch(error){
      console.error(error)
    }
  }

  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      {tour &&
      <main className={styles.main}>
        <div className={styles.mainSections}>
          <section className={styles.mainSection}>
            <section className={styles.detailsSection}>
              <TourImage image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} className={styles.mainImage} tourName={tour?.name}></TourImage>
              <Details city={tour.city} destination={tour.Destination} tour={tour.name} costPerPerson={tour.costPerPerson} duration={tour.duration} maxPeople={25} minAge={5} category={tour.Category} reviewCount={tour.Reviews?.length || 0} grade={Math.ceil(tour.averageGrade)}></Details>
              <h2 className={styles.title}>Overview</h2>
              <p className={styles.detailsText}>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler's heart. As Turkey's cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
              <p className={styles.detailsText}>The City is home to some of the world's most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul's illustrious past. Wandering through the bustling streets, you'll find an array of delightful bazaars, where you can haggle for unique souvenirs, immerse yourself in the aromatic spices, and savor traditional Turkish delights.</p>
            </section>
            <section>
              <h2 className={styles.title} id={'mapAddress'}>Map</h2>
              {/*
              <APIProvider apiKey={"AIzaSyBWA5xuEmbqnw-_DHBhrSSW_6OGXLWYOJw"}>
                {tour.Destination && <MapComponent city={tour.city} country={tour.Destination?.name}></MapComponent>}  
              </APIProvider>
              */}
            </section>
            <section className={styles.averageReviews}>
              <h2 className={styles.title}>Average Reviews</h2>
              {averageGrades && <AverageReviews rating={averageGrades} averageGrade={tour?.averageGrade}></AverageReviews>}
            </section>
            <section className={styles.reviews}>
              <h3 className={styles.subtitle}>Showing {tour?.Reviews?.length} reviews</h3>
              {tour.Reviews?.map((review: Review, index:number) => {
                return (
                  <ReviewCard key={index} date={review.createdAt ? review.createdAt : ''} author={review.name_user} reviews={1} grade={Number(review.averageGrade?.toFixed())}>{review.message}</ReviewCard>      
                )
              })}
              <ReviewForm key={seed} submit={handleSubmit}></ReviewForm>
            </section>
          </section>
          <aside className={styles.calculatorSection}>
            <Calculator cost={tour.costPerPerson} duration={tour.duration}></Calculator>
          </aside>
        </div>
        <h1 className={styles.sectionTitle}>You may also like...</h1>
        <section className={styles.suggestion}>
          <PopularToursCaroussel></PopularToursCaroussel>  
        </section>
      </main>
      }     
      <Footer></Footer>
    </>
  )
}

export default TourDetails