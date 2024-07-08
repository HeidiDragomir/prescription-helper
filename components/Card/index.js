import React from "react";
import "./card.css";
import Link from "next/link";

const Card = ({ title, path }) => {
	return (
		<div className="flex justify-center items-center card uppercase text-black font-bold border-2 border-black shadow-block w-64 h-64 rounded-lg bg-lilac-200 cursor-pointer">
			<Link href={path}>
				<div className="text-center text-2xl">{title}</div>
			</Link>
		</div>
	);
};

export default Card;
