import { Box, Container } from "@chakra-ui/react";
import AboutUs from "./About/AboutUs";
import Categories from "./Category/Categories";
import Projects from "./Product/Projects";
import CategoryProduct from "./CategoryProduct/CategoryProducts";

function Main() {
  return (
    <Box as="main" mt="70px">
      <Container maxW="1650px" m="0px auto">
        <AboutUs />
        <Categories />
        <Projects />
        <CategoryProduct />
      </Container>
    </Box>
  );
}

export default Main;
