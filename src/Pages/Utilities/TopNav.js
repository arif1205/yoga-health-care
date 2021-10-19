import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Wrapper } from "./TopNav.styles";
import { ReactComponent as Logo } from "../../Images/byog.svg";
import profile from "../../Images/profile.png";

const TopNav = () => {
	const { isLoggedin, logout, user } = useAuth();

	return (
		<Navbar as={Wrapper} expand='lg' fixed='top'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='logo'>
					<Logo className='main-logo' />
				</Navbar.Brand>
				<Navbar.Toggle className='toggle-nav-btn' />
				<Navbar.Collapse className='nav-links'>
					<Nav>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/about'>
							About Us
						</Nav.Link>
						<Nav.Link as={Link} to='/services'>
							Services
						</Nav.Link>
						<Nav.Link as={Link} to='/teacher'>
							Teacher
						</Nav.Link>

						<Navbar.Text className='alter-profile d-block d-lg-none'>
							{isLoggedin ? (
								<>
									<img src={profile} alt='profile' />
									Signed in as: <span>{user?.name}</span>
									<button
										className='logout btn btn-secondary ms-2'
										onClick={logout}>
										Log out
									</button>
								</>
							) : (
								<Link to='/login'>
									<button className='btn btn-outline-primary login'>
										Log in
									</button>
								</Link>
							)}
						</Navbar.Text>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Text className='profile d-none d-lg-block'>
					{isLoggedin ? (
						<>
							<img src={profile} alt='profile' />
							Signed in as: <span>{user?.name}</span>
							<button
								className='logout btn btn-secondary ms-2'
								onClick={logout}>
								Log out
							</button>
						</>
					) : (
						<Link to='/login'>
							<button className='btn btn-outline-primary login'>Log in</button>
						</Link>
					)}
				</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default TopNav;
