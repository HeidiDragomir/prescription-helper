const FormRadio = ({
	id,
	onChange,
	value,
	defaultValue,
	name,
	label,
	required,
	checked,
	refProp,
	errorMessage,
	defaultChecked,
	className,
}) => {
	return (
		<div className="w-1/2">
			<label
				className={
					className +
					" " +
					"min-w-[170px] text-xl cursor-pointer rounded-lg border border-gray-300 flex items-center px-6 py-2 min-h-[36px] bg-white"
				}
			>
				<input
					ref={refProp}
					id={id}
					onChange={onChange}
					type="radio"
					value={value}
					defaultValue={defaultValue}
					name={name}
					className={
						className +
						" " +
						"w-4 h-4 bg-gray-100 accent-gray-500 border-gray-300 cursor-pointer mr-4"
					}
					required={required}
					checked={checked}
					defaultChecked={defaultChecked}
				/>
				{label}
			</label>
		</div>
	);
};

export default FormRadio;