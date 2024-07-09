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
		<div className="relative w-full pr-4">
			<input
				id={id}
				ref={PropRef}
				onChange={onChange}
				type={htmlType}
				placeholder={placeholder}
				className="w-full p-2.5 my-1 border-solid border-2 transition-al text-lg focus:outline-none focus:border-4 focus:border-yellow"
				aria-label={ariaLabel}
				required={required}
				pattern={pattern}
				value={value}
			/>
			<label className="absolute bg-label text-white px-2 py-0.5 left-2.5 -top-8 transition-all duration-300 transform translate-y-3/4 opacity-100 rounded">
				{label}
			</label>
		</div>
	);
};

export default Input;
