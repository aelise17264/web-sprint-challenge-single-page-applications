import React from 'react'

const Confirmation =({pi}) => {

    return(
    <div className='confirmation' key={pi.id}>
    <div className='order-container'>
    <h2>Name: {pi.name}</h2>
    <p>Pizza Size: {pi.size}</p>
{
    !!pi.toppings && !! pi.toppings.length &&
<div>
Toppings:
<ul>
    {pi.toppings.map((yes, index)=>
    <li key={index}>{yes}</li>
     )}
</ul>
    </div>

}

     
<p>Special Instructions: {pi.special}</p>
    
  
  </div>

  </div>
)
}

export default Confirmation