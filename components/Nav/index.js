"use client";

import { usePathname } from "next/navigation";
import "./nav.css";
import Link from "next/link";

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav
			className={`${
				pathname === "/"
					? "hidden"
					: "hidden desktop:flex laptop:flex justify-center mb-12"
			}`}
		>
			<Link className="nav-item border-2" href="/">
				Home
			</Link>

			<Link className="nav-item border-2" href="/tablettraknare">
				Tabletträknare
			</Link>

			<Link className="nav-item border-2" href="/malvikt-kalkylator">
				Målvikt Kalkylator
			</Link>

			<Link className="nav-item border-2" href="/tillvaxtkurva-bmi">
				Tillväxtkurva, BMI
			</Link>

			<Link className="nav-item border-2" href="/intervall-datum-kalkylator">
				Intervall Datum Kalkylator
			</Link>

			<Link className="nav-item border-2" href="/annat">
				Annat
			</Link>
		</nav>
	);
};

export default Nav;
