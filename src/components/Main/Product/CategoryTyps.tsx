import { Box, Image, Text } from "@chakra-ui/react";
import usera from "../../../images/usera.svg";
import { Fade } from "react-awesome-reveal";
import Button from "../../Button/Button";

function CategoryTyps() {
	return (
		<Box h="auto" w={{ lg: "40%", xl: "500px" }} bg="white" borderRadius="10px" position="relative">
			<Box className="dashed" position="absolute" top="-10px" left="-10px" w="100%" h="100%" borderRadius="10px"></Box>
			<Fade>
				<Box
					h="100%"
					display="flex"
					p={{ lg: "0px 10%", xl: "0 60px" }}
					justifyContent="space-between"
					flexDirection="column"
					gap="20px"
					position="relative"
				>
					<Box flex="1" justifyContent="center" display="flex" flexDirection="column" gap="20px" p="20px">
						<Text fontSize="32px">Category typs</Text>
						<Text fontSize="20px">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit sunt temporibus at molestiae similique
						</Text>
						<Button>View all category typs</Button>
					</Box>
					<Image src={usera} w={{ base: "40%", lg: "60%" }} zIndex="0" m="0px auto" />
				</Box>
			</Fade>
		</Box>
	);
}

export default CategoryTyps;
