import React from "react";
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>User</span>
					</h2>
					<p>welcome to the board Maintenace.</p>
				</div>
				<div className={styles.navbarright}>
					<div className="mr-4">
						<div className={styles.logo}>
							<FontAwesomeIcon
								icon={faSignOutAlt}
								style={{ width: "18px", cursor: "pointer" }}
							/>{" "}
							<Link href="/admin/formulir"><a >Admin</a></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
