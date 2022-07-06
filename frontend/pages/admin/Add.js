import Head from "next/dist/next-server/lib/head";
import LeftNavbar from "../components/LeftNavbar";
// import AddInventaris from "./components/AddInventaris";
import CreateInventaris from "../components/admin/CreateInventaris";
import Header from "../components/Header";
// import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Add = () => {
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
                <CreateInventaris/>
            </div>
        </div>
    );
}
export default Add;