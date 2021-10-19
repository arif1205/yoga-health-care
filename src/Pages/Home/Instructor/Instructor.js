import React from "react";
import { Grid, Wrapper, Col } from "./Instructor.styles";
import instructor1 from "../../../Images/instructor1.jpg";
import instructor2 from "../../../Images/instructor2.jpg";
import instructor3 from "../../../Images/instructor3.jpg";

const instructors = [
	{
		name: "Amatta Sutra",
		role: "Yoga Trainer",
		feedback:
			"I became a yoga instructor, because thanks to her people feel happier, lighter, more airy. Try it and you will never forget it.",
		profile: instructor1,
	},
	{
		name: "Tom Ford",
		role: "Yoga Trainer",
		feedback:
			"My main task is to help those who are engaged to look inside themselves, to learn to understand and listen to their body.",
		profile: instructor2,
	},
	{
		name: "Linda Navi",
		role: "Nutritionist",
		feedback:
			"I am a practicing expert in the field of dietetics with many years of experience in the field of therapeutic dietetics.",
		profile: instructor3,
	},
];

const Instructor = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Grid className='instructor-container'>
					{instructors.map((instructor, i) => (
						<Col className=' item' key={i}>
							<div className='content text-center'>
								<div className='profile'>
									<img src={instructor.profile} alt='Profile' />
								</div>
								<h4>{instructor.name}</h4>
								<p>
									<strong>{instructor.role}</strong>
								</p>
								<p className='feedback'>{instructor.feedback}</p>
								<div className='social'>
									<ul className='list-unstyled list-inline'>
										<li className='list-inline-item me-4'>
											<a href='#'>
												<i className='fab fa-facebook-f'></i>
											</a>
										</li>
										<li className='list-inline-item me-4'>
											<a href='#'>
												<i className='fab fa-twitter'></i>
											</a>
										</li>
										<li className='list-inline-item'>
											<a href='#'>
												<i className='fab fa-instagram'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					))}
				</Grid>
			</div>
		</Wrapper>
	);
};

export default Instructor;
