"use client"

import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import FormRadio from "../../components/FormRadio";
import Input from "../../components/Input";
import Title from "../../components/Layout/Title";
import { getDataGirls } from "../../lib/get-data-girls.js";
import { getDataBoys } from "../../lib/get-data-boys";


const MalviktKalkylator = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [data, setData] = useState([]);
	const [category, setCategory] = useState("");

	// Fetch data based on gender
	useEffect(() => {
		const fetchData = async () => {
			const result = gender === "girl" ? await getDataGirls() : await getDataBoys();
			setData(result);
		};
		fetchData();
	}, [gender]);
	


	// BMI Calculation
	const calcBMI = () => {
		if (!weight || !height) return 0;
		return (weight / (height * height)) * 10000;
	};

	// Find BMI category
	const findCategory = (bmi) => {
		if (!age || !data.length) return "";

		const ageData = data.find((item) => item.age === parseInt(age));

		if (!ageData) return "Ålder saknas";

		if (bmi < parseFloat(ageData.undervikt.replace("<", ""))) return "Undervikt";
		
		const [normalMin, normalMax] = ageData.normalvikt.split("-").map(parseFloat);

		if (bmi >= normalMin && bmi <= normalMax) return "Normalvikt";

		const [overweightMin, overweightMax] = ageData.övervikt.split("-").map(parseFloat);

		if (bmi >= overweightMin && bmi <= overweightMax) return "Övervikt";
		if (bmi > parseFloat(ageData.obesitas.replace(">", ""))) return "Obesitas";

		return "Okänd kategori";
	};

	// Update category when BMI changes
	useEffect(() => {

		if (!weight || !height || !age) {
			return;
		}
	
		const bmi = calcBMI();
	
		const _category = findCategory(bmi);
	
		setCategory(_category);
	}, [weight, height, age, data]);
	

	const handleReset = () => {
		setWeight("");
		setHeight("");
		setAge("");
		setCategory("");
		setGender("");
	};

	return (
		<div className="w-full h-full desktop:w-[1000px] laptop:w-[1000px] m-auto desktop:p-12 laptop:p-12">
			<Title>Målvikt kalkylator (IsoBMI)</Title>
			<div className="desktop:w-[600px] laptop:w-[600px] tablet:w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="flex flex-col gap-8">
					{/* Gender Selection */}
					<div>
						<h2 className="text-2xl pb-2">Kön</h2>
						<div className="flex gap-4">
							<FormRadio label="Flicka" name="gender" value="girl" onChange={() => setGender("girl")} checked={gender === "girl"} />
							<FormRadio label="Pojke" name="gender" value="boy" onChange={() => setGender("boy")} checked={gender === "boy"}/>
						</div>
					</div>

					{/* Age Selection */}
					<div>
						<h2 className="text-2xl pb-2">Ålder</h2>
						<Dropdown
							label="Ålder"
							items={[...Array(17).keys()].map((i) => `${i + 2} år`)}
							onChange={(e) => setAge(e.target.value)}
                            value={age}
						/>
					</div>

					{/* Height Input */}
					<div className="w-full">
						<Input type="number" name="height" placeholder="Längd (cm)" label="Längd (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
					</div>

					{/* Weight Input */}
					<div className="w-full">
						<Input type="number" name="weight" placeholder="Vikt (kg)" label="Vikt (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
					</div>

					{/* BMI Result Display */}
					{data.length > 0 ? (
						<p className="text-xl">
							Det ungefärliga kroppsmasseindexet är {weight && height ? calcBMI().toFixed(1) : 0}, vilket klassificeras som: <b>{category}</b>
						</p>
						) : (
						<p>Laddar data...</p>
						)}

					{/* Reset Button */}
					<div className="flex justify-center">
						<Button className="bg-orange-100" onClick={handleReset}>Reset</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MalviktKalkylator;
