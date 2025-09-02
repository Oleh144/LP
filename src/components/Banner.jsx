import {Box, Button, Center, Container, Flex, Heading, Image as ChakraImage, Text} from "@chakra-ui/react";

export default function Banner({targetRef}) {


    let handleScrol = (ref) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (<Box
        as="section"
        py={{base: "sectionSpace", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
        minHeight={{md: "calc(100vh - 102px)"}}
        position="relative"
    >
        <Container
            maxW="container"
        >
            <Flex
                direction={{base: "column-reverse", md: "row-reverse"}}
                align={{base: "center"}}
                gap={{base: 9, md: 0}}
            >
                <Box width={{md: '50%'}}>
                    <ChakraImage src="/banner-img.png"/>
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
        <Flex flexDirection="column" alignItems="center" gap="10px" position="absolute" bottom="3%" left="50%" transform="translateX(-50%)" onClick={() => handleScrol(targetRef)} cursor="pointer" __hover={{color: "#71A894"}}>
            <ChakraImage width="18px" src="/mouse.svg"/>
            <Text>Scroll down</Text>
        </Flex>
    </Box>)
}