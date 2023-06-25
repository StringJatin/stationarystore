import React from 'react';
import '../style/CardStyle.css';
import Navbar from './Navbar';

export default function Card({ item, handleClick }) {
  return (
    <>
    {/* <Navbar/> */}
    <section>
    <div className="cards-container">
      <div className="card">
        <div className="imageBox">
          <img src={item.img} alt="Product Image" />
        </div>
        <div className="details">
          <p><strong>{item.title}</strong></p>
          <p>by {item.author}</p>
          <p>Price: Rs. {item.Price}</p>
        </div>
        <div className="button-container">
          <button onClick={()=>handleClick(item)}>Add to cart</button>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
