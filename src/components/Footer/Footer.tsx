import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import FacebookIcon from "../../images/facebook.svg?react";
import InstagramIcon from "../../images/instagram.svg?react";
import TelegramIcon from "../../images/telegram.svg?react";

function Footer() {
	const intention = [
		{ text: "Terms", href: "/" },
		{ text: "Licenses", href: "/" },
		{ text: "Market API", href: "/" },
		{ text: "Become a birnasa", href: "/" },
	];

	const help = [
		{ text: "Help center", href: "/" },
		{ text: "Authors", href: "/" },
	];

	const community = [
		{ text: "Community", href: "/" },
		{ text: "Blog", href: "/" },
		{ text: "Forums", href: "/" },
		{ text: "Meetups", href: "/" },
	];

	const meet = [
		{ text: "About Intetion", href: "/" },
		{ text: "FAQ", href: "/" },
		{ text: "Privacy Policy", href: "/" },
	];

	const footer = [
		{ title: "Intention", links: intention },
		{ title: "Help", links: help },
		{ title: "Our Community", links: community },
		{ title: "Meet Intetion", links: meet },
	];

	const social = [
		{ icon: <FacebookIcon width="20px" height="20px" />, href: "https://facebook.com" },
		{ icon: <InstagramIcon width="20px" height="20px" />, href: "https://instagram.com" },
		{ icon: <TelegramIcon width="20px" height="20px" />, href: "https://telegram.me" },
	];

	return (
		<Box as="footer" bg="#faf9f9" boxShadow="0px 0px 10px #1d98df52">
			<Container
				maxW="1650px"
				// sx={{
				// 	background: "linear-gradient(180deg, #A3D5F1 17.88%,  #1D99DF 100%)",
				// }}
				py="20px"
				display="flex"
				flexDirection={{ base: "column", md: "row" }}
				justifyContent="space-between"
				gap="10px"
				textAlign={{ base: "center", md: "left" }}
			>
				{footer.map((el, index) => (
					<Box display="flex" flexDirection="column" gap="5px" key={index}>
						<Text fontSize={{ base: "24px", md: "18px", lg: "24px" }} mb="5px" fontWeight="600">
							{el.title}
						</Text>
						{el.links.map((el, index) => (
							<Link
								to={el.href}
								key={index}
								_hover={{ color: "#1D99DF" }}
								fontSize={{ base: "18px", md: "14px", lg: "18px" }}
								as={NavLink}
							>
								{el.text}
							</Link>
						))}
					</Box>
				))}
				<Flex flex="0 1 200px" flexDirection="column" alignItems="center">
					<Logo mb="10px" />
					<Flex gap="10px">
						{social.map((el, index) => (
							<Button key={index} px="0" buttonType="white">
								{el.icon}
							</Button>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}

export default Footer;
