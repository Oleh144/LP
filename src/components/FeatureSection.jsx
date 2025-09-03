import {Box, Container} from "@chakra-ui/react";
import FeatureItem from "./FeatureItem.jsx";

function FeatureSection() {
    const features = [
        {
            image: "feature-img-01.jpg",
            icon: "feature-icon-01.svg",
            title: "Kickstart an organization with your co-founders",
            body: "It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey."
        },
        {
            image: "feature-img-02.jpg",
            icon: "feature-icon-02.svg",
            title: "Onboard users, investors and advisors as you grow",
            body: "You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success."
        },
        {
            image: "feature-img-03.png",
            icon: "feature-icon-03.svg",
            title: "Engage highly committed contributors",
            body: "You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares."
        },

    ]

    return (
        <Box
            as="section"
            id="feature-section"
            py={{base: "sectionSpace", md: "sectionSpaceMd", lg: "sectionSpaceLg"}}
        >
            <Container
                maxW="container"
            >
                {features.map((item, index) => (
                    <FeatureItem key={item.title} {...item} reverse={index % 2 === 0} isLast={index === features.length - 1} />
                ))}
            </Container>
        </Box>
    )
}

export default FeatureSection;