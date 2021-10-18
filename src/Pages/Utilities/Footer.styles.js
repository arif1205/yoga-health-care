import styled from "styled-components";

export const Wrapper = styled.footer`
	background: #000;

	.top-footer {
		padding: 100px 0 25px;
	}

	ul {
		gap: 30px;

		a {
			color: #fff !important;
			text-decoration: none;
			transition: all 0.2s;

			&:hover {
				color: var(--primary-color) !important;
			}
		}

		i {
			font-size: 18px;
		}
	}

	.bottom-footer {
		padding: 25px 0;

		p {
			font-size: 15px;
			color: #5e5e5e;
			text-align: center;
		}
	}
`;
