import {Box, Container, Flex, Heading, Text, Image as ChakraImage, Button} from "@chakra-ui/react";

function StartOpenEnterpriseSection() {

    return (
        <Box
            as="section"
            py={{base: "sectionSpace", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
            backgroundImage="url('/background-dots.png')" backgroundRepeat="repeat-x"
        >
            <Container
                maxW="container"
            >
                <Flex justifyContent="space-between" alignItems="center" flexDirection={{
                    base: "column",
                    md: "row-reverse"
                }} gap={{base: "30px", md: "20px"}}
                >
                    <Box textAlign={{base: "center", md: "right"}} width={{base: "100%", md: '50%'}}>
                        <ChakraImage display="inline-block" src="enterprise-img-01.png"/>
                    </Box>
                    <Box textAlign={{base: "center", md: "left"}} width={{base: "100%", md: '50%'}}>
                        <Heading
                            size={{base: "3xl", md: "4xl", lg: "5xl"}}
                            mb={{base: 4, lg: 6}}
                        >Start an Open Enterprise</Heading>
                        <Text
                            fontSize={{base: "16px", lg: "18px"}}
                            color="gray"
                            mb={{base: 4, lg: 9}}
                        >If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.</Text>
                        <Button size={{base: "xl", md: "2xl"}} bg="secondary" rounded="8px" asChild>
                            <a href="#">Request early access</a>
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default StartOpenEnterpriseSection;