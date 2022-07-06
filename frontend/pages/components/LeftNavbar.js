import React from "react";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


function LeftNavbar() {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2>Maintenance <br /> STIKOM </h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faRocket}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href={"/admin/formulir"}><a>Data Inventaris</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href={"/admin/Add"}>New Data</a>
					</li>
					
					<li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="/admin/AddPinjam"> Data Barang Pinjaman</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/"><a >LogOut</a></Link>
						<p>Kembali ke user</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
