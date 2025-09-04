import {Box, Container, Flex, Image} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {CiMenuBurger} from "react-icons/ci";
import HeaderLink from "./HeaderLink.jsx";
import logo from "../assets/logo.svg";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [isActive, setIsActive] = useState('')
    const sections = [
        {
            id: "help-us-section",
            linkName: "Why Open Enterprise"
        },
        {
            id: "feature-section",
            linkName: "Features"
        },
        {
            id: "how-we-work-section",
            linkName: "Contribute"
        },
        {
            id: "early-access-section",
            linkName: "Request early access"
        }
    ];

    useEffect(() => {
        const observers = [];

        sections.forEach((id) => {
            const section = document.getElementById(id.id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setIsActive(id.id);
                },
                {
                    rootMargin: "-50% 0px -50% 0px", // активация при центре экрана
                    threshold: 0,
                }
            );

            observer.observe(section);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    function toggleMenu() {
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box as="header" id="header" position="sticky" top="0" zIndex="100" bgColor="white">
            <Container maxW="container">
                <Flex
                    position="relative"
                    justify="space-between"
                    align="center"
                    transition="padding .3s"
                    paddingY={scrollY ? {base: "10px", md: "15px"} : {base: "16px", md: "24px"}}
                >
                    <Box className="logo">
                        <Flex
                            align="center"
                            className="logoBlock"
                            fontWeight="bold"
                        >
                            <Box transition="max-width .3s, marginRight .3s" maxWidth={scrollY ? "68px" : "0"} marginRight={scrollY ? "10px" : "0"}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                />
                            </Box>
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
                            translate={{base: isOpen ? "0" : "-100%", md: "0"}}
                            transition="all 0.3s ease-in-out"
                            fontSize={{base: "16px", md: "14px", lg: "20px"}}
                            borderBottom={{base: "1px solid #E5E5E5", md: "none"}}
                        >
                            {
                                sections.map(id => (
                                    <HeaderLink key={id} to={`#${id.id}`} sectionId={id.id} isActive={isActive === id.id}>{id.linkName}</HeaderLink>
                                ))
                            }
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
        </Box>
    )
}

export default Header