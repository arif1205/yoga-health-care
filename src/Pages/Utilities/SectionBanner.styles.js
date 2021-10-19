import styled from "styled-components";

export const Wrapper = styled.header`
	background: url(${(props) => props.bg});
	background-size: cover;
	height: 300px;
	margin-top: 78px;
	display: flex;
	justify-content: center;
	align-items: center;

	div.banner-content {
		text-align: center;

		h1 {
			font-size: 28px;
		}

		a {
			text-decoration: none;
			color: #717171;
			transition: all 0.2s;

			&:hover {
				color: var(--primary-color);
			}
		}
	}
`;
