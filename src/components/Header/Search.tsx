import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import SearchIcon from "../../images/search.svg?react";

function Search() {
	return (
		<InputGroup mx={{ base: 0, lg: "40px" }}>
			<InputLeftElement>
				<SearchIcon fill="#1D99DF" />
			</InputLeftElement>
			<Input
				maxW="450px"
				borderRadius="20px"
				type="text"
				_placeholder={{ color: "#1D99DF" }}
				border="1px solid#1D99DF"
				name="search"
				placeholder="Search"
			/>
		</InputGroup>
	);
}

export default Search;
