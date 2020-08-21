

const Confirmation =() => {
    return(
        <div className='confirmation' key={pi.id}>
          <div className='order-container'>
      <h2>Name: {pi.name}</h2>
      <p>Pizza Size: {pi.size}</p>
      <p>Toppings: {pi.toppings}</p>
      <p>Special Instructions: {pi.special}</p>
          </div>

        </div>
      )

}

export default Confirmation