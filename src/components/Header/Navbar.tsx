import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
	open: boolean;
}

function Navbar({ children, open }: IProps) {
	return (
		<Box
			position={{ base: "fixed", lg: "static" }}
			top="0"
			right="0"
			height="100%"
			sx={{ backdropFilter: "blur(2px)" }}
			transition="all 0.2s linear 0s"
			visibility={{ base: open ? "visible" : "hidden", lg: "visible" }}
			bg={{ base: open ? "#0000001a" : "transparent", lg: "transparent" }}
			order={{ base: 4, lg: 2 }}
			width="100%"
			zIndex="100"
			display={{ base: "flex", lg: "block" }}
			justifyContent="flex-end"
		>
			<Box
				display="flex"
				width={{ base: "300px", lg: "100%" }}
				bg={{ base: "white", lg: "transparent" }}
				height="100%"
				transition="all 0.2s linear 0s"
				transform={{ base: `translate(${open ? "0" : "100%"}, 0)`, lg: "translate(0)" }}
				flexDirection={{ base: "column", lg: "row" }}
				padding={{ base: "30px 10px", lg: "0px" }}
				gap="20px 0px"
				overflow="auto"
				pt={{ base: "90px", lg: 0 }}
			>
				{children}
			</Box>
		</Box>
	);
}

export default Navbar;
