"use client";

import { useState } from "react";
import Title from "../../components/Layout/Title";
import {
	setDefaultOptions,
	intervalToDuration,
	differenceInDays,
} from "date-fns";
import Input from "../../components/Input";
import { sv } from "date-fns/locale";
import Button from "../../components/Button";
setDefaultOptions({ locale: sv });

const IntervallDatumKalkylator = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [interval, setInterval] = useState(null);
	const [days, setDays] = useState(null);

	const handleOnClick = () => {
		if (!startDate || !endDate) {
			return;
		}
		const _interval = intervalToDuration({
			start: new Date(startDate),
			end: new Date(endDate),
		});
		const _days = differenceInDays(new Date(endDate), new Date(startDate));

		setInterval(_interval);
		setDays(_days);
	};

	const handleReset = () => {
		setStartDate(null);
		setEndDate(null);
		setInterval(null);
		setDays(null);
	};

	return (
		<div className="w-full h-screen desktop:w-[1000px] laptop:w-[1000px] m-auto desktop:p-12 laptop:p-12">
			<Title>Intervall Datum Kalkylator</Title>
			<div className="desktop:w-[600px] laptop:w-[600px] tablet:w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="flex my-4 py-4">
					<Input
						label="Startdatum"
						htmlType="date"
						name="startDate"
						required
						onChange={(event) => setStartDate(event.target.value)}
						value={startDate || ""}
					/>
				</div>
				<div className="flex my-4 py-4">
					<Input
						label="Slutdatum"
						htmlType="date"
						name="endDate"
						required
						onChange={(event) => setEndDate(event.target.value)}
						value={endDate || ""}
					/>
				</div>

				{interval && (
					<>
						<div className="border-dashed border-t-4 pt-6 mt-6 text-lg flex gap-2">
							<p>
								{interval.years > 0 ? (
									<span className="font-bold text-2xl">{interval.years}</span>
								) : (
									<span className="font-bold text-2xl">0</span>
								)}{" "}
								år,
							</p>
							<p>
								{interval.months > 0 ? (
									<span className="font-bold text-2xl">{interval.months}</span>
								) : (
									<span className="font-bold text-2xl">0</span>
								)}{" "}
								månader,
							</p>
							<p>
								<span className="font-bold text-2xl">
									{interval.days > 0 ? Math.floor(interval.days / 7) : 0}
								</span>{" "}
								veckor,
							</p>
							<p>
								<span className="font-bold text-2xl">
									{interval.days > 0 ? interval.days % 7 : 0}
								</span>{" "}
								dagar
							</p>
						</div>
						<div className="mt-6 text-lg">
							<p>
								<span className="font-bold">{days}</span> dagar totallt
							</p>
						</div>
					</>
				)}

				<div className="flex justify-center mt-12 mb-8">
					<Button className="bg-green-200 text-white" onClick={handleOnClick}>
						Beräkna
					</Button>
				</div>
				<div className="flex justify-center">
					<Button className="bg-orange-100" onClick={handleReset}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

export default IntervallDatumKalkylator;
