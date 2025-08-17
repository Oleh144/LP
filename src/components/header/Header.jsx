import {Box, Button, Container, Flex, Image} from "@chakra-ui/react";
import {useState} from "react";
import {CiMenuBurger} from "react-icons/ci";
import HeaderLink from "../HeaderLink.jsx";

function Header() {
  const [isActive, setIsActive] = useState(false)

  function toggleMenu() {
    setIsActive(!isActive)
  }

  return (
    <Container maxW="container">
      <Flex
        as="header"
        position="relative"
        justify="space-between"
        align="center"
        paddingY={{base: 4, md: 6}}
      >
        <Box className="logo">
          <Flex
            align="center"
            gap={2}
            className="logoBlock"
            fontWeight="bold"
          >
            {/*<Box>*/}
            {/*	<Image*/}
            {/*		src="/logo.svg"*/}
            {/*		alt="Logo"*/}
            {/*	/>*/}
            {/*</Box>*/}
            <Box
              fontSize={{base: "20px", lg: "27px"}}
              className="logoText"
            >
              Open Enterprise
            </Box>
          </Flex>
        </Box>
        <Flex
          justify="flex-end"
          align="center"
          gap="6"
        >
          <Flex
            as="nav"
            gapY={1}
            gapX={7}
            py={3}
            top='100%'
            left="-16px"
            right="-16px"
            zIndex={10}
            bgColor={{base: "white", md: "transparent"}}
            flexDirection={{base: "column", md: "row"}}
            position={{base: "absolute", md: "static"}}
            translate={{base: isActive ? "0" : "-100%", md: "0"}}
            transition="all 0.3s ease-in-out"
            fontSize={{base: "16px", md: "14px", lg: "20px"}}
            borderBottom={{base: "1px solid #E5E5E5", md: "none"}}
          >
            <HeaderLink to='/Why Open Enterprise'>Why Open Enterprise</HeaderLink>
            <HeaderLink to='/Features'>Features</HeaderLink>
            <HeaderLink to='/Contribute'>Contribute</HeaderLink>
            <HeaderLink to="/">Request early access</HeaderLink>
          </Flex>
        </Flex>
        <Box
          hideFrom="md"
        >
          <CiMenuBurger
            onClick={toggleMenu}
          />
        </Box>
      </Flex>
    </Container>
  )
}

export default Header