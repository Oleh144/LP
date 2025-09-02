import {Link} from "@chakra-ui/react";

const HeaderLink = ({to, children}) => {
    return (
        <Link
            outline="none"
            px={{base: "16px", md: "0"}}
            to={to}
            transition="color 0.2s ease-in-out"
            color="#303031"
            // style={({isActive}) => {
            //     return {
            //         color: isActive ? "#71A894" : "",
            //         fontWeight: isActive ? "bold" : "normal",
            //     };
            // }}
            _hover={{color: "#71A894", textDecoration: "none", fontWeight: "bold"}}
        >
            {children}
        </Link>
    )
}

export default HeaderLink