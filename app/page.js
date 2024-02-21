"use client";

import "/styles/globals.css";
import Card from "../components/Card";

const data = [
	{
		title: "tabletträknare",
		path: "/tablettraknare",
	},
	{
		title: "målvikt kalkylator",
		path: "/malvikt-kalkylator",
	},
	{
		title: "tillväxtkurva + bmi",
		path: "/tillvaxtkurva-bmi",
	},
	{
		title: "intervall datum kalkylator",
		path: "/intervall-datum-kalkylator",
	},
	{
		title: "annat",
		path: "/annat",
	},
];

export default function Home() {
	return (
		<div className="h-screen w-fit m-auto grid grid-cols-3 content-center gap-12">
			{data.map((item, index) => (
				<Card key={index} title={item.title} path={item.path} />
			))}
		</div>
	);
}
