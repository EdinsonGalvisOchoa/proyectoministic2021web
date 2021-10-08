import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';





function Karousel() {
	const width = "600";
	const height = "500";
return (
	<div clase="container">
	<div style={{ display: 'block', width: "100%", padding: 0 }}>
	<h4>Nuestros Productos</h4>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img width={width} height={height}
			className="d-block w-100"
src="https://cdn.pixabay.com/photo/2017/04/27/07/26/rock-climbing-2264698_960_720.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>RAPEL</h3>
			<p>Deslizate por una pared de una montaña</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img width={width} height={height}
			className="d-block w-100"
src="https://cdn.pixabay.com/photo/2016/03/09/22/50/ice-climbers-1247610__340.jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>ALPINISMO</h3>
			<p>Tu objetivo: Llegar a la cima de la montaña</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img width={width} height={height}
			className="d-block w-100"
src="https://cdn.pixabay.com/photo/2019/09/16/07/48/parkour-4480156__340.jpg"
			alt="Image Three"
		/>
		<Carousel.Caption>
			<h3>PARKOUR</h3>
			<p>Pon tu capacidad motriz a prueba</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div></div>

);
}
export default Karousel;
