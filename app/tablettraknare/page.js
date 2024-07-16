"use client";

import "./index.css";
import { format, addDays, getYear, setDefaultOptions } from "date-fns";
import { useEffect, useRef, useState } from "react";
import Title from "../../components/Layout/Title";
import Input from "../../components/Input";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { sv } from "date-fns/locale";
import Button from "../../components/Button";
setDefaultOptions({ locale: sv });

export default function Tablettraknare() {
	const [tabletsPerDay, setTabletsPerDay] = useState("");
	const [packages, setPackages] = useState("");
	const [tabletsPerPackage, setTabletsPerPackage] = useState("");
	const [withdrawal, setWithdrawal] = useState("");
	const [totalDays, setTotalDays] = useState("");
	const [date, setDate] = useState("");

	const calculateTotalDays = () => {
		return (packages * tabletsPerPackage * withdrawal) / tabletsPerDay;
	};

	var finalDate;
	var formattedDate;

	if (date && totalDays) {
		finalDate = addDays(date, totalDays);
		formattedDate = format(finalDate, "PPPP");
	}

	const onReset = () => {
		setTabletsPerDay("");
		setPackages("");
		setTabletsPerPackage("");
		setWithdrawal("");
		setDate("");
		setTotalDays("");
	};

	useEffect(() => {
		setTotalDays(calculateTotalDays());
	}, [tabletsPerDay, packages, tabletsPerPackage, withdrawal, totalDays]);

	return (
		<div className="w-full h-screen desktop:w-[1000px] laptop:w-[1000px] m-auto desktop:p-12 laptop:p-12">
			<Title>Tabletträknare</Title>
			<div className="desktop:w-[600px] laptop:w-[600px] tablet:w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="flex my-4 py-4">
					<Input
						label="Tabletter per dygn"
						placeholder="Tabletter per dygn"
						htmlType="text"
						name="tabletsPerDay"
						value={tabletsPerDay}
						pattern="[0-9]"
						required
						onChange={(event) => setTabletsPerDay(event.target.value)}
					/>
				</div>
				<div className="desktop:flex tablet:flex laptop:flex my-4 py-4">
					<Input
						label="Förpackningar"
						placeholder="Förpackningar"
						htmlType="text"
						name="packages"
						required
						pattern="[0-9]"
						value={packages}
						onChange={(event) => setPackages(event.target.value)}
					/>
					<Input
						label="Stycke i varje förpackningar"
						placeholder="Stycke i varje förpackningar"
						htmlType="text"
						name="tabletsPerPackage"
						required
						pattern="[0-9]"
						value={tabletsPerPackage}
						onChange={(event) => setTabletsPerPackage(event.target.value)}
					/>
				</div>
				<div className="desktop:flex tablet:flex laptop:flex my-4 py-4">
					<Input
						label="Uttag"
						placeholder="Uttag"
						htmlType="text"
						name="withdrawal"
						required
						pattern="[0-9]"
						value={withdrawal}
						onChange={(event) => setWithdrawal(event.target.value)}
					/>
					<Input
						id="date"
						label="Datum"
						htmlType="date"
						name="date"
						// max="9999-12-31"
						// pattern={"[0-9]{2}/[0-9]{2}/[0-9]{4}"}
						value={date}
						required
						onChange={(event) => {
							setDate(event.target.value);
						}}
					/>
				</div>
				<div className="border-dashed border-t-4 pt-6 text-lg">
					<p className="pb-2">
						Patienten tar{" "}
						{tabletsPerDay ? (
							<span className="underline  underline-offset-4 font-bold">
								{tabletsPerDay}
							</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						tabletter varje dag.
					</p>
					<p className="pb-2">
						Fick{" "}
						{packages ? (
							<span className="underline  underline-offset-4 font-bold">
								{packages}
							</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						förpackningar med{" "}
						{tabletsPerPackage ? (
							<span className="underline  underline-offset-4 font-bold">
								{tabletsPerPackage}
							</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						stycke i varje förpackningar.
					</p>
					<p className="w-full">
						Det borde räcka för{" "}
						{totalDays ? (
							<span className="underline  underline-offset-4 font-bold">
								{Math.trunc(totalDays)}
							</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						dagar, till{" "}
						{formattedDate ? (
							<span className="underline  underline-offset-4 font-bold text-[#0a0049] text-xl">
								{formattedDate}
							</span>
						) : (
							<span className="font-bold">--/--/----</span>
						)}
						.
					</p>
				</div>
				<div className="flex justify-center mt-12">
					<Button onClick={onReset}>Reset</Button>
				</div>
			</div>
		</div>
	);
}
