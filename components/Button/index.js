import Link from "next/link";
import "./button.css";

const Button = ({ children, htmlType, className, onClick, disabled }) => {
	return (
		<button
			className={
				className +
				" " +
				"btn-basic min-w-[160px] flex items-center justify-center uppercase text-lg font-semibold bg-orange-100 px-2 py-2 text-center border-2"
			}
			type={htmlType}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
export default Button;
// export const ButtonLink = ({ children, className }) => {
// 	return (
// 		<Link className="nav-item border-2" href="/tablettraknare">
// 			{children}
// 		</Link>
// 	);
// };
