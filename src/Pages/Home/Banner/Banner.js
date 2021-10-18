import React from "react";
import { Wrapper } from "./Banner.styles";
import banner from "../../../Images/banner.jpg";

const Banner = () => {
	return (
		<Wrapper bg={banner}>
			<div className='container'>
				<div className='header-text'>
					<p className='display-3'>
						A fit body, a calm mind, a house full of love.
					</p>
					<button className='read-more btn'>Read More</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default Banner;
