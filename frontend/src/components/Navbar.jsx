import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Flex } from "@chakra-ui/react";

// home, login, about, contact

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
];

export default function Navbar() {
  return (
    <Flex
      align="center"
      justify="space-around"
      background="gray.200"
      padding={4}
    >
      {links?.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}
