import React from 'react'
import './container.css';

const Content = (props) => {
    return (    
            <div className = 'box'>
            <img className = 'img-design' src ={props.pic} alt = 'Loading'></img>
            <p className= 'content'>{props.move}</p>
            </div>
    )
}
export default Content;
