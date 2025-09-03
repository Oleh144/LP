import {Link} from "@chakra-ui/react";

const HeaderLink = ({to, children, isActive}) => {

    return (
        <Link
            outline="none"
            px={{base: "16px", md: "0"}}
            href={to}
            transition="color 0.2s ease-in-out"
            color={isActive ? "#71A894" : "#303031"}
            fontWeight={isActive ? "bold" : "normal"}
            _hover={{color: "#71A894", textDecoration: "none", fontWeight: "bold"}}
        >
            {children}
        </Link>
    )
}

export default HeaderLink