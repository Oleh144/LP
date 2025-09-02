import {
    Box, Container,
    Flex,
    Heading,
    Image as ChakraImage, Text,
} from "@chakra-ui/react";

function FeatureItem({image, icon, title, body, reverse, isLast}) {
    return (
        <>
            <Flex justifyContent="space-between" alignItems="center" flexDirection={{
                base: "column",
                md: reverse ? "row-reverse" : "row"
            }} gap={{base: "30px", md: "20px"}} mb={!isLast && {base: "50px", md: "60px", lg: "145px"}}
            >
                <Box textAlign={{base: "center", md: reverse ? "right" : "left"}} width={{base: "100%", md: '50%'}}>
                    <ChakraImage display="inline-block" src={image}/>
                </Box>
                <Box textAlign={{base: "center", md: "left"}} width={{base: "100%", md: '50%'}}>
                    <ChakraImage display="inline-block" src={icon} mb={{
                        base: "15px",
                        md: "20px",
                        lg: "28px"
                    }}
                    />
                    <Heading
                        size={{base: "3xl", md: "4xl", lg: "5xl"}}
                        mb={{base: 4, lg: 6}}
                    >{title}</Heading>
                    <Text
                        fontSize={{base: "16px", lg: "18px"}}
                        color="gray"
                    >{body}</Text>
                </Box>
            </Flex>
        </>
    )
}

export default FeatureItem;