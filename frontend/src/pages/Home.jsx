import { Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/about`);
  }

  return (
    <Box>
      <Heading as="h1" size="xl">
        Home Page
      </Heading>

      <Button colorScheme="red" variant="solid" onClick={handleClick}>
        Go to About Page
      </Button>
    </Box>
  );
}
