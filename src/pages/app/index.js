import Head from 'next/head'
import AppHeroHeader from '@/components/AppHeroHeader'
import styles from './styles.module.css'

const App = ()=>{
    return(
        <div className={styles.container}>
           <AppHeroHeader />
        </div>
    )
}

export async function getServerSideProps(){
    return({
        props:{}
    })
}
export default App;