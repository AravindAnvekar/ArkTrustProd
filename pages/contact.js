import React from 'react'
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function contact() {
    return (
        <div>
            <Head>
                <title>ARK Trust - Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main >
                <h1>COntact form</h1>
            </main>
            <Footer />
        </div>
    )
}
