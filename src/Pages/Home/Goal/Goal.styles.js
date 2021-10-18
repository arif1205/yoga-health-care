import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 80px 0;

	.progressbar {
		gap: 20px;
	}
`;

export const ProgressBar = styled.div`
	padding: 20px;
	border-radius: 30px;
	background: var(--primary-color);
	color: #fff;
	width: ${(props) => props.wd};
`;
