import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useScrollTop from "../Utilities/ScrollTop";
// styles
import { Form, Button, Alert } from "react-bootstrap";
import { Wrapper } from "./Login.styles";

const Login = () => {
	const history = useHistory();
	const location = useLocation();
	const { setEmail, setPassword, login, signInWithGoogle, isLoggedin, error } =
		useAuth();

	const { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		isLoggedin && history.replace(from);
	}, [isLoggedin]);

	const formOnSubmit = (e) => {
		e.preventDefault();
		login();
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
					onClick={login}>
					Login
				</Button>
				<p className='text-center mb-3'>Or,</p>
				<button
					className='google-sign-in btn btn-secondary'
					onClick={signInWithGoogle}>
					Sign in with Google
				</button>
				<hr />
				<p>
					New user? <Link to='/register'>Create a new account</Link>
				</p>
			</Form>
		</Wrapper>
	);
};

export default Login;
