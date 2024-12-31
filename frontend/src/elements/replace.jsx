import {
	Box,
	Container,
	SimpleGrid,
	Text,
	VStack,
	Flex,
	Heading,
	Button,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useHSrent } from "../house/rent";
  import ProductCard from "../elements/personRent";
  import CreatePage from "./Rent_info";
  
  const HomePage = () => {
	const { fetchRents, rents } = useHSrent();
  
	useEffect(() => {
	  fetchRents();
	}, [fetchRents]);
	console.log("products", rents);
  
	return (
	  <Box bg="#AFDDE5" color="#003135" w="100%" py={12} minH="100vh">
		<VStack spacing={8}>
		  <Text
			fontSize="30px"
			fontWeight="bold"
			bgGradient="linear(to-r, #0FA4AF, #24950)"
			bgClip="text"
			textAlign="center"
		  >
			Current List
		  </Text>
		  <Flex w="100%" justifyContent="space-between" pr="40px">
			<Heading>Name</Heading>
			<Heading>Rent</Heading>
			<Heading>Water</Heading>
			<Heading>Electricity</Heading>
			<CreatePage />
		  </Flex>
  
		  <VStack spacing={4} w="100%">
			{rents.map((rent) => (
			  <ProductCard key={rent._id} rent={rent} />
			))}
		  </VStack>
  
		  {rents.length === 0 && (
			<Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
			  No input yet{" "}
			</Text>
		  )}
		</VStack>
	  </Box>
	);
  };
  
  export default HomePage;
  