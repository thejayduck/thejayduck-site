import Head from 'next/head'
import { getDrawingListData } from '../data'
import styles from '../styles/Drawings.module.css'
import Navbar from "./navbar"

export default function Drawings({drawingList}){
    return(
        <div>
            <Head>
                <title>TheJayDuck - DRAWINGS</title>
                <meta property="og:description" content="Drawings Page" />
            </Head>
            <Navbar/>
            <div className={styles.row}>
                <div className={styles.column}>
                    {
                        drawingList.map (q => 
                            <div className={styles.contentElement}>
                                <div className={styles.image}>
                                    <h2>{q.title}</h2>
                                    <img src={q.url}/>
                                </div>
                                <div className={styles.tool}>{q.software}<br/>{q.hardware}<br/>{q.resolution}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
          drawingList: getDrawingListData(),
        }
    }
  }