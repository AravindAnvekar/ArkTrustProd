import React from 'react'
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Banner from "../components/work/banner/Banner"
import Content from "../components/work/content/Content"

export default function work() {
    return (
        <div>
            <Head>
                <title>ARK Trust - Work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main >
                <Banner />
                <Content />
            </main>
            <Footer />
        </div>
    )
}
