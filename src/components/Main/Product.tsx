import { Box, BoxProps, Image, Text } from "@chakra-ui/react";
import Button from "../Button/Button";
import Cart from "../../images/cart.svg?react";
import { Fade } from "react-awesome-reveal";

interface typeProduct {
	img?: string;
	title?: string;
	description?: string;
	price?: number;
}

function Product(props: BoxProps & typeProduct) {
	return (
		<Fade>
			<Box
				w="100%"
				minW={{ base: "280px", lg: "300px", xl: "400px", "2xl": "500px" }}
				borderRadius="10px"
				bg="white"
				overflow="hidden"
				cursor="pointer"
				className="ImgProduct"
				{...props}
			>
				<Box h="250px" w="100%">
					<Image transition="all .5s linear" src={props.img} w="100%" h="100%" transform="scale(100%)" objectFit="fill" />
				</Box>
				<Box p="10px" fontWeight="500" fontSize="18px">
					<Text>{props.title}</Text>
					<Text color="#00000096" fontSize="15px">
						{props.description}
					</Text>
					<Text m="10px 0" fontSize="18px">
						{props.price} som
					</Text>
					<Box display="flex" gap="10px" w="100%" justifyContent="end">
						<Button buttonType="white" px="0">
							<Cart width="20px" height="20px" />
						</Button>
						<Button>Preview</Button>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
}

export default Product;
