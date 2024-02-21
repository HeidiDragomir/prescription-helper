import React from "react";
import "./card.css";
import Link from "next/link";

const Card = ({ title, path }) => {
	return (
		<div className="card uppercase text-black dark:text-grey-100 font-bold border-2 border-black dark:border-white shadow-block w-64 h-64 rounded-lg">
			<Link href={path}>
				<div className="title-card flex justify-center items-center w-full h-full p-2">
					{title}
				</div>
			</Link>
		</div>
	);
};

export default Card;
