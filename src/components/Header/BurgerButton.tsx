import { Button, ButtonProps } from "@chakra-ui/react";
import BurgerLayer from "./BurgerLayer";

function BurgerButton(props: ButtonProps & { open: boolean }) {
	return (
		<Button
			order={{ base: 3, lg: 4 }}
			borderRadius="5px"
			px="10px"
			display={{ base: "block", lg: "none" }}
			flexDirection="column"
			position="relative"
			zIndex="101"
			{...props}
		>
			<BurgerLayer top="10px" transform={`translate(-50%, 0) scale(${props.open ? 0 : 1})`} />
			<BurgerLayer top="50%" transform={`translate(-50%, -50%) rotate(${props.open ? "45deg" : "0deg"})`} />
			<BurgerLayer top="50%" transform={`translate(-50%, -50%) rotate(${props.open ? "-45deg" : "0deg"})`} />
			<BurgerLayer bottom="10px" transform={`translate(-50%, 0) scale(${props.open ? 0 : 1})`} />
		</Button>
	);
}

export default BurgerButton;
