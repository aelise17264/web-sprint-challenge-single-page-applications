import React from 'react'
import {Link} from 'react-router-dom'

function Pizza(props) {

        const {
            update,
        values,
        inputChange,
      submit,
        checkboxChange,
        disabled,
        orderErrors
        } = props

const onSubmit = event => {
    event.preventDefault()
    submit()
    
}

const onChange = event => {
    const name = event.target.name
    const value = event.target.value

    update(name, value)
}

const onCheckboxChange = event => {
    const name = event.target.name
    const checked = event.target.checked
    checkboxChange(name, checked)
}

const onInputChange = event => {
    const {name, value} = event.target
    inputChange(name, value)
}

    return(
        <>
        <form className='orderContainer' onSubmit={onSubmit}>
            <h2>Customize Your Pizza</h2>
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
                    <label>size:
                        <select className='pizzasize' 
                        name='size' 
                        value={values.size} 
                        onChange={onInputChange}>
                            <option value=''>--Pizza size --</option>
                            <option value='twelve'>12 inch</option>
                            <option value='fourteen'>14 inch</option>
                            <option value='sixteen'>16 inch</option>
                            <option value='eighteen'>18 inch</option>
                        </select>
                    </label>
                   <div className='color'>
                    <p>Color:</p>
                        <label>Pepperoni
                            <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onCheckboxChange}
                            />
                        </label>
                        <label>Sausage
                            <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onCheckboxChange}
                            />
                        </label>
                          <label>Green Peppers
                            <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={onCheckboxChange}
                            />
                        </label>
                          <label>Extra Cheese
                            <input
                            type='checkbox'
                            name='cheese'
                            checked={values.cheese}
                            onChange={onCheckboxChange}
                            />
                        </label>
                        </div>
                    <label>Special Instructions:
                        <input
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                            placeholder='anything special we should know'
                        />
                    </label>
                </div>
                <div className='Errors'>
                    <div>{orderErrors.name}</div>
                    <div>{orderErrors.size}</div>
                </div>
    <button >Submit Your Order</button>
    <Link to='/confirmation'>View Order Here</Link>
    </form>
   </>
    )


}

export default Pizza