import React, { useEffect, useState } from "react";
import SectionBanner from "../Utilities/SectionBanner";
import useScroll from "../Utilities/ScrollTop";
// styles and classs
import { Grid, Col } from "../Home/Instructor/Instructor.styles";
import { Wrapper } from "./Teacher.styles";
import bg from "../../Images/about-banner.jpg";

const Teacher = () => {
	const [data, setData] = useState([]);

	// load fake data
	useEffect(() => {
		const loadData = async () => {
			const result = await (await fetch("./teachers.json")).json();
			setData(result);
		};
		loadData();
	}, []);

	useScroll();

	return (
		<>
			<SectionBanner text='Teacher' bg={bg} />
			<Wrapper>
				<div className='container'>
					<Grid>
						{data.map((teacher, i) => (
							<Col key={i}>
								<div className='teacher-img'>
									<img src={teacher.img} alt='teacher' class='img-fluid' />
									<div className='overlay'>
										<div className='overlay-content'>
											<a href='#'>{teacher.name}</a>
											<span>{teacher.role}</span>
										</div>
									</div>
								</div>
							</Col>
						))}
					</Grid>
				</div>
			</Wrapper>
		</>
	);
};

export default Teacher;
