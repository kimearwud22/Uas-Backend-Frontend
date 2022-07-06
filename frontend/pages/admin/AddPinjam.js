import Head from "next/dist/next-server/lib/head";
import LeftNavbar from "../components/LeftNavbar";
// import AddInventaris from "./components/AddInventaris";
import CreatePinjam from "../components/admin/CreatePinjam";
// import UserPinjam from "../components/admin/userPinjam";
import Header from "../components/Header";
// import Image from "next/image";
import styles from "../../styles/Home.module.css";


const AddPinjam = () => {
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
                <CreatePinjam/>
                
            </div>
        </div>
    );
}
export default AddPinjam;