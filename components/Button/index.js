import "./button.css";

const Button = ({ children, htmlType, className, onClick, disabled }) => {
	return (
		<button
			className={
				className +
				" " +
				"reset-btn min-w-[160px] flex items-center justify-center uppercase text-lg font-semibold bg-orange-100 px-2 py-2 text-center border-2"
			}
			type={htmlType}
			onClick={onClick}
			disabled={disabled}
		>
			<span className="">{children}</span>
		</button>
	);
};

export default Button;
