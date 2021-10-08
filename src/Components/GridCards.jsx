import React from 'react';
import Card from "react-bootstrap/Card";
import Button from '@restart/ui/esm/Button';
import {Link} from "react-router-dom"



const GridCards = () => {
    const cardInfo = [
        {image:"https://media.istockphoto.com/photos/paragliding-flight-in-the-mountains-le-grandbornand-france-picture-id1344211961?k=20&m=1344211961&s=612x612&w=0&h=4EobFMrrszxBdXNf0OAs6x8OCvJA_R6O3rH1w5Aub1A=", title: "Paracaidismo", text: "Es la técnica de lanzamiento de seres humanos desde cierta altura y se usa un paracaídas que amortigua el aterrizaje."},
        {image:"https://cdn.pixabay.com/photo/2016/11/12/21/58/disintegration-1819860__340.jpg", title: "Parkour", text: "El objetivo es moverse de un punto a otro realizando acrobacias y saltos en los edificios."},
        {image:"https://media.istockphoto.com/photos/man-trekking-alone-in-broad-daylight-in-alpinismo-picture-id454090751?b=1&k=20&m=454090751&s=170667a&w=0&h=gDK6tZwRfS_c0evBgzQdiDhUGxFLS6Luudp5tH1LJxg=", title: "Alpinismo", text: "También conocido como montañismo. El objetivo es llegar a la cima de una montaña escalándola."},
        {image:"https://media.istockphoto.com/photos/man-trekking-alone-in-broad-daylight-in-alpinismo-picture-id454090751?b=1&k=20&m=454090751&s=170667a&w=0&h=gDK6tZwRfS_c0evBgzQdiDhUGxFLS6Luudp5tH1LJxg=", title: "Alpinismo", text: "También conocido como montañismo. El objetivo es llegar a la cima de una montaña escalándola."},
];
 const renderCard = (card, index) => {
    return (
     <div className="p-3">
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button variant="primary"><Link to="/Ventas">Vivir la Experiencia</Link></Button>
        </Card.Body>
      </Card></div>
    );
  };
  return <div className="grid">{cardInfo.map(renderCard)}</div>;



};
export default GridCards;