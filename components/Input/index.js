import "./input.css";

const Input = ({
	onChange,
	label,
	placeholder,
	htmlType,
	ariaLabel,
	required,
	pattern,
	PropRef,
	id,
	value,
}) => {
	return (
		<div className="input-container relative w-full pr-4">
			<label className="label-input">
				{label && (
					<div className="text-md font-medium inline-block bg-[#382f26] text-white px-2 input-label">
						{label}
					</div>
				)}
				<input
					id={id}
					ref={PropRef}
					onChange={onChange}
					type={htmlType}
					placeholder={placeholder}
					// className="input-item"
					className="block w-full px-4 py-2 mb-6 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-2 border-bidstacker-main transition ease-in-out m-0 focus:text-gray-700 bg-transparent bg-white focus:border-blue-600 focus:outline-none"
					aria-label={ariaLabel}
					required={required}
					pattern={pattern}
					value={value}
				/>
			</label>
		</div>
	);
};

export default Input;
