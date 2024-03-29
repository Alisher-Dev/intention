import { Box, Image, Text } from "@chakra-ui/react";
import about from "../../../images/icon.png";
import Button from "../../Button/Button";
import title from "../../../images/title.svg";
import stars from "../../../images/stars.svg";
import { Fade, Slide } from "react-awesome-reveal";

function AboutUs() {
	return (
		<Box
			display="flex"
			p="10% 0"
			alignItems="center"
			gap="30px"
			justifyContent={{ base: "center", md: "unset" }}
			flexDirection={{ base: "column-reverse", lg: "unset" }}
		>
			<Box w={{ base: "100%", xl: "49%" }}>
				<Slide direction="left">
					<Image src={title} />
				</Slide>
				<Box borderRadius="10px" mb="20px" className="dashed" p="20px" position="relative">
					<Fade>
						<Image
							src={stars}
							display={{ base: "none", sm: "inline" }}
							position="absolute"
							top={0}
							right={0}
							transform="translate(0, -114%)"
						/>
					</Fade>
					<Fade>
						<Image src={stars} position="absolute" bottom={0} left={0} transform="translate(0, 114%)" />
					</Fade>
					<Fade direction="left">
						<Text fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px" }} color="rgb(33, 33, 33)" fontWeight="700">
							Это стартап, основанный группой энтузиастов, объеденённых стремлением к инновациям и креативному подходу к решению
							повседневных задач. Мы занимаемся разработкой и внедрением уникальных идеально проработанных концепций в различных
							областях.
						</Text>
					</Fade>
				</Box>
				<Fade direction="up">
					<Box display="flex" justifyContent="end">
						<Button>Подробнее</Button>
					</Box>
				</Fade>
			</Box>
			<Box overflow="hidden" w={{ base: "100%", xl: "49%" }} display="flex" alignItems="center" justifyContent="center" p="20px">
				<Fade direction="right">
					<Image src={about} objectFit="contain" w={{ base: "70%", lg: "70%", xl: "410px" }} />
				</Fade>
			</Box>
		</Box>
	);
}

export default AboutUs;
