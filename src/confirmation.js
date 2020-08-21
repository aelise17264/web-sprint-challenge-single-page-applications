import React from 'react'

const Confirmation =(props) => {
    
    const {pi} = props
    
    return(
        <>
         
    <div className='confirmation' key={pi.id}>
    <div className='order-container'>
    <h2>Name: {pi.name}</h2>
    <p>Pizza Size: {pi.size}</p>
    <p>Special Instructions: {pi.special}</p>
    <p>Toppings:
{
    !!pi.toppings && !! pi.toppings.length &&
    
    <ul>
    {pi.toppings.map((yes, index)=>
    <li key={index}>{yes}</li>
     )}
    
</ul>

}
  
</p>
  </div>
  
  </div>
 
  </>
)
}

export default Confirmation