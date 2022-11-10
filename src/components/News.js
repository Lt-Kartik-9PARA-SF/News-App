import React from 'react'

export default function News(props) {
  return (
    <div className='newsCard'>
    <img src = {props.image} alt="image"/>
    <h3>{props.title}</h3>
    <p>
        {props.description}
    </p>
    
    <a href = {props.url} target="_blank"><button>Read More</button></a>
    </div>
  )
}
