import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import Pizza from './pizza';
import Confirmation from './confirmation'
import {v4 as uuid} from 'uuid'
import * as yup from 'yup'
import formSchema from './formSchema'

const initialValues ={
  id: uuid(),
 name: '',
 size: '',
  toppings:{
    pepperoni: false,
    sausage: false,
    peppers: false,
    cheese: false,
  },
  special: '',
  
}

const initialErrors = {
  name: '',
  size: '',
}

const initialOrder =[]
const initialDisabled = true

const App = () => {
const [pizza, setPizza] = useState(initialOrder)
const [values, setValues] = useState(initialValues)
const [orderErrors, setOrderErrors] = useState(initialErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const thisUrl = 'https://reqres.in/api/unknown/'

const getInfo = () => {
  axios.get(thisUrl)
  .then(res => {
    setPizza(res.data.data)
  })
  .catch(error => {
    console.log('check axios get')
  })
}

const postOrder = newOrder => {
  axios.post(thisUrl, newOrder)
  .then( res => {
    setPizza([...pizza, res.data])
  })
  .catch(error => {
    console.log('check axios post')
  })
  .finally(() => {
    setValues(initialValues)
  })
}

const inputChange = (name, value) => {

  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setOrderErrors({
      ...orderErrors,
      [name]: ""
    });
  })
.catch(error => {
  setOrderErrors({
    ...orderErrors,
    [name]: error.errors[0]
  });
});

  setValues({
    ...values,
    [name]: value
  })
}

const checkboxChange = (name, isChecked) => {
  setValues({
    ...values,
    [name]: isChecked
  })
}


const submit = () => {
  const newOrder = {
    name: values.name.trim(),
    size: values.size,
    toppings: values.toppings,
    special: values.special.trim(),
  }
  postOrder(newOrder)
}

useEffect(() => {
  getInfo()
}, [])

useEffect(() =>{
  formSchema.isValid(values)
  .then(valid => {
    setDisabled(!valid)
  });
}, [values])

  return (
    <>
    <div className="homepage">
      <h1>Lambda Eats</h1>
      <p>Ready for the weekend?</p>
      <Link to='/pizza' className='order-button'>Start Your Order Here</Link>
      </div>
      
      <Switch>
      <Route path='/pizza/confirmation'>
          <Confirmation/>
        </Route>
        <Route path='/pizza'>
          <Pizza
          values={values}
          inputChange={inputChange}
          submit={submit}
          checkboxChange={checkboxChange}
          disabled={disabled}
          />
        </Route>
      <Route path='/'>
        <App/>
        </Route> 

      </Switch>
    </>
  );
};
export default App;
