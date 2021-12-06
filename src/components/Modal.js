import React from 'react'
import styled from 'styled-components';

export default function Modal(
	{ children,
		estado,
		cambiarEstado,
		titulo,
		mostrarHeader,
		mostrarToggle,
		posicionVertical,
		posicionHorizontal,
		paddingOverlay,
		height,
		width,
		exit,
		borderRadius,
		backgroundColor,
		padding }) {

	return (
		<>
				<Overlay style={{display: estado ? 'flex' : 'none', zIndex: 100}} paddingOverlay={paddingOverlay} posicionVertical={posicionVertical} posicionHorizontal={posicionHorizontal}>
					<ContenedorModal padding={padding} height={height} width={width} backgroundColor={backgroundColor} borderRadius={borderRadius}>
						{mostrarHeader &&
							<EncabezadoModal>
								<h1>{titulo}</h1>
							</EncabezadoModal>
						}

						<BotonCerrar onClick={cambiarEstado} exit={exit}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</BotonCerrar>

						{children}
					</ContenedorModal>
					<Toggle mostrarToggle={mostrarToggle} onClick={cambiarEstado} />
				</Overlay>
		</>
	);
}

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: none;

	padding: ${props => props.paddingOverlay ? props.paddingOverlay : '3rem'};
	display: flex;
	align-items: ${props => props.posicionVertical ? props.posicionVertical : 'center'};
	justify-content: ${props => props.posicionHorizontal ? props.posicionHorizontal : 'center'};
`;

const Toggle = styled.div`
	background-color: ${props => props.mostrarToggle ? 'rgba(0, 0, 0, .4)' : 'rgba(0, 0, 0, .0)'};
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
`;

const ContenedorModal = styled.div`
	width: ${props => props.width ? props.width : '50rem'};
	min-width: 30rem;
	height: ${props=> props.height ? props.height : 'none'};
	min-height: 10rem;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
	position: relative;
	border-radius: ${props=> props.borderRadius ? props.borderRadius : '.5rem'};
	padding: ${props => props.padding ? props.padding : '2rem'};
	z-index: 7;
`;

const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid #E8E8E8;

	h1{
		font-size: 2.4rem;
		color: #000;
	}
`;

const BotonCerrar = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;

	border: none;
	border-radius: .5rem;
	width: 4rem;
	height: 4rem;
	background: none;
	cursor: pointer;
	padding: 0;
	transition: .3s ease all;
	color: ${props=> props.exit ? props.exit : '#fff'};
	z-index: 8;

	&:hover {
		background-color: rgba(0,0,0, .05);
	}

	svg{
		width: 100%;
		height: 100%;
	}
`;