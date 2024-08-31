import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import imgHeader from '../../assets/imgHeader.png'
import SearchCard from '../../components/SearchCard'
import styles from './style.module.css'
import FilterCard from '../../components/FilterCard'
import Footer from '../../components/Footer'
import Sort from '../../components/Sort'
import Button from '../../components/Button'

function Tours() {
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
            <Sort tours={9}></Sort>
            <div className={styles.tours}>
      
            </div>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Tours