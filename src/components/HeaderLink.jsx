import {Link} from "@chakra-ui/react";
import {NavLink} from "react-router";

const HeaderLink = ({to, children}) => {
  return (
    <Link
      as={NavLink}
      outline="none"
      px={{base: 4, md: 0}}
      to={to}
      transition="color 0.2s ease-in-out"
      color="#303031"
      style={({isActive}) => {
        return {
          color: isActive ? "#71A894" : "",
        };
      }}
      _hover={{color: "#71A894"}}
    >
      {children}
    </Link>
  )
}

export default HeaderLink