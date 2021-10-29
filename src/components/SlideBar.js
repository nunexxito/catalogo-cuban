import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Izquierda } from '../img/left.svg';
import { ReactComponent as Derecha } from '../img/right.svg';
import uno from "../img/uno_horizontal.jpeg";
import dos from "../img/dos_horizontal.jpeg";
import tres from "../img/tres_horizontal.jpeg";

export default function SlideBar() {
	const slideShow = useRef(null);
	const intervaloSlide = useRef(null);

	const siguiente = () => {
		// console.log(slideShow.current);
		//Comprobamos que hayan elementos para evitar errores
		if (slideShow.current.children.length > 0) {
			//obtenemos el primer elemnto
			const primerElemento = slideShow.current.children[0];

			//establecemos la transicion del slideShow
			slideShow.current.style.transition = `500ms ease-out all`;

			//calculamos el ancho de nuestro slideShow
			const tamañoSlide = slideShow.current.children[0].offsetWidth;

			//movemos el slideShow
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				//reiniciamos la posicion del slideShow
				slideShow.current.style.transition = `none`;
				slideShow.current.style.transform = `translateX(0)`;

				//tomamos el primer elemnto y lo mandamos al final
				slideShow.current.appendChild(primerElemento);

				slideShow.current.removeEventListener('transitionend', transicion)
			}

			//eventlistener para cuando termine la transicion
			slideShow.current.addEventListener('transitionend', transicion);
		}
	}

	const anterior = () => {
		// console.log(slideShow.current);
		if (slideShow.current.children.length > 0) {

			//obtenemos el ultimo elemento del slideShow
			const index = slideShow.current.children.length - 1;
			const ultimoElemento = slideShow.current.children[index];

			slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);

			slideShow.current.style.transition = `none`;

			const tamañoSlide = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideShow.current.style.transition = `500ms ease-out all`;
				slideShow.current.style.transform = `translateX(0)`;
			}, 30);

		}
	}

	useEffect(() => {
		intervaloSlide.current = setInterval(() => {
			siguiente();
		}, 5000);

		//eliminamos el intervalo
		slideShow.current.addEventListener('mouseenter', () => {
			clearInterval(intervaloSlide.current);
		});

		//volvemos a reanudar despues de sacar el cursor del slideShow
		slideShow.current.addEventListener('mouseleave', () => {
			intervaloSlide.current = setInterval(() => {
				siguiente();
			}, 5000);
		});
	}, [])

	return (
		<ContenedorPrincipal>
			<SlideShow ref={slideShow} >
				<Slide>
					<img src={uno} alt="Producto" />
				</Slide>
				<Slide>
					<img src={dos} alt="Producto" />
				</Slide>
				<Slide>
					<img src={tres} alt="Producto" />
				</Slide>
			</SlideShow>
			<Controles className="controles">
				<Boton onClick={anterior}>
					<Izquierda className="izquierdo" />
				</Boton>
				<Boton derecho onClick={siguiente}>
					<Derecha className="derecho" />
				</Boton>
			</Controles>
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	overflow: hidden;
	position: relative;

	.controles {
		opacity: 0;

		&:hover {
			opacity: 1;
		}
	}
`;

const SlideShow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	height: 100px;

	@media screen and (min-width: 800px) {
		height: 200px;
	}

	&:hover + .controles {
		opacity: 1;
	}
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	vertical-align: top;
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
	display: flex;
	justify-content: space-between;
`;

const Boton = styled.div`
	pointer-events: all;
	cursor: pointer;
	background: none;
	border: none;
	height: 100%;
	width: 2rem;
	outline: none;
	/* position: absolute; */
	transition: .3s ease all;
	display: flex;
	align-items: center;

	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	.derecho:hover {
		height: 100%;
		background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.25));
	}
	.izquierdo:hover {
		height: 100%;
		background: linear-gradient(to right, rgba(0,0,0,.25), rgba(0,0,0,0));
	}

	@media(min-width: 800px) {
		width: 3rem;
	}
`;