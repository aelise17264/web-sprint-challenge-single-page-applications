import React from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom'

const Pizza = (props) => {

const {
values,
inputChange,
submit,
checkboxChange
} = props


    return(
        <>
        <form className='orderContainer'>
            <h2>Customize Your Pizza🍕</h2>
                <div className='orderInfo'>
                    <label>Your Name:
                        <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        placeholder='your name here'
                        />
                    </label>
                    <label>Size:
                        <select className='pizzaSize' 
                        name='size' 
                        value={values.size} 
                        onChange={onInputChange}>
                            <option value=''>--Pizza Size --</option>
                            <option value='twelve'>12 inch</option>
                            <option value='fourteen'>14 inch</option>
                            <option value='sixteen'>16 inch</option>
                            <option value='eighteen'>18 inch</option>
                        </select>
                    </label>
                   
                    <label>Toppings:
                        <label>Pepperoni
                            <input
                            type='checkbox'
                            name='toppings'
                            checked={values.toppings.pepperoni === true}
                            onChange={onInputChange}
                            />
                        </label>
                        <label>Sausage
                            <input
                            type='checkbox'
                            name='toppings'
                            checked={values.toppings.sausage === true}
                            onChange={onInputChange}
                            />
                        </label>
                          <label>Green Peppers
                            <input
                            type='checkbox'
                            name='toppings'
                            checked={values.toppings.peppers === true}
                            onChange={onInputChange}
                            />
                        </label>
                          <label>Extra Cheese
                            <input
                            type='checkbox'
                            name='toppings'
                            checked={values.toppings.cheese === true}
                            onChange={onInputChange}
                            />
                        </label>
                    </label>
                    <label>Special Instructions:
                        <input
                            value={values.special}
                            onChange={onInputChange}
                            name='special'
                            type='text'
                            placeholder='anything special we should know'
                        />
                    </label>
                </div>
        </form>
    <Link to='./confirmation' type='submit' onSubmit={onSubmit} disabled={disabled}>Submit Your Order</Link>
   </>
    )


}

export default Pizza