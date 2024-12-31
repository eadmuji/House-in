import { Link } from "react-router-dom";
import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Home_page = () => {
  const bgColor = "#AFDDE5"; // Background color
  const textColor = "#003135"; // Text color

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Header handleScroll={handleScroll} />
      <Home />
      <Container maxW="container.xl" p={4}>
        {/* About Us Section */}
        <Box py={10} textAlign="center" id="about-us" minH="100vh" display="flex" flexDirection="column" justifyContent="center">
          <Heading mb={4} fontSize="4xl">About Us</Heading>
          <Text fontSize="2xl" maxW="2xl" mx="auto" mb={6}>
            Welcome to Housein, the ultimate solution for creating and managing renter lists with ease. Our platform is dedicated to simplifying the rental management process, providing landlords and property managers with a streamlined way to organize and monitor tenant details. 
          </Text>
          <Text fontSize="2xl" maxW="2xl" mx="auto">
            At Housein, we believe in making rental management stress-free. Our application allows users to create detailed listings that include rent, water, and electricity bill descriptions. With a user-friendly interface and an emphasis on efficiency, Housein is designed to help you stay organized and focused on what truly matters.
          </Text>
        </Box>

        {/* Services Section */}
        <Box py={10} id="services" minH="100vh" display="flex" flexDirection="column" justifyContent="center">
          <Heading mb={6} textAlign="center" fontSize="4xl">Our Services</Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
            gap={6}
            justifyItems="center"
          >
            <ServiceCard
              title="Effortless Listing Creation"
              description="Craft detailed rental listings effortlessly, including rent, water, and electricity details."
              bg="#0FA4AF"
            />
            <ServiceCard
              title="Organized Tenant Management"
              description="Keep tenant information organized with an intuitive and structured system."
              bg="#24950"
            />
            <ServiceCard
              title="Flexible and Customizable"
              description="Adapt the platform to suit your unique rental management needs."
              bg="#0FA4AF"
            />
          </Grid>
        </Box>

        {/* Contact Us Section */}
        <Box py={10} id="contact-us" textAlign="center" minH="100vh" display="flex" flexDirection="column" justifyContent="center">
          <Heading mb={4} fontSize="4xl">Contact Us</Heading>
          <Text fontSize="2xl" maxW="2xl" mx="auto" mb={6}>
            Have questions or need assistance? Our team is here to help you make the most of your rental management experience. Feel free to reach out to us anytime.
          </Text>
          <VStack spacing={4} fontSize='50px'>
          <Link to="https://www.facebook.com/adrian.muji.98?mibextid=ZbWKwL" isExternal>
            Facebook
            </Link>
            <Link to='https://www.linkedin.com/in/adrian-muji-3b51b1318' isExternal>
            Linkedin
            </Link>
            <Link to='' isExternal>
            Email
            </Link>
            <Link to='https://github.com/eadmuji' isExternal>
            Github
            </Link>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

const Header = ({ handleScroll }) => {
    return (
      <Box
        position="sticky"
        top="0"
        zIndex="1000"
        bg="#AFDDE5"
        borderBottom="solid 1px #003135"
        mx="10px"
      >
        <Container maxW="80vw" padding="10px" maxH="20vh">
          <Flex justifyContent={"space-between"} alignItems="center">
            <Text fontSize="30px" fontWeight="bold">
              Housein
            </Text>
            <HStack gap="20px" ml="90px" fontSize="20px">
              <Button variant="link" onClick={() => handleScroll("home")} color="#003135">
                Home
              </Button>
              <Button variant="link" onClick={() => handleScroll("about-us")} color="#003135">
                About Us
              </Button>
              <Button variant="link" onClick={() => handleScroll("services")} color="#003135">
                Services
              </Button>
              <Button variant="link" onClick={() => handleScroll("contact-us")} color="#003135">
                Contact Us
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    );
  };
  

const Home = () => {
  return (
    <Box id="home" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container centerContent fontFamily="poppins" margin="auto" fontSize="6xl" textAlign="center">
        <Text mb={6}>Simplify Rental Monitoring with Organized Lists</Text>
        <Link to="/application">
          <Button size="lg" colorScheme="teal" fontSize='40px'> Get Started</Button>
        </Link>
      </Container>
    </Box>
  );
};

const ServiceCard = ({ title, description, bg }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={6}
      bg={bg}
      borderRadius="lg"
      shadow="md"
      textAlign="center"
    >
      <Heading fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Text fontSize="lg">{description}</Text>
    </Flex>
  );
};

export default Home_page;
