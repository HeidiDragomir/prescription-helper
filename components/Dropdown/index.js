// import { useState } from "react";

const Dropdown = ({ title, label, items, value, refProp, onChange }) => {
	return (
		<div className="flex flex-row mobile:hidden w-1/2">
			<label className="styled-dropdown w-full">
				<select
					ref={refProp}
					value={value}
					onChange={onChange}
					className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border-solid border-2 border-bidstacker-main transition ease-in-out m-0 bg-white"
				>
					{items.map((item, index) => {
						return (
							<option
								className="bg-white text-gray-creamy-dark"
								key={index}
								value={item}
							>
								{item}
							</option>
						);
					})}
				</select>
			</label>
		</div>
	);
};

export default Dropdown;
