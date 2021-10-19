import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Grid, Col } from "./Classes.styles";

const Classes = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const result = await (await fetch("./services.json")).json();
			setData(result.slice(0, 6));
		};
		loadData();
	}, []);

	return (
		<Wrapper>
			<div className='container'>
				<div className='classes-header d-flex justify-content-between'>
					<h1 className='display-3'>Our Classes</h1>
					<Link to='/services' className='align-self-center'>
						See all
					</Link>
				</div>
				<div className='classes-container'>
					<Grid>
						{data.map((service) => (
							<Col key={service.id}>
								<div className='service-img'>
									<img src={service.img} alt='yoga' />
								</div>
								<div className='content'>
									<h4>{service.name}</h4>
									<p>{service.des}</p>
									<Link to={`/service/${service.id}`}>
										<button className='btn'>See Details</button>
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

export default Classes;
