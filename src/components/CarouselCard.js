import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function CarouselCard({recipe}) {
    
    return (
        <div>
           <Carousel>
               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   src={recipe.image}
                   alt = {recipe.name}/>
                   <Carousel.Caption>
                       <h3>{recipe.name}</h3>
                       <p>{recipe.description}</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
    )
}


export default CarouselCard
