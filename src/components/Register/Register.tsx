import { Box, Flex, Input, Text } from "@chakra-ui/react";
import Button from "../Button/Button";

function Register() {
	return (
		<Box as="main" px="20px">
			<Flex
				as="form"
				flexDirection="column"
				gap="35px"
				borderRadius="20px"
				bg="#fff7f7"
				m="120px auto 100px"
				maxW="580px"
				width="100%"
				p="30px"
			>
				<Text fontSize="18px" fontWeight="600">
					Registration
				</Text>
				<Input
					type="text"
					name="firstName"
					placeholder="First Name"
					border="1px solid #1D99DF"
					borderRadius="20px"
					_placeholder={{ color: "#1D99DF" }}
				/>
				<Input
					type="text"
					name="lastName"
					placeholder="Last Name"
					border="1px solid #1D99DF"
					borderRadius="20px"
					_placeholder={{ color: "#1D99DF" }}
				/>
				<Input
					type="text"
					name="email"
					placeholder="Email"
					border="1px solid #1D99DF"
					borderRadius="20px"
					_placeholder={{ color: "#1D99DF" }}
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					border="1px solid #1D99DF"
					borderRadius="20px"
					_placeholder={{ color: "#1D99DF" }}
				/>
				<Input
					name="verify"
					placeholder="Re-enter password"
					type="password"
					border="1px solid #1D99DF"
					borderRadius="20px"
					_placeholder={{ color: "#1D99DF" }}
				/>
				<Button>Register</Button>
			</Flex>
		</Box>
	);
}

export default Register;
