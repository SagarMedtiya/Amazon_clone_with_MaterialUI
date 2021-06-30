import React from 'react';
import './Product.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from "./StateProvider"
import Rating from '@material-ui/lab/Rating';
import FlipMove from 'react-flip-move';

function Product({id,title, image, price,rating}) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image:image,
                price: price,
                rating: rating,
            },
        });
    }
    return (
        
            <div className='product'>
                
                <div className="product__info">
                    <p> {title}</p>
                    <p className="product__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                    </div>
                </div>
                <img src={image} alt="" />
                <Button variant="contained" color="default" onClick={addToBasket} >
                Add to Basket
                </Button>
                
            </div>
    )
}

export default Product
