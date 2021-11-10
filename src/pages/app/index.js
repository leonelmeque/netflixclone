import AppHeroHeader from '@/components/AppHeroHeader'
import styles from './styles.module.css'
import Spacer from '@/components/@ui-elements/Spacer/Spacer'
import { FETCH_MOVIES } from '@/services/api/imdbApi'
import Dynamic from 'next/dynamic'

const StreamingCatalog = Dynamic(() => import('./components/streaming-catalog/StreamingCatalog'),{ssr: false})

const App = () => {
    return (
        <>
            <div className={styles.container}>
                <AppHeroHeader />
                <div className={styles.catalog}>
                    <StreamingCatalog catalogTitle="Popular on Netflix" query={FETCH_MOVIES('popular')} resource={'popular'}/>
                    <Spacer size="sm" />
                    <StreamingCatalog catalogTitle="Trending on Netflix" query={FETCH_MOVIES('trending')} resource={'trending'} />
                    <Spacer size="sm" />
                    <StreamingCatalog catalogTitle="Now Playing" query={FETCH_MOVIES('nowPlaying')} resource={'nowPlaying'} />
                    <Spacer size="sm" />
                    <StreamingCatalog catalogTitle="Top Rated" query={FETCH_MOVIES('topRated')} resource={'topRated'} />
                    {/* <StreamingCatalog catalogTitle="Popular on Netflix" /> */}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    return ({
        props: {}
    })
}
export default App;