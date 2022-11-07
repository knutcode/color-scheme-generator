import styled from 'styled-components';

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	z-index: 1;
	height: 90px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 1rem;
`;

export const ColorInput = styled.input`
	height: 42px;
	width: 11.5%;
	border-radius: 6px;
	background: #fff;
	border: 2px solid #d1d5db;
	cursor: pointer;
`;

export const SchemeSelect = styled.select`
	height: 42px;
	width: 60%;
	border-radius: 6px;
	background: #fff;
	border: 2px solid #d1d5db;
	padding: 0 10px;
	cursor: pointer;
`;

export const Button = styled.button`
	color: inherit;
	font: inherit;
	font-size: 12px;
	height: 42px;
	width: 20%;
	border-radius: 6px;
	background: #fff;
	border: 2px solid #d1d5db;
	cursor: pointer;
	&:hover {
		background: #ededed;
	}

	@media (max-width: 450px) {
		width: 25%;
	}
`;

export const SchemeContainer = styled.div`
	display: flex;
	flex: 1;
`;

export const HexContainer = styled.div`
	cursor: pointer;
	flex: 1;
	display: flex;
	flex-direction: column;

	&:hover {
		background: #f0f0f0;
		filter: brightness(0.9);
	}
`;

export const Color = styled.div`
	box-shadow: inset -5px 0 10px 2px rgba(0, 0, 0, 0.119);
	flex: 1;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HexWrapper = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	height: 62px;
`;

export const Hex = styled.p`
	@media (max-width: 450px) {
		font-size: 12px;
	}
`;

export const HexCopied = styled.p`
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	text-align: center;
	padding: 10px;
	background-color: white;
	border-radius: 10px;
	opacity: 0;
	transition: 0.15s;
	&.active {
		opacity: 1;
	}
`;
