"use client";

import "./index.css";
import { format, addDays, getYear, setDefaultOptions } from "date-fns";
import { useEffect, useRef, useState } from "react";
import Title from "../../components/Layout/Title";
import Input from "../../components/Input";
import { sv } from "date-fns/locale";
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
		<div className="w-[1000px] m-auto p-12">
			<Title>Tabletträknare</Title>
			<div className="w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="flex justify-end">
					<button
						className="reset-btn text-right border-2 rounded-full "
						onClick={onReset}
					>
						Reset
					</button>
				</div>

				<div className="flex my-4 py-4">
					<Input
						label="Tabletter per dygn"
						htmlType="text"
						name="tabletsPerDay"
						value={tabletsPerDay}
						required
						onChange={(event) => setTabletsPerDay(event.target.value)}
					/>
				</div>
				<div className="flex my-4 py-4">
					<Input
						label="Förpackningar"
						htmlType="text"
						name="packages"
						required
						value={packages}
						onChange={(event) => setPackages(event.target.value)}
					/>
					<Input
						label="Stycke i varje förpackningar"
						htmlType="text"
						name="tabletsPerPackage"
						required
						value={tabletsPerPackage}
						onChange={(event) => setTabletsPerPackage(event.target.value)}
					/>
				</div>
				<div className="flex my-4 py-4">
					<Input
						label="Uttag"
						htmlType="text"
						name="withdrawal"
						required
						value={withdrawal}
						onChange={(event) => setWithdrawal(event.target.value)}
					/>
					<Input
						id="date"
						label="Datum"
						htmlType="date"
						name="date"
						max="9999-12-31"
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
							<span className="font-bold">{tabletsPerDay}</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						tabletter varje dag.
					</p>
					<p className="pb-6">
						Fick{" "}
						{packages ? (
							<span className="font-bold">{packages}</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						förpackningar med{" "}
						{tabletsPerPackage ? (
							<span className="font-bold">{tabletsPerPackage}</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						stycke i varje förpackningar.
					</p>
					<p className="w-full">
						Det borde räcka för{" "}
						{totalDays ? (
							<span className="font-bold">{Math.trunc(totalDays)}</span>
						) : (
							<span className="font-bold">0</span>
						)}{" "}
						dagar, till{" "}
						{formattedDate ? (
							<span className="font-bold">{formattedDate}</span>
						) : (
							<span className="font-bold">--/--/----</span>
						)}
						.
					</p>
				</div>
			</div>
		</div>
	);
}
