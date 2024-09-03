import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
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
import PaginationButton from '../../components/PaginationButton'
import { Category } from '../../interfaces/Category'
import categoryService from '../../services/category/categoryService'
import { Destination } from '../../interfaces/Destination'
import destinationService from '../../services/destination/destinationService'

function Tours() {
  const [tours, setTours] = useState<Tour[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [countTours, setCountTours] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [name, setName] = useState<string>('')
  const [categoriesId, setCategoriesId] = useState<string>('')
  const [maxCost, setMaxCost] = useState<number>(0)
  const [destinationsId, setDestinationsId] = useState<string>('')
  const [grades, setGrades] = useState<string>('')
  const [sort, setSort] = useState<string>('')
  const [cost, setCost] = useState<number>(0)

  useEffect(() => {
    
    try{
      const getTours = async () => {
          const categoryData = await categoryService.categoryDetails()
          setCategories(categoryData)
          const destinationData = await destinationService.allDestinations()
          setDestinations(destinationData)
          const data = await tourService.filtredTours({
          name,
          categoriesId,
          maxCost,
          destinationsId,
          grades,
          sort
        })
        console.log(data)
        setTours(data)
        setCountTours(data.length)
      }
      getTours()
    }catch(error){
      console.error(error)
    }

  }, [currentPage, name, categoriesId, maxCost, destinationsId, grades, sort])

  function handlePagination(value: number) {
    value > totalPages || value < 1 ? setCurrentPage(currentPage) : setCurrentPage(value)
  }

  function costFilterSubmit(cost: number) {
    setMaxCost(cost)
  }

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoriesString = categoriesId
    const value = e.target.value
    if(e.target.checked){
      if(categoriesString == ''){
        setCategoriesId(value)
      }else {
        if(categoriesId.includes(value)){
        }else {
          setCategoriesId(`${categoriesId}, ${value}`)
        }
      }
    }else {
      setCategoriesId('')
    }
  }

  const handleGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gradesString = grades
    const value = e.target.value
    if(e.target.checked){
      if(gradesString == ''){
        setGrades(value)
      }else {
        setGrades(`${grades}, ${value}`)
      }
    }else {
      if(grades.includes(value)){
        const arrayGrades = grades.split(',')
        arrayGrades.pop()
        if(grades == ''){
          setGrades('')
        }
        const newGrades = arrayGrades.join(',')
        setGrades(newGrades)
      }
    }
  }

  const handleDestinations = (e: React.ChangeEvent<HTMLInputElement>) => {
    const destinationString = destinationsId
    const value = e.target.value

    if(e.target.checked){
      if(destinationString == ''){
        setDestinationsId(value)
      }else {
        setDestinationsId(`${destinationsId}, ${value}`)
      }
    }else {
      if(destinationsId.includes(value)){
        const arrayDestinations = destinationsId.split(',')
        arrayDestinations.pop()
        if(destinationsId == ''){
          setDestinationsId('')
        }
        const newDestinations = arrayDestinations.join(',')
        setDestinationsId(newDestinations)
      }
    }
  }

  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      <main>
        <section className={styles.mainSection}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/imgHeader.png?alt=media&token=8cbd6124-d6d0-4c70-8fbc-55f2c15af5fe'} alt="cathedral of cologne" className={styles.imgHeader}/>
          <div className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Tour Package</h1>
            <p><a href={'/'}>Home</a> / <a href={'/tours'} className={styles.tourLink}>Tour Package</a></p>
          </div>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
        <section className={styles.mainContent}>
          <aside className={styles.filters}>
            <FilterCard title='Search'>
              <div className={styles.searchContainer}>
                <input type='text' onChange={(e) => setName(e.target.value)} className={styles.nameInput}></input>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/searchBlue.png?alt=media&token=e2b23858-0a5a-446f-864e-20dbfa122662'} alt="search icon" className={styles.searchIcon}/>
              </div>
            </FilterCard>
            <FilterCard title='Filter By'>
              <div className={styles.rangeContainer}>
                <input type='range' max='600' min='80' onChange={(e) => setCost(Number(e.target.value))} step='20' className={styles.range}></input>
                <div className={styles.rangeRow}>
                  <p className={styles.initialCost}>$80.00</p>
                  <p className={styles.maxCost}>${cost}.00</p>
                </div>
                <Button onClick={() => costFilterSubmit(cost)} className={styles.rangeButton}>Submit</Button>
              </div>
            </FilterCard>
            <FilterCard title='Categories'>
              <div className={styles.checkboxContainer}>
                {categories.map((category: Category, index: number)=> {
                  return (
                    <label htmlFor={category.name} key={index}>
                    <input type="checkbox" id={category.name} value={index+1} onChange={handleCategory}/>
                    {category.name}
                    </label>
                  )
                })}
                </div>
            </FilterCard>
            <FilterCard title='Destinations'>
              <div className={styles.checkboxContainer}>
                {destinations.map((destination: Destination, index:number) => {
                  return (
                    <label htmlFor={destination.name} key={index}>
                    <input type="checkbox" id={destination.name} value={index+1} onChange={handleDestinations}/>
                    {destination.name}
                    </label>
                  )
                })}
                </div>
            </FilterCard>
            <FilterCard title='Reviews'>
              <div className={styles.checkboxContainer}>
                <div>
                  <label htmlFor='fiveStars'>
                  <input type="checkbox" id='fiveStars' value={5} onChange={handleGrade}/>
                  5 Stars
                  </label>
                </div>
                <div>
                  <label htmlFor='fourStars'>
                  <input type="checkbox" id='fourStars'  value={4} onChange={handleGrade}/>
                  4 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='threeStars'>
                  <input type="checkbox" id='threeStars'  value={3} onChange={handleGrade}/>
                  3 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='twoStars'>
                  <input type="checkbox" id='twoStars'  value={2} onChange={handleGrade}/>
                  2 Stars & Up
                  </label>
                </div>
                <div>
                  <label htmlFor='oneStar'>
                  <input type="checkbox" id='oneStar'  value={1} onChange={handleGrade}/>
                  1 Star & Up
                  </label>
                </div>
              </div>
            </FilterCard>
          </aside>
          <section className={styles.toursContainer}>
            <Sort tours={countTours} onChange={(e) => setSort(e.target.value)}></Sort>
            <div className={styles.tours}>
              {tours?.map((tour: Tour, index: number) => {
                return ( 
                  <div key={index}>    
                    <TourCard id={tour.id} image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/cologne.png?alt=media&token=1d870e93-15de-4cce-a476-d513693572e6'} city={tour.city} destination={tour.Destination} tour={tour.name} grade={tour.averageGrade} reviews={tour.Reviews?.length ? tour.Reviews?.length : 0} duration={tour.duration} cost={tour.costPerPerson}></TourCard>
                  </div>    
                )
              })}
            </div>
            <div className={styles.paginationButtons}>
              <PaginationButton onClick={() => handlePagination(currentPage-1)}>{'<'}</PaginationButton>
              { currentPage == 1 ?
                <>
                  <PaginationButton onClick={() => handlePagination(currentPage)}>{currentPage}</PaginationButton>
                  <PaginationButton onClick={() => handlePagination(currentPage+1)}>{currentPage+1}</PaginationButton>
                  <PaginationButton onClick={() => handlePagination(currentPage+2)}>{currentPage+2}</PaginationButton>
                </>
                :
                <>
                  {currentPage < 4 ? <PaginationButton onClick={() => handlePagination(currentPage-1)}>{currentPage-1}</PaginationButton> : <PaginationButton onClick={() => handlePagination(currentPage-2)}>{currentPage-2}</PaginationButton>} 
                  {currentPage < 4 ? <PaginationButton onClick={() => handlePagination(currentPage)}>{currentPage}</PaginationButton> : <PaginationButton onClick={() => handlePagination(currentPage-1)}>{currentPage-1}</PaginationButton>}
                  {currentPage < 4 ? <PaginationButton onClick={() => handlePagination(currentPage+1)}>{currentPage+1}</PaginationButton> : <PaginationButton onClick={() => handlePagination(currentPage)}>{currentPage}</PaginationButton>}
                </>
              }
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