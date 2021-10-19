import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;

	.teacher-img {
		position: relative;
		overflow: hidden;

		.overlay {
			position: absolute;
			top: -100%;
			left: 0%;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.7);
			opacity: 0;
			transition: all 0.3s;

			.overlay-content {
				position: absolute;
				left: 50%;
				top: 50%;
				width: 90%;
				transform: translate(-50%, -50%);
				text-align: center;

				a {
					color: var(--primary-color);
					text-decoration: none;
					display: block;
					font-size: 20px;
					font-weight: 500;
				}

				span {
					font-style: italic;
					color: #fff;
					font-size: 14px;
				}
			}
		}

		&:hover .overlay {
			opacity: 1;
			top: 0;
		}
	}
`;
