import Head from "next/dist/next-server/lib/head";
import LeftNavbar from "../components/LeftNavbar";
import UserList from "../components/UserList";
import Header from "../components/Header";
// import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Formulir = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Main10</title>
				<meta name="description" content="Main10" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
				<UserList/>
			</div>
		</div>
	);
}
export default Formulir;