import "/styles/globals.css";
import Background from "../components/Layout/Background";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata = {
	title: "Helper Tools",
	description: "Some tools to help you out",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>

			<body className="">
				<Background>
					<Nav />
					<main>{children}</main>
				</Background>

				<Footer />
			</body>
		</html>
	);
}
