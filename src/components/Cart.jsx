import React from 'react'
import Navbar from './Navbar'
import '../style/cart.css'
export default function Cart({cart , setCart, finalCartPrice, handleOnChangeI , handleOnChangeD} , props) {
    const handleRemove = (id)=>{
        const arr = cart.filter((item)=>item.id!=id);
        setCart(arr);
    }
  return (
    <>
    <Navbar size={props.size}/>
    <div className="displayCart">
    
    {cart.map((item)=>{
       return <div className="cartBox" key={item.id}>
        
            <div className="cart_img"><img src={item.img}/></div>
            <div className="CartTitle">{item.title}</div>
            <div>
                <button onClick={()=>handleOnChangeI(item.id)} className='Increment' >+</button>
                <button onClick={()=>handleOnChangeD(item.id)} className="Decrement">-</button>
            </div>
            <div>
                {console.log(item.finalPrice)}
                <span>{item.finalPrice}</span>
                <button className="remove" onClick={()=>{handleRemove(item.id)}} >Remove</button>
            </div>
            
        </div>
        
    })}   
    </div>
    <div className="finalPrice">Your Final Price: {finalCartPrice}</div> 
    
    </>
  )
}
