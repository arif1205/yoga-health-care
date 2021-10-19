import styled from "styled-components";

export const Wrapper = styled.div`
	.service-body {
		padding: 100px 0;
		width: clamp(300px, 100%, 650px);

		img {
			width: 100%;
		}

		div.service-img {
			margin-bottom: 50px;
		}

		h1 {
			font-size: 20px;
			font-weight: 600;
			margin-bottom: 30px;
		}

		p {
			font-size: 14px;
			color: #717171;
			line-height: 28px;
		}

		button {
			background: var(--primary-color);
			border: 1px solid var(--primary-color);
			color: #fff;
			transition: all 0.2s;

			&:hover {
				background: transparent;
				color: var(--primary-color);
			}
		}
	}
`;
