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
		<div className="desktop:h-screen laptop:h-screen tablet:h-fit w-fit m-auto grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 content-center gap-12">
			{data.map((item, index) => (
				<Card key={index} title={item.title} path={item.path} />
			))}
		</div>
	);
}
