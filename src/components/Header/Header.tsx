import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import Search from "./Search";
import Actions from "./Actions";
import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Button from "../Button/Button";
import Navbar from "./Navbar";
import UserIcon from "../../images/user.svg?react";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";

function Header() {
	const [open, setOpen] = useState(false);
	const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
	const navigate = useNavigate();

	const handleBurger = (state: boolean) => {
		document.body.classList[state ? "add" : "remove"]("lock");
		setOpen(state);
	};

	return (
		<Box as="header" m="0px auto" position="fixed" width="100%" top="0" zIndex="99">
			<Container
				px={{ base: "20px", xl: "50px" }}
				display="flex"
				maxW="1650px"
				alignItems="center"
				justifyContent="space-between"
				bg="white"
				boxShadow="0px 0px 60px rgba(66, 65, 65, 0.08)"
			>
				<Logo order={{ base: 2, lg: 1 }} />
				<Navbar open={open}>
					<Search />
					<Actions />
				</Navbar>
				<Button px={{ base: "5px", lg: "30px" }} order={{ base: 1, lg: 3 }} onClick={() => navigate("/register")}>
					{isLargerThan992 ? "Login" : <UserIcon width="20px" height="20px" />}
				</Button>
				<BurgerButton open={open} onClick={() => handleBurger(!open)} />
			</Container>
		</Box>
	);
}

export default Header;
