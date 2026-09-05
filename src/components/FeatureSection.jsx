import { Box, Container } from "@chakra-ui/react";
import FeatureItem from "./FeatureItem.jsx";
import featureImg01 from "../assets/feature-img-01.jpg";
import featureImg02 from "../assets/feature-img-02.jpg";
import featureImg03 from "../assets/feature-img-03.png";
import featureIcon01 from "../assets/feature-icon-01.svg";
import featureIcon02 from "../assets/feature-icon-02.svg";
import featureIcon03 from "../assets/feature-icon-03.svg";

function FeatureSection() {
	const features = [
		{
			image: featureImg01,
			altImage: "Feature Image 01",
			icon: featureIcon01,
			title: "Kickstart an organization with your co-founders",
			body: "It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.",
		},
		{
			image: featureImg02,
			altImage: "Feature Image 02",
			icon: featureIcon02,
			title: "Onboard users, investors and advisors as you grow",
			body: "You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.",
		},
		{
			image: featureImg03,
			altImage: "Feature Image 03",
			icon: featureIcon03,
			title: "Engage highly committed contributors",
			body: "You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.",
		},
	];

	return (
		<Box
			as='section'
			id='feature-section'
			py={{
				base: "sectionSpace",
				md: "sectionSpaceMd",
				lg: "sectionSpaceLg",
			}}>
			<Container maxW='container'>
				{features.map((item, index) => (
					<FeatureItem
						key={item.title}
						{...item}
						reverse={index % 2 === 0}
						isLast={index === features.length - 1}
					/>
				))}
			</Container>
		</Box>
	);
}

export default FeatureSection;
