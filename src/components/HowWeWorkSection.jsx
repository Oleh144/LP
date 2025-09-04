import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import ReactCard from "./HowWeWorkCard.jsx";
import workIcon01 from "../assets/work-icon-01.svg";
import workIcon02 from "../assets/work-icon-02.svg";
import workIcon03 from "../assets/work-icon-03.svg";

export default function HowWeWorkSection() {
    return (
        <Box
            as="section"
            id="how-we-work-section"
            py={{base: "sectionSpace", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
        >
            <Container
                maxW="container"
            >
                <Heading
                    textAlign={{base: "center"}}
                    size={{base: "3xl", md: "4xl", lg: "5xl"}}
                    mb={{base: 4, lg: 6}}
                >Reimagining what it means to work</Heading>
                <Text
                    fontSize={{base: "16px", lg: "18px"}}
                    color="gray"
                    textAlign={"center"}
                    mb={{base: 4, lg: 12}}
                >Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.</Text>
                <Flex
                    direction={{base: "column", md: "row"}}
                    gap={{base: 4, lg: 6}}
                >
                    <ReactCard icon={workIcon01} title="Modern workforce" body="Multistakeholder governance aligns employees with the organization’s wider community." />
                    <ReactCard icon={workIcon02} title="Meritocratic by design" body="Tokenized ownership aligns deeply committed individuals with the organization’s success." />
                    <ReactCard icon={workIcon03} title="Engineered for resilience" body="Open Enterprise supports best practices in sociocratic management." />
                </Flex>
            </Container>
        </Box>
    )
}