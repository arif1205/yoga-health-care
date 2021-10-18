import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Footer.styles";

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<div className='d-flex justify-content-between top-footer'>
					<div className='left-links'>
						<ul className='list-unstyled d-flex flex-wrap'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/booking'>Booking</Link>
							</li>
							<li>
								<Link to='/teacher'>Teachers</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
					<div className='right-links'>
						<ul className='list-unstyled d-flex flex-wrap'>
							<li>
								<Link to='/'>
									<i className='fab fa-twitter'></i>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<i className='fab fa-instagram'></i>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<i className='fab fa-linkedin'></i>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<i className='fab fa-viber'></i>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<i className='fab fa-google-plus'></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='bottom-footer'>
					<p>
						&copy; 2021 PixTheme. Trademarks and brands are the property of
						their respective owners.
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
