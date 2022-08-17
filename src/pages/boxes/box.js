import React, { Component } from 'react'
import './box.css'

export class Box extends Component {
    render() {
        return (
            <div>
                <div className = 'box-container'>
                <div className = 'box-1'>
                  <i></i>
                  <h1 className = 'line-1'>Corporis voluptates sit</h1>
                  <p className = 'detail'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className = 'box-1'>
                  <i></i>
                  <h1 className = 'line-1'>Corporis voluptates sit</h1>
                  <p className = 'detail'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Box;
