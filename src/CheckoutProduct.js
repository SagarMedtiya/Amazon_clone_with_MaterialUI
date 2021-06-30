import React from 'react';
import './CheckProduct.css'
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating';


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__img"src={image} />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                </div>
                <Button variant="text" color="default" onClick={removeFromBasket}>
                  Delete
                </Button>
            </div>
        </div>
    )
}

export default CheckoutProduct
