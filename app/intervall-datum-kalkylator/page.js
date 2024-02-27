"use client";

import { useState } from "react";
import Title from "../../components/Layout/Title";
import {
	setDefaultOptions,
	intervalToDuration,
	differenceInDays,
} from "date-fns";
import Input from "../../components/Input";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
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
	return (
		<div className="w-full desktop:w-[1000px] laptop:w-[1000px] m-auto desktop:p-12 laptop:p-12">
			<Title>Intervall Kalkylator</Title>
			<div className="desktop:w-[600px] laptop:w-[600px] tablet:w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="desktop:hidden laptop:hidden">
					<Link href={"/"}>
						<ArrowUturnLeftIcon className="w-6 mb-10 cursor-pointer" />
					</Link>
				</div>
				<div className="flex my-4 py-4">
					<Input
						label="Startdatum"
						htmlType="date"
						name="startDate"
						required
						onChange={(event) => setStartDate(event.target.value)}
					/>
				</div>
				<div className="flex my-4 py-4">
					<Input
						label="Slutdatum"
						htmlType="date"
						name="endDate"
						required
						onChange={(event) => setEndDate(event.target.value)}
					/>
				</div>
				<div className="flex justify-center mt-12">
					<Button
						className=""
						onClick={handleOnClick}
					>
						Beräkna
					</Button>
				</div>

				{interval && (
					<>
						<div className="border-dashed border-t-4 pt-6 text-lg flex gap-2">
							<p>
								<span className="font-bold">{interval.years}</span> år,
							</p>
							<p>
								{interval.months > 0 ? (
									<span className="font-bold">{interval.months}</span>
								) : (
									<span className="font-bold">0</span>
								)}{" "}
								månader,
							</p>
							<p>
								<span className="font-bold">
									{Math.floor(interval.days / 7)}
								</span>{" "}
								veckor,
							</p>
							<p>
								<span className="font-bold">{interval.days % 7}</span> dagar
							</p>
						</div>
						<div className="mt-6">
							<p>
								<span className="font-bold">{days}</span> dagar totallt
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default IntervallDatumKalkylator;
