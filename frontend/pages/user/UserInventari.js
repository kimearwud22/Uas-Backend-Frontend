import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
// import Content from "./components/Content";
import UserContent from '../components/user/userContent';
import Header from '../components/user/Header';
// import LeftNavbar from "./components/LeftNavbar";
const UserInventaris =()=>{
    
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
				<hr />
				<UserContent/>
			</div>
		</div>
    </div>
    )
}


export default UserInventaris;