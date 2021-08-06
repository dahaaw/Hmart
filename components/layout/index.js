import Head from 'next/head';
import styles from '../../styles/layout.module.css';

import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <div className={styles.container}>
                <Head>

                </Head>

                <header>

                </header>

                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    FOOTER
                </footer>
            </div>
        </>
    );
}

export default Layout;
