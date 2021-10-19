import React, { useEffect, useState } from "react";
import { Wrapper } from "./Services.styles";
import { Grid, Col } from "../Home/Classes/Classes.styles";
import SectionBanner from "../Utilities/SectionBanner";
import bg from "../../Images/about-banner.jpg";
import { Link } from "react-router-dom";
import useScroll from "../Utilities/ScrollTop";

const Services = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const result = await (await fetch("./services.json")).json();
			setData(result);
		};
		loadData();
	}, []);

	useScroll();

	return (
		<Wrapper>
			<SectionBanner bg={bg} text='Classes' />
			<div className='container'>
				<div className='classes-container'>
					<Grid>
						{data.map((service) => (
							<Col key={service.id} className='item'>
								<div className='service-img'>
									<img src={service.img} alt='yoga' />
								</div>
								<div className='content'>
									<h4>{service.name}</h4>
									<p>{service.des}</p>
									<Link to={`/service/${service.id}`}>
										<button className='btn'>
											<i className='fas fa-chevron-right'></i>
										</button>
									</Link>
								</div>
							</Col>
						))}
					</Grid>
				</div>
			</div>
		</Wrapper>
	);
};

export default Services;
