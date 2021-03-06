import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
// styles
import { Wrapper } from "../Login/Login.styles";
// component
import useScrollTop from "../Utilities/ScrollTop";

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
		error,
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
				{error && (
					<Alert variant='danger'>
						<p>You got an error! Be careful.</p>
					</Alert>
				)}
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
