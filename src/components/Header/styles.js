import styled from "styled-components";

export const StyledHeader = styled.div`
	.banner {
		width: 100%;
		height: 230px;
		img {
			object-fit: cover;
		}
	}
	.user-info {
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		margin-top: 16px;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	} 
`;