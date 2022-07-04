import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.page}>    
        <div className={styles.container}>
            <Head>
                <title>jurele ~</title>
                <meta name="description" content="jurele" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet" />
            </Head>
            
            <Logo className={styles.logoBig} />
            <div className={styles.content}>

                <div className={styles.columnFirst}>
                    <h1 className={styles.h1}>Hi, my name is zygis</h1>
                    <p className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla amet morbi elementum luctus. Hendrerit velit pretium ullamcorper sed quam sapien fermentum lorem euismod. Auctor eu ullamcorper ultrices faucibus velit placerat. Purus accumsan, ultricies faucibus vel vulputate. Suspendisse vulputate risus viverra etiam turpis in.</p>
                    <ul className={styles.links}>
                        <li>
                            <Link href="/">instagram</Link>
                        </li>
                        <li>
                            <Link href="/">messenger</Link>
                        </li>
                        <li>
                            <Link href="/">email</Link>
                        </li>
                    </ul>
                    <ul className={styles.links}>
                        <li>
                            <Link href="/">my projects</Link>
                        </li>
                        <li>
                            <Link href="/">gallery</Link>
                        </li>
                        <li>
                            <Link href="/">writings</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.columnSecond}>
                    <figure className={styles.jurele} >
                        <Logo className={styles.logoSmall} />
                        <img className={styles.aboutSelfie} src="/me-selfie.jpg" alt="zygimantas jurele" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
