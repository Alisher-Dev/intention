import { Box, Grid } from "@chakra-ui/react";
import Button from "../../Button/Button";
import Product from "../Product";

function CategoryProduct() {
	let category = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	return (
		<Box p="10% 0">
			<Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
				{category.map((el) => (
					<Button key={el} flexBasis={{ base: "100px", md: "170px" }} buttonType="white">
						category
					</Button>
				))}
			</Box>
			<Grid
				mt="40px"
				gridTemplateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap="20px"
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
	);
}

export default CategoryProduct;
