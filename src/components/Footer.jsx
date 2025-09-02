import {Box, Container, Flex} from "@chakra-ui/react";
import HeaderLink from "./HeaderLink.jsx";

function Footer() {

    return (
        <Box as="footer" id="footer" paddingY={{base: "16px", md: "24px"}}>
            <Container maxW="container">
                <Flex
                    justify="space-between"
                    align="center"
                    gap="20px"
                    flexDirection={{base: "column", md: "row"}}
                >
                    <Box className="logo">
                        <Box
                            fontSize={{base: "20px", lg: "24px"}}
                            fontWeight="bold"
                            className="logoText"
                        >
                            Open Enterprise
                        </Box>
                    </Box>
                    <Flex
                        justify={{base: "center", md: "flex-end"}}
                        as="nav"
                        gap={{base: "5px", md: "20px", lg: "35px"}}
                        flexDirection="row"
                        fontSize={{base: "16px", lg: "20px"}}
                        flexWrap={{base: "wrap", md: "nowrap"}}
                    >
                        <HeaderLink to='/Documentation'>Documentation</HeaderLink>
                        <HeaderLink to='/GitHub'>GitHub</HeaderLink>
                        <HeaderLink to='/Twitter'>Twitter</HeaderLink>
                        <HeaderLink to="/Contact us">Contact us</HeaderLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer