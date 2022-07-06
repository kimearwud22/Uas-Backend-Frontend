import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
// import Content from "./components/Content";
import UserContent from '../components/user/userContent';
import Header from '../components/user/Header';
// import LeftNavbar from "./components/LeftNavbar";
import InventarisByKode from '../components/user/InventarisByKode';
const UserInventaris =({date})=>{
    {Array.isArray(date)? date=date: date=[date]}
    return(
        <div>
        <div className={styles.container}>
			<Head>
				<title>Main10</title>
				<meta name="description" content="Main10" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<Header />
				<InventarisByKode/>
				<hr />
				<UserContent/>
			</div>
		</div>
    </div>
    )
}
export async function getServerSideProps(context) {
    const kode = context.query.kode
    let url = 'http://localhost:5000/inventaris'
    if(typeof kode === 'string'){
        url = `http://localhost:5000/inventaris/${kode}`
    }
    const res = await fetch(url)
    const data = await res.json()
    return {
        props:
            {date}
    }
}

export default UserInventaris;