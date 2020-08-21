import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import Pizza from './pizza';
import confirmation from './cnfirmation'

const App = () => {
const [pizza, setPizza] = useState([])
const [toppings, setToppings] = useState([])


  return (
    <>
    <div className="homepage">
      <h1>Lambda Eats</h1>
      <p>Ready for the weekend?</p>
      <Link to='/pizza' className='order-button'>Start Your Order Here</Link>
      </div>
      
      <Switch>
        <Route path='/pizza'>
          <Pizza/>
        </Route>
        <Route path='/pizza/OrderConfirmation'>
          <OrderConfirmation/>
        </Route>

      </Switch>
    </>
  );
};
export default App;
