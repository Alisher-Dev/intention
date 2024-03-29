import { Box, BoxProps } from "@chakra-ui/react";

function BurgerLayer(props: BoxProps) {
	return (
		<Box transition="all 0.2s linear 0s" position="absolute" left="50%" height="3px" width="25px" borderRadius="10px" bg="#1D99DF" {...props} />
	);
}

export default BurgerLayer;
