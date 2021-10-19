import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Wrapper } from "../Login/Login.styles";
import useScrollTop from "../Utilities/ScrollTop";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
	const history = useHistory();
	const location = useLocation();
	const {
		setName,
		setEmail,
		setPassword,
		register,
		signInWithGoogle,
		isLoggedin,
	} = useAuth();

	const { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		isLoggedin && history.replace(from);
	}, [isLoggedin]);

	const formOnSubmit = (e) => {
		e.preventDefault();
		register();
	};

	useScrollTop();

	return (
		<Wrapper className='d-flex justify-content-center align-items-center'>
			<Form onSubmit={formOnSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Name: </Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter name'
						required
						onBlur={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Emai: </Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						required
						onBlur={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						required
						onBlur={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button
					variant='primary'
					type='submit'
					className='mb-3 login'
					onClick={register}>
					Register
				</Button>
				<p className='text-center mb-3'>Or,</p>
				<button
					className='google-sign-in btn btn-secondary'
					onClick={signInWithGoogle}>
					Sign up with Google
				</button>
				<hr />
				<p>
					Already have an account? <Link to='/login'>Log in</Link>
				</p>
			</Form>
		</Wrapper>
	);
};

export default Register;
