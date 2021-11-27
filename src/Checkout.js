import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom';

function Checkout() {
    const history = () => useHistory;
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className='checkoutt'>
            <div className='checkout__left'>
                <img 
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"/>
                <h3>{user ? `Hello, ${user?.email}`: 'Hello, Guest'}</h3>
                <h2 className="checkout__title">Your shopping basket</h2>
                 {basket.map(item =>(
                     <CheckoutProduct
                        id = {item.id}
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                     />
                 ))}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

