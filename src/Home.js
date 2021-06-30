import React from 'react'
import './Home.css'
import Product from './Product'
import FlipMove from 'react-flip-move';

function Home() {
    
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home_containerImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        id='123123' 
                        title='The lean startup' 
                        price={19.90} 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLNFRhmPXVXdFgZCPIHI_caiNbIFIA3IeEw&usqp=CAU" 
                        rating={5}/>
                    <Product 
                        id='1231234' 
                        title="Samsung Galaxy M31 (Ocean Blue, 8GB RAM, 128GB Storage)" 
                        price={239.00} 
                        rating={4} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg' />
                </div>
                <div className="home__row">
                    <Product
                        id='1555855'
                        title='Ariel Matic Top Load Detergent Washing Powder - 4 kg with Free Detergent Powder - 2 kg'
                        price={152.00}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81fBM0t%2B2fL._SL1500_.jpg'/>
                    <Product
                        id ='4886454'
                        title = 'Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)'
                        price={1538.00}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SL1500_.jpg'/>
                    <Product
                        id='7894560'
                        title = 'Fossil Gen 5(44mm, black) Carlyle Silicone Touchscreen Smartwatch'
                        price={596.00}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UL1500_.jpg'/>
                </div>
                <div className="home__row">
                    <Product
                        id='7894564'
                        title = 'Strava Nutrition Weight Gainer with Whey protein, Ashwagandha extract and digestive enzymes (Chocolate Flavour) 1kg / 2.2 lbs'
                        price={698.00}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81mrNUdG8rL._SL1500_.jpg'/>
                </div>

            </div>
            
        </div>
    )
}

export default Home
