import { ButtonProps, Button as ChakraButton, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
	children?: ReactNode;
	icon?: ReactNode;
	buttonType?: "blue" | "white";
}

function Button(props: IProps) {
	const { children, buttonType, icon, ...buttonProps } = props;
	const [media992] = useMediaQuery(`(max-width: 991.98px)`);

	const color = buttonType === "white" ? "#212121" : "#1D99DF";

	return (
		<ChakraButton
			border={`1px solid ${color}`}
			borderRadius="30px"
			variant="outline"
			fill={color}
			color={color}
			bg={props.buttonType === "white" ? "white" : "transparent"}
			px="30px"
			py="10px"
			_hover={{ bg: color, fill: "white", color: "white" }}
			{...buttonProps}
		>
			{!icon || media992 ? children : icon}
		</ChakraButton>
	);
}

export default Button;
