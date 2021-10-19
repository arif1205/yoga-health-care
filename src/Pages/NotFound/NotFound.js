import React from "react";
import SectionBanner from "../Utilities/SectionBanner";
import bg from "../../Images/about-banner.jpg";
import { Wrapper } from "./NotFound.styles";
import { useHistory } from "react-router";

const NotFound = () => {
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};

	return (
		<>
			<SectionBanner text='404' bg={bg} />
			<Wrapper>
				<div className='container text-center'>
					<h1 className='display-3'>Page not found</h1>
					<p>The page you are looking for seems to be missing.</p>
					<span onClick={() => goBack()}>Return to previous page</span>
				</div>
			</Wrapper>
		</>
	);
};

export default NotFound;
