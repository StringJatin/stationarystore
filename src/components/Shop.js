import React from 'react'
import list from '../list'
import Card from './Card'
import '../style/CardStyle.css'
import Navbar from './Navbar'
export default function shop(props) {
  return (
    <>
    <Navbar size={props.size}/>
    <div className='container'>
      {list.map((item)=>{
       return <Card item={item} key={item.id} handleClick={props.handleClick} />
      })}
      
    </div>
    </>
  )
}
