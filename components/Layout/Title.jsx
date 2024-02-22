const Title = ({ children }) => {
	return (
		<div className="flex justify-center">
			<h2 className="section-title text-5xl desktop:text-6xl font-semibold my-12">{children}</h2>
		</div>
	);
};

export default Title;
