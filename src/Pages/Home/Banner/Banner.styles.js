import styled from "styled-components";

export const Wrapper = styled.header`
	min-height: 100vh;
	width: 100%;
	background: url(${(props) => props.bg});
	background-size: cover;
	position: relative;

	.header-text {
		position: absolute;
		bottom: 150px;
		left: 100px;
		width: clamp(200px, 50%, 500px);

		p {
			font-size: 45px !important;
		}

		button {
			color: #fff;
			background: var(--primary-color);
			border: 2px solid transparent;
			padding: 12px;
			width: 200px;
			transition: all 0.2s;

			&:hover {
				color: var(--primary-color);
				background: #fff;
				border-color: var(--primary-color);
			}
		}
	}
`;
