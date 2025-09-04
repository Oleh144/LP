import {Box, Button, Center, Container, Flex, Heading, Image as ChakraImage, Text} from "@chakra-ui/react";
import bannerImg from "../assets/banner-img.png";
import mouse from "../assets/mouse.svg";

export default function Banner({targetRef}) {


    let handleScroll = (ref) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (<Box
        as="section"
        id="early-access-section"
        py={{base: "15px", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
        minHeight={{md: "calc(100vh - 102px)"}}
        position={{md: "relative"}}
        display={{md: "flex"}}
        alignItems={{md: "center"}}
    >
        <Container
            maxW="container"
        >
            <Flex
                direction={{base: "column-reverse", md: "row-reverse"}}
                align={{base: "center"}}
                gap={{base: "36px", md: "0"}}
            >
                <Box width={{md: '50%'}}>
                    <ChakraImage src={bannerImg} />
                </Box>
                <Box width={{md: '50%'}}>
                    <Heading
                        as="h1"
                        textAlign={{base: "center", md: "left"}}
                        size={{base: "4xl", md: "5xl", lg: "6xl"}}
                        mb={{base: 4, lg: 6}}
                    >A new model for open collaboration</Heading>
                    <Text
                        fontSize={{base: "16px", lg: "24px"}}
                        color="gray"
                        textAlign={{base: "center", md: "left"}}
                        mb={{base: 4, lg: 9}}
                        align={{base: "center", lg: "left"}}
                    >
                        Run an organization where members get rewarded for their contributions with fractional
                        ownership.
                    </Text>
                    <Center justifyContent={{md: 'start'}}>
                        <Button
                            bg="secondary"
                            size={{base: "lg", lg: "2xl"}}
                            rounded="lg"
                        >Request early access</Button>
                    </Center>
                </Box>
            </Flex>
        </Container>
        <Flex hideBelow="md" flexDirection="column" alignItems="center" gap="10px" position="absolute" bottom="3%" left="50%" transform="translateX(-50%)" onClick={() => handleScroll(targetRef)} cursor="pointer" __hover={{color: "#71A894"}}
        >
            <ChakraImage width="18px" src={mouse} />
            <Text>Scroll down</Text>
        </Flex>
    </Box>)
}