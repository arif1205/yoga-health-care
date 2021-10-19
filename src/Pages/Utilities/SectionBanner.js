import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./SectionBanner.styles";

const SectionBanner = ({ bg, text }) => {
	return (
		<Wrapper bg={bg}>
			<div className='banner-content'>
				<h1>{text}</h1>
				<Link to='/'>Home</Link>
			</div>
		</Wrapper>
	);
};

export default SectionBanner;
