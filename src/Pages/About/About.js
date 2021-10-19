import React from "react";
import SectionBanner from "../Utilities/SectionBanner";
import bg from "../../Images/yoga1.jpg";
import whyUs from "../../Images/yoga2.jpg";
import { Wrapper } from "./About.styles";
import { Col, Row } from "react-bootstrap";

const About = () => {
	return (
		<>
			<SectionBanner text='About Us' bg={bg} />
			<Wrapper>
				<div className='container'>
					<Row className='pb-5 mb-5'>
						<Col md={6} className='align-self-center'>
							<div className='why-us'>
								<h1>Why Yoga Needs Us?</h1>
								<p>
									It brings together physical and mental disciplines to achieve
									a peaceful body and mind; it helps manage stress and anxiety
									and keeps you relaxing. It also helps in increasing
									flexibility, muscle strength and body tone. It improves
									respiration, energy and vitality. ... Yoga asanas build
									strength, flexibility and confidence.
								</p>
							</div>
						</Col>
						<Col md={6} className='align-self-center'>
							<img src={whyUs} alt='Why yoga' className='img-fluid' />
						</Col>
					</Row>
					<Row className='flex-row-reverse'>
						<Col md={6} className='align-self-center'>
							<div className='we-offer'>
								<h1>What we offer?</h1>
								<p>
									Yoga can make you stronger and more flexible. It's a great way
									to stay limber and energetic. You'll also feel more focused
									and alert. And yoga can help you feel great and function
									better in your daily life. Yoga can also help improve these
									conditions:
									<ul>
										<li>Poor blood circulation</li>
										<li>High blood pressure</li>
										<li>Arthritis</li>
										<li>Osteoporosis</li>
										<li>Limited mobility</li>
										<li>Lower back pain</li>
									</ul>
								</p>
							</div>
						</Col>
						<Col md={6} className='align-self-center'>
							<img
								src='https://i.ibb.co/QjYLKYH/yoga1.jpg'
								alt='Why yoga'
								className='img-fluid'
							/>
						</Col>
					</Row>
				</div>
			</Wrapper>
		</>
	);
};

export default About;
