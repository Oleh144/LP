import Banner from "../components/Banner.jsx";
import HowWeWorkSection from "../components/HowWeWorkSection.jsx";
import FeatureSection from "../components/FeatureSection.jsx";
import HelpUsSection from "../components/HelpUsSection.jsx";
import StartOpenEnterpriseSection from "../components/StartOpenEnterpriseSection.jsx";
import Footer from "../components/Footer.jsx";
import {Box} from "@chakra-ui/react";
import {useRef} from "react";
import Header from "../components/Header.jsx";

const EarlyAccess = () => {
    const targetRef = useRef(null);
    return (
        <>
            <Header/>
            <main id="main">
                <Banner targetRef={targetRef}/>
                <Box ref={targetRef}></Box>
                <HowWeWorkSection/>
                <FeatureSection/>
                <HelpUsSection/>
                <StartOpenEnterpriseSection/>
            </main>
            <Footer/>
        </>
    )
}

export default EarlyAccess