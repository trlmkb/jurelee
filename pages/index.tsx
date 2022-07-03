import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
        
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="jurele" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Logo className={styles.logoBig} />
        <div className={styles.content}>

            <div className={styles.columnFirst}>
                <h1 className={styles.h1}>Hi, my name is zygis</h1>
                <p className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla amet morbi elementum luctus. Hendrerit velit pretium ullamcorper sed quam sapien fermentum lorem euismod. Auctor eu ullamcorper ultrices faucibus velit placerat. Purus accumsan, ultricies faucibus vel vulputate. Suspendisse vulputate risus viverra etiam turpis in.</p>
                <ul className={styles.links}>
                    <li>
                        <Link href="/">Instagram</Link>
                    </li>
                    <li>
                        <Link href="/">Messenger</Link>
                    </li>
                    <li>
                        <Link href="/">Email</Link>
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
            <div className={styles.column}>
                <figure className={styles.jurele} >
                    <Logo className={styles.logoSmall} />
                    <img className={styles.aboutSelfie} src="/me-selfie.jpg" alt="zygimantas jurele" />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Home
