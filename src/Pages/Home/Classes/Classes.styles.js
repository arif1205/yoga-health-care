import styled from "styled-components";

export const Wrapper = styled.footer`
	padding: 80px 0;

	.classes-header {
		padding-bottom: 40px;

		h1 {
			font-size: 32px !important;
		}
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 575px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Col = styled.div`
	box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 10%),
		0px 10px 30px 0px rgb(0 0 0 / 5%);

	img {
		width: 100%;
		height: 280px;
		object-fit: cover;
	}

	.content {
		padding: 40px;

		h4 {
			font-size: 16px;
			font-weight: 400;
			line-height: 30px;
			margin-bottom: 16px;
			color: #333;
		}
		p {
			color: #797979;
			font-size: 14px;
			line-height: 28px;
		}

		button {
			color: var(--primary-color);
			border: 1px solid var(--primary-color);
			background: transparent;
			transition: all 0.2s;

			&:hover {
				color: #fff;
				background: var(--primary-color);
			}
		}
	}
`;
