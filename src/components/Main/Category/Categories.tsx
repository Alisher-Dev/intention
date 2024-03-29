import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Button from "../../Button/Button";

interface categoryType {
  id: number;
  title: string;
  description: string;
  img: string;
}

function Categories() {
  let category = [
    {
      id: 1,
      title: "smm",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
    {
      id: 2,
      title: "frontent",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
    {
      id: 3,
      title: "bekent",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
    {
      id: 4,
      title: "video montaj",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
    {
      id: 5,
      title: "bla zaebal",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
    {
      id: 6,
      title: "3d montaj",
      description: "Это стартап, основанный группой энтузиастов, объеденённых",
      img: "https://1ps.ru/files/blog/2020/web-design-hierarchy/1-samsung.jpg",
    },
  ];
  return (
    <>
      <Box p="10% 0">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          w="100%"
          gap="20px"
        >
          {category.map((el: categoryType) => (
            <Box
              key={el.id}
              w={{ lg: "75%", xl: "350x" }}
              h="300px"
              cursor="pointer"
              m="0px auto"
              bg="white"
              boxShadow="0px 2px 5px rgba(0, 0, 0, .2)"
              borderRadius="20px"
              position="relative"
              display="flex"
              p="10px"
              alignItems="center"
              flexDirection="column"
              className="BoxCategory"
              overflow="hidden"
              transition="all 0.3s ease"
            >
              <Text textAlign="center" fontSize="24px" fontWeight="500">
                {el.title}
              </Text>
              <Text textAlign="center" fontSize="16px" fontWeight="400">
                {el.description}
              </Text>
              <Image
                transition="all 0.3s ease"
                className="categoryImg"
                src={el.img}
                w="80%"
                position="absolute"
                bottom="-10px"
              />
            </Box>
          ))}
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="30px"
        >
          <Button buttonType="white">View all categories</Button>
        </Box>
      </Box>
    </>
  );
}

export default Categories;
