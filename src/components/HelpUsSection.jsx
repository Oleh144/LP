import {
    Box, Button, Center,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import HowWeWorkCard from "./HelpUsCard.jsx";

export default function HelpUsSection() {
    return (
        <Box
            as="section"
            id="help-us-section"
            py={{base: "sectionSpace", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
        >
            <Container
                maxW="container"
            >
                <Heading
                    textAlign={{base: "center"}}
                    size={{base: "3xl", md: "4xl", lg: "5xl"}}
                    mb={{base: 4, lg: 6}}
                >Help us improve Open Enterprise</Heading>
                <Text
                    fontSize={{base: "16px", lg: "18px"}}
                    color="gray"
                    textAlign={"center"}
                    mb={{base: 4, lg: 12}}
                >As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.</Text>
                <Flex
                    direction={{base: "column", md: "row"}}
                    gap={{base: 4, lg: 6}}
                    alignItems="start"
                    mb={{base: "30px", lg: "50px"}}
                >
                    <HowWeWorkCard title="Ideate a list of features based on the Sociocracy model" body="We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s..." badge="5 AUT" dateApply="Apply by May 15"/>
                    <HowWeWorkCard title="Update documentation with FAQs" body="Review our community chat for the most frequently asked questions and document answers for our product docs." badge="10 AUT" dateApply="Apply by May 18"/>
                    <HowWeWorkCard title="Tutorial video series" body="Create a series of video tutorials that cover everything from start to finish on using Open Enterprise." badge="40 AUT" dateApply="Apply by May 20"/>
                </Flex>
                <Center>
                    <Button size={{base: "xl", md: "2xl"}} bg="primary" rounded="8px" asChild>
                        <a href="#">View more</a>
                    </Button>
                </Center>


            </Container>
        </Box>
    )
}