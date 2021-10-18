import styled from "styled-components";

export const Wrapper = styled.div`
	border-bottom: 3px solid var(--primary-color);
	background: #fff !important;

	.main-logo {
		height: 50px;
		width: 200px;
	}

	.nav-links a {
		color: #000 !important;
		font-weight: 500;

		&:hover {
			color: var(--primary-color) !important;
		}
	}

	.profile img,
	.alter-profile img {
		height: 30px;
		width: 30px;
		margin-right: 5px;
	}

	.login {
		border-color: var(--primary-color) !important;
		color: var(--primary-color) !important;

		&:hover {
			background: var(--primary-color) !important;
			color: #fff !important;
		}
	}

	.toggle-nav-btn {
		border: none !important;

		&:focus,
		&:hover {
			outline: 0;
			box-shadow: 0 0 0 0;
			opacity: 0.8;
		}
	}
`;
