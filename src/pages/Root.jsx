import EarlyAccess from "./EarlyAccess.jsx";
import Header from "../components/header/Header.jsx";
import {Outlet, ScrollRestoration} from "react-router";

const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
			<ScrollRestoration />
		</>
	)
}

export default Root
