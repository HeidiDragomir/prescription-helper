"use client";

import { usePathname } from "next/navigation";
import "./nav.css";
import Link from "next/link";

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav
			className={`${
				pathname === "/" ? "hidden" : "hidden desktop:flex laptop:flex justify-center mb-12"
			}`}
		>
			<Link className="nav-item border-2" href="/">
				Home
			</Link>
			{pathname === "/tablettraknare" ? null : (
				<Link className="nav-item border-2" href="/tablettraknare">
					Tabletträknare
				</Link>
			)}
			{pathname === "/malvikt-kalkylator" ? null : (
				<Link className="nav-item border-2" href="/malvikt-kalkylator">
					Målvikt Kalkylator
				</Link>
			)}
			{pathname === "/tillväxtkurva-bmi" ? null : (
				<Link className="nav-item border-2" href="/tillväxtkurva-bmi">
					Tillväxtkurva, BMI
				</Link>
			)}
			{pathname === "/intervall-datum-kalkylator" ? null : (
				<Link className="nav-item border-2" href="/intervall-datum-kalkylator">
					Intervall Datum Kalkylator
				</Link>
			)}
			{pathname === "/annat" ? null : (
				<Link className="nav-item border-2" href="/annat">
					Annat
				</Link>
			)}
		</nav>
	);
};

export default Nav;
