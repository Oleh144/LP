import { Link } from "@chakra-ui/react";

const HeaderLink = ({ to, children, isActive }) => {
	return (
		<Link
			outline='none'
			px={{ base: "16px", md: "0" }}
			href={to}
			transition='color 0.2s ease-in-out'
			color={isActive ? "secondary" : "primary"}
			fontWeight={isActive ? "bold" : "normal"}
			_hover={{
				color: "secondary",
				textDecoration: "none",
				fontWeight: "bold",
			}}>
			{children}
		</Link>
	);
};

export default HeaderLink;
