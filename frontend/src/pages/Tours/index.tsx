import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import imgHeader from '../../assets/imgHeader.png'
import SearchCard from '../../components/SearchCard'
import styles from './style.module.css'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'
import Sort from '../../components/Sort'
import Button from '../../components/Button'
import { useEffect, useState } from 'react'
import tourService from '../../services/tour/tourService'
import { Tour } from '../../interfaces/Tour'
import TourCard from '../../components/TourCard'
import cologne from '../../assets/cologne.png'
import PaginationButton from '../../components/PaginationButton'

function Tours() {
  const [tours, setTours] = useState<Tour[]>([])
  const [countTours, setCountTours] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const getTours = async (page: number) => {
      try{
        const data = await tourService.allTours(page, 9)
        setTours(data.tours)
        setCountTours(data.count)
        setTotalPages(data.totalPages)
      }catch(error){
        console.error(error)
      }
    }

    getTours(currentPage)
  }, [currentPage])

  function handlePagination(value: number) {
    value > totalPages || value < 1 ? setCurrentPage(currentPage) : setCurrentPage(value)

  }

  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      <main>
        <section className={styles.mainSection}>
          <img src={imgHeader} alt="cathedral of cologne" className={styles.imgHeader}/>
          <div className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Tour Package</h1>
            <p><a href={'/'}>Home</a> / <a href={'/tours'} className={styles.tourLink}>Tour Package</a></p>
          </div>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
        <section className={styles.mainContent}>
          <aside className={styles.filters}>
            <FilterCard title='Search'>
              <div>
                <input type='text'></input>
                <img src="" alt="" />
              </div>
            </FilterCard>
            <FilterCard title='Filter By'>
              <div>
                <input type='range'></input>
                <Button>Submit</Button>
              </div>
            </FilterCard>
            <FilterCard title='Categories'>
              <div>
                  <label htmlFor='fiveStars'>
                  <input type="checkbox" id='fiveStars'/>
                  5 Stars
                  </label>
                </div>
            </FilterCard>
            <FilterCard title='Destinations'>
              <div>
                  <label htmlFor='fiveStars'>
                  <input type="checkbox" id='fiveStars'/>
                  5 Stars
                  </label>
                </div>
            </FilterCard>
            <FilterCard title='Reviews'>
              <div>
                <div>
                  <label htmlFor='fiveStars'>
                  <input type="checkbox" id='fiveStars'/>
                  5 Stars
                  </label>
                </div>
                <div>
                  <label htmlFor='fourStars'>
                  <input type="checkbox" id='fourStars'/>
                  4 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='threeStars'>
                  <input type="checkbox" id='threeStars'/>
                  3 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='twoStars'>
                  <input type="checkbox" id='twoStars'/>
                  2 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='oneStar'>
                  <input type="checkbox" id='oneStar'/>
                  1 Star & Up
                  </label>
                </div>
              </div>
            </FilterCard>
          </aside>
          <section className={styles.toursContainer}>
            <Sort tours={countTours}></Sort>
            <div className={styles.tours}>
              {tours?.map((tour: Tour, index: number) => {
                return ( 
                  <div key={index}>    
                    <TourCard id={tour.id} image={cologne} city={tour.city} destination={tour.Destination} tour={tour.name} grade={tour.averageGrade} reviews={tour.reviewCount} duration={tour.duration} cost={tour.costPerPerson}></TourCard>
                  </div>    
                )
              })}
            </div>
            <div className={styles.paginationButtons}>
              <PaginationButton onClick={() => handlePagination(currentPage-1)}>{'<'}</PaginationButton>
              {currentPage > 1 && <PaginationButton onClick={() => handlePagination(currentPage-1)}>{currentPage-1}</PaginationButton>}
              <PaginationButton onClick={() => handlePagination(currentPage)}>{currentPage}</PaginationButton>
              {currentPage < 4 && <PaginationButton onClick={() => handlePagination(currentPage+1)}>{currentPage+1}</PaginationButton>}
              <PaginationButton onClick={() => handlePagination(currentPage+1)}>{'>'}</PaginationButton>
            </div>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Tours