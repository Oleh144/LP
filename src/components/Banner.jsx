import {Box, Button, Container, Flex, Heading, Image as ChakraImage, Text} from "@chakra-ui/react";

export default function Banner() {
    return(
        <Box as="section">
            <Container maxW="container" py="4">
                <Flex direction="column" align="center">
                    <Heading size={{base: '2xl'}}>A new model for open collaboration</Heading>
                    <Text>This is the text component</Text>
                    <Button>Run an organization where members get rewarded for their contributions with fractional ownership.</Button>
                    <Box>
                        <ChakraImage src="/public/banner-img.png"  />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}