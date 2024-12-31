import { Text, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomePage from "../elements/replace";

function Application() {
  const bgColor = "#AFDDE5"; // Light background color
  const textColor = "#003135"; // Dark text color

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Flex justify="space-between" align="center" p={4} borderBottom="solid 1px #003135">
        <Link to="/" style={{ color: textColor, fontSize: "24px", fontWeight: "bold" }}>
          Housein
        </Link>
      </Flex>
      <HomePage />
    </Box>
  );
}

export default Application;
