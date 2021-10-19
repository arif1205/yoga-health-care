import React from "react";
import Banner from "./Banner/Banner";
import Instructor from "./Instructor/Instructor";
import Goal from "./Goal/Goal";
import Classes from "./Classes/Classes";
import useScroll from "../Utilities/ScrollTop";

const Home = () => {
	// use scroll to scroll top when page rendered
	useScroll();

	return (
		<>
			<Banner />
			<Instructor />
			<Goal />
			<Classes />
		</>
	);
};

export default Home;
