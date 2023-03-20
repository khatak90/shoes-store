import React from 'react'
import  Shoes from './../Shoes.json'
import { Link } from 'react-router-dom';

function Product() {

 

  return (
    <div>
      <h1>My Product page!</h1>
      
    <div className='container'>
         {Object.keys(Shoes).map(KeyName=>{
           return(
            <Link key={KeyName} className='link' to={`/Productlist/${KeyName}`}>
            
              <h2>{Shoes[KeyName].name}</h2>
              <img src={Shoes[KeyName].img} height={150}/>
              </Link>
           )
         })}
    </div>
  
    </div>
  )
     
}

export default Product