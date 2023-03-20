import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';


function ProductList() {

    let{id} = useParams();

    const shoe = Shoes[id];

    if(!shoe){
        
        return (
            <h1>Product is not Found !</h1>
        )
    }

    console.log(shoe);

   
  return (
    <div> <h1>Product Item</h1>
      
      <div>
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={150} />
      </div>
    </div>
  )
}

export default ProductList