import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 120px 0 80px;

	.instructor-container {
		gap: 20px;

		.item {
			box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 10%),
				0px 10px 30px 0px rgb(0 0 0 / 5%);
			padding: 45px 45px;
			padding-top: 105px;
			position: relative;

			img {
				height: 120px;
				width: 120px;
				border-radius: 50%;
				box-shadow: 0 0 30px rgb(0 0 0 / 10%);
				object-fit: cover;
				display: block;
				position: absolute;
				top: -60px;
				left: 50%;
				transform: translateX(-50%);
			}

			h4 {
				font-size: 16px;
				font-weight: 400;
			}

			p strong {
				font-size: 14px;
				color: var(--primary-color);
				display: inline-block;
				margin-bottom: 20px;
			}

			p.feedback {
				line-height: 30px;
				color: #6c6c6c;
				margin-bottom: 20px;
				font-size: 15px;
			}
		}

		.social {
			a {
				color: #333 !important;

				&:hover {
					color: var(--primary-color) !important;
				}
			}
		}

		@media screen and (max-width: 767px) {
			grid-gap: 80px;
		}
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Col = styled.div`
	@media screen and (max-width: 767px) {
	}
`;
