import React from 'react'
import styles from './index.module.css'
import Button from '@/components/Button/Button'
import VideoJs from '@/components/VideoJs'
import Layout from '@/components/Layout'
/**
 * Tasks
 * Static big image
 * Video plays after a few seconds
 * When user is watching another trailer video pauses
 * When user scroll down until a certain height video pauses
 * Movie Title
 * Movie description
 * Add a play button
 * add a more info button
 * add PG 
 * 
 */
const AppHeroHeader = () => {
   const videoPlayerRef = React.useRef(null)
   const [options, setOptions] = React.useState(
    {
        autoplay: false,
        responsive: true,
        fluid: true,
        poster:"/images/stranger.jpeg",
        sources: [{
          src: '/video/stranger.mp4',
          type: 'video/mp4'
        }]
       }
   )

   const playTrailer = () => {
       videoPlayerRef.current.play()
   }

   const stopTrailer = () => {
       setOptions({...options, autoplay:false})
   }
    
    React.useEffect(()=>{
        return ()=>{
        }
    },[])
    return(
        <header className={styles.hero}>
          <Layout row>
          <div className={styles.heroCTAContainer}>
          <div className={styles.heroMovieImageTitle}>
            </div>
            <p className={styles.description}>
                Movie description and thing that are running whatever lets goo finish thiiiis.
            </p>
            <div className={styles.ctaButtons}>
                <Button label="Play" variant="secondary" icon="Play" size="lg" onClick={()=>{playTrailer()}}/>
                <Button label="More Info" variant="tertiary" icon="Plus" size="lg" onClick={()=>{stopTrailer()}}/>
            </div>
          </div>
             </Layout>
            <div className={styles.trailer}>
                <VideoJs ref={videoPlayerRef} options={options} />
            </div>
        </header>
    )
}

export default AppHeroHeader