import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;

	h1 {
		font-size: 32px;
		margin-bottom: 20px;
	}
	p {
		font-size: 14px;
		color: #717171;
	}

	span {
		cursor: pointer;
		font-style: italic;
		color: #333;
		font-size: 14px;
		transition: all 0.2s;

		&:hover {
			color: var(--primary-color);
		}
	}
`;
