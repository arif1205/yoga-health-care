import styled from "styled-components";

export const Wrapper = styled.div`
	.classes-container {
		padding: 100px 0;

		.item {
			position: relative;

			button {
				position: absolute;
				bottom: 0;
				right: 0;
				border-radius: 0 !important;
				background: #333;
				color: #fff;
				border: none !important;
				width: 60px;
				height: 50px;

				&:hover {
					background: var(--primary-color);
				}
			}
		}
	}
`;
