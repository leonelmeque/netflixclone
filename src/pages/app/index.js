import AppHeroHeader from '@/components/AppHeroHeader'
import styles from './styles.module.css'
import StreamingCatalog from './components/streaming-catalog/StreamingCatalog'
import Spacer from '@/components/Spacer/Spacer'
import { FETCH_MOVIES } from '@/services/api/imdbApi'


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