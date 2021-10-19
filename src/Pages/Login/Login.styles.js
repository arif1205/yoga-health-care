import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 78px;
	height: 600px;
	background: #fff;

	form {
		width: clamp(300px, 100%, 400px);
		padding: 20px;

		input {
			border: none !important;
			border-bottom: 1px solid #333 !important;
			border-radius: 0 !important;

			::placeholder {
				color: #ccc !important;
			}

			&:focus {
				border-color: var(--primary-color) !important;
				box-shadow: 0 0 0 0 !important;
				outline: none !important;
			}
		}

		button.login {
			background: var(--primary-color) !important;
			color: #fff;
			border: 1px solid var(--primary-color) !important;

			&:hover {
				background: #fff !important;
				color: var(--primary-color) !important;
			}
		}

		p a {
			color: #000 !important;
		}
	}
`;
