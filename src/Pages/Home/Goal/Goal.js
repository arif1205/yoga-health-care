import React from "react";
// styles and images
import { Col, Row } from "react-bootstrap";
import { Wrapper, ProgressBar } from "./Goal.styles";
import sideImg from "../../../Images/about.jpg";

const Goal = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Row className='align-items-center'>
					<Col md={6} className='mb-5 mb-md-0'>
						<div className='img'>
							<img src={sideImg} alt='yoga' className='img-fluid' />
						</div>
					</Col>
					<Col
						md={6}
						className='align-self-center d-flex flex-column progressbar'>
						<ProgressBar wd='90%'>
							<div className='d-flex justify-content-between'>
								<span>Developed Flexibility</span>
								<span>90%</span>
							</div>
						</ProgressBar>
						<ProgressBar wd='70%'>
							<div className='d-flex justify-content-between'>
								<span>Strengthened Muscles</span>
								<span>70%</span>
							</div>
						</ProgressBar>
						<ProgressBar wd='80%'>
							<div className='d-flex justify-content-between'>
								<span>Calmed Nerves</span>
								<span>80%</span>
							</div>
						</ProgressBar>
						<ProgressBar wd='50%'>
							<div className='d-flex justify-content-between'>
								<span>Became Slim</span>
								<span>50%</span>
							</div>
						</ProgressBar>
					</Col>
				</Row>
			</div>
		</Wrapper>
	);
};

export default Goal;
