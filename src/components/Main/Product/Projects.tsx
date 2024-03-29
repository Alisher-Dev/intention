import { Box, Grid } from "@chakra-ui/react";
import Product from "../Product";
import CategoryTyps from "./CategoryTyps";

function Projects() {
	return (
		<Box p="10% 0">
			<Box display="flex" flexDirection={{ base: "column-reverse", lg: "unset" }} justifyContent="space-between" gap="20px">
				<CategoryTyps />
				<Grid
					display={{ base: "flex", md: "grid" }}
					flexDirection="column"
					gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
					gap={{ base: "20px", xl: "30px" }}
				>
					<Product
						img="https://cdn.learnwoo.com/wp-content/uploads/2020/01/image1-12.png"
						title="Sport 24/7"
						description="ghbgireub gergboydr bgovebyr govadbr gyvbfdrouvgb yad"
						price={100000}
					/>
					<Product
						img="https://cdn.learnwoo.com/wp-content/uploads/2020/01/image1-12.png"
						title="Sport 24/7"
						description="ghbgireub gergboydr bgovebyr govadbr gyvbfdrouvgb yad"
						price={100000}
					/>
					<Product
						img="https://cdn.learnwoo.com/wp-content/uploads/2020/01/image1-12.png"
						title="Sport 24/7"
						description="ghbgireub gergboydr bgovebyr govadbr gyvbfdrouvgb yad"
						price={100000}
					/>
					<Product
						img="https://cdn.learnwoo.com/wp-content/uploads/2020/01/image1-12.png"
						title="Sport 24/7"
						description="ghbgireub gergboydr bgovebyr govadbr gyvbfdrouvgb yad"
						price={100000}
					/>
				</Grid>
			</Box>
		</Box>
	);
}

export default Projects;
