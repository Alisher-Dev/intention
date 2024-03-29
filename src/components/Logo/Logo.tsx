import { Image, Link, LinkProps } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-intention.png";

function Logo(props: LinkProps) {
	return (
		<Link as={NavLink} display="block" to="/" w="100px" {...props}>
			<Image src={logo} maxW="100%" />
		</Link>
	);
}

export default Logo;
