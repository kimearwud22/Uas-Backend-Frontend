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
							icon={faTachometerAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/"><a >Dashboard</a></Link>
					</li>
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
							icon={faCog}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#"> Settings</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
